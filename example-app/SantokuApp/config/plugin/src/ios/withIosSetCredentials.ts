import {ConfigPlugin, withXcodeProject} from 'expo/config-plugins';

import {PbxProjectConfig} from './PbxProjectConfig';

type CredentialsProps = {
  developmentTeam?: string;
  codeSignStyle?: string;
  provisioningProfileSpecifier?: string;
  bundleIdentifier?: string;
};

/**
 * BundleIdentifierや署名に関する設定をします。
 * @param config ExpoConfig
 * @param developmentTeam
 * @param codeSignStyle
 * @param provisioningProfileSpecifier
 * @param bundleIdentifier
 */
export const withIosSetCredentials: ConfigPlugin<CredentialsProps> = (
  config,
  {developmentTeam, codeSignStyle, provisioningProfileSpecifier, bundleIdentifier},
) => {
  return withXcodeProject(config, config => {
    const pbxProject = PbxProjectConfig.getPbxProject(config);
    const buildConfigurations = PbxProjectConfig.getBuildConfigurations(pbxProject);

    const editedBuildConfigurations = buildConfigurations.reduce((prev, buildConfiguration) => {
      const id = Object.keys(buildConfiguration)[0];
      if (buildConfiguration[id].buildSettings?.PRODUCT_BUNDLE_IDENTIFIER) {
        return {
          ...prev,
          [id]: {
            ...buildConfiguration[id],
            buildSettings: {
              ...buildConfiguration[id].buildSettings,
              ...(bundleIdentifier && {PRODUCT_BUNDLE_IDENTIFIER: `"${bundleIdentifier}"`}),
              ...(developmentTeam && {DEVELOPMENT_TEAM: `"${developmentTeam}"`}),
              ...(codeSignStyle && {CODE_SIGN_STYLE: `"${codeSignStyle}"`}),
              ...(provisioningProfileSpecifier && {
                PROVISIONING_PROFILE_SPECIFIER: `"${provisioningProfileSpecifier}"`,
              }),
            },
          },
        };
      }

      return {
        ...prev,
        ...buildConfiguration,
      };
    }, {});

    config.modResults = PbxProjectConfig.mergeBuildConfigurations(pbxProject, editedBuildConfigurations);

    return config;
  });
};
