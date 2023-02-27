import {ConfigPlugin, IOSConfig, withXcodeProject} from '@expo/config-plugins';
import fs from 'fs';
import path from 'path';

import {PbxProjectConfig} from './PbxProjectConfig';
import {PbxProject} from './types/pbxproj';
import {IOS} from '../constants';
import {copyFile} from '../utils/copyFile';

const PERSONAL_ACCOUNT_CONFIG_FILE_NAME = 'PersonalAccount.xcconfig';

/**
 * PersonalAccountConfigを追加します。
 *
 * 前提として「config/plugin/template/ios/HelloWorld/PersonalAccount.xcconfig」が存在することを想定しています。
 * 存在しない場合は、警告ログを出力して正常終了します。
 * @param config ExpoConfig
 */
export const withIosAddPersonalAccountConfig: ConfigPlugin = config => {
  return withXcodeProject(config, config => {
    const pbxProject = PbxProjectConfig.getPbxProject(config);
    const projectRoot = config.modRequest.projectRoot;

    const personalAccountConfigPath = path.resolve(IOS.PLUGIN_TEMPLATE_SOURCE_DIR, PERSONAL_ACCOUNT_CONFIG_FILE_NAME);
    try {
      const stats = fs.statSync(personalAccountConfigPath);
      if (!stats.isFile()) {
        return config;
      }
    } catch (e) {
      console.warn(
        `Failed to copy ${PERSONAL_ACCOUNT_CONFIG_FILE_NAME} because ${PERSONAL_ACCOUNT_CONFIG_FILE_NAME} does not exist.`,
        e,
      );
      return config;
    }

    copyFile(
      personalAccountConfigPath,
      path.resolve(IOSConfig.Paths.getSourceRoot(projectRoot), PERSONAL_ACCOUNT_CONFIG_FILE_NAME),
    );

    const fileUuid = pbxProject.generateUuid();
    const fileRef = pbxProject.generateUuid();

    const addedPbxProject = addPersonalAccountConfigToGroup(pbxProject, projectRoot, fileUuid, fileRef);
    config.modResults = setBaseConfigurationReference(addedPbxProject, fileRef);
    return config;
  });
};

const addPersonalAccountConfigToGroup = (
  pbxProject: PbxProject,
  projectRoot: string,
  fileUuid: string,
  fileRef: string,
): PbxProject => {
  const projectName = IOSConfig.XcodeUtils.getProjectName(projectRoot);
  const plistFilePath = path.join(projectName, PERSONAL_ACCOUNT_CONFIG_FILE_NAME);
  return IOSConfig.XcodeUtils.addResourceFileToGroup({
    filepath: plistFilePath,
    groupName: projectName,
    project: pbxProject,
    isBuildFile: false,
    fileUuid,
    fileRef,
  }) as PbxProject;
};

const setBaseConfigurationReference = (pbxProject: PbxProject, fileRef: string) => {
  const buildConfigurations = PbxProjectConfig.getBuildConfigurations(pbxProject);

  const editedBuildConfigurations = buildConfigurations.reduce((prev, buildConfiguration) => {
    const id = Object.keys(buildConfiguration)[0];
    if (!buildConfiguration[id].baseConfigurationReference) {
      return {
        ...prev,
        [id]: {
          ...buildConfiguration[id],
          baseConfigurationReference: fileRef,
        },
      };
    }

    return {
      ...prev,
      ...buildConfiguration,
    };
  }, {});
  return PbxProjectConfig.mergeBuildConfigurations(pbxProject, editedBuildConfigurations);
};
