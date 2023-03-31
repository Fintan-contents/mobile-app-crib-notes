import {ConfigPlugin, withInfoPlist} from '@expo/config-plugins';

/**
 * このアプリではカスタムスキーマを定義しないため、CFBundleURLTypesを削除します。
 * @param config ExpoConfig
 */
export const withIosRemoveCFBundleUrlTypes: ConfigPlugin = config => {
  return withInfoPlist(config, config => {
    config.modResults = {...config.modResults, CFBundleURLTypes: undefined};
    return config;
  });
};
