import {ExportedConfigWithProps, XcodeProject} from 'expo/config-plugins';

import {PbxProject, PbxProjectXCBuildConfigurationId} from './types/pbxproj';

const getPbxProject = (config: ExportedConfigWithProps<XcodeProject>): PbxProject => {
  return config.modResults as PbxProject;
};

const getBuildConfigurations = (pbxProject: PbxProject): PbxProjectXCBuildConfigurationId[] => {
  const objects = pbxProject.hash.project.objects;
  const xcBuildConfigurations = objects.XCBuildConfiguration;
  const xcBuildConfigurationIds = Object.keys(xcBuildConfigurations);

  return xcBuildConfigurationIds
    .filter(id => !id.endsWith('_comment'))
    .map(id => ({
      [id]: {
        ...xcBuildConfigurations[id],
      },
    }));
};

const mergeBuildConfigurations = (pbxProject: PbxProject, buildConfigurations: PbxProjectXCBuildConfigurationId) => {
  // pbxProjectのprototypeを消さないように、Object.assignでマージしています。
  return Object.assign(pbxProject, {
    ...pbxProject,
    hash: {
      ...pbxProject.hash,
      project: {
        ...pbxProject.hash.project,
        objects: {
          ...pbxProject.hash.project.objects,
          XCBuildConfiguration: {
            ...pbxProject.hash.project.objects.XCBuildConfiguration,
            ...buildConfigurations,
          },
        },
      },
    },
  });
};

export const PbxProjectConfig = {
  getPbxProject,
  getBuildConfigurations,
  mergeBuildConfigurations,
};
