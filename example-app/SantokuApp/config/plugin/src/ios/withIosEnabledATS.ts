import {ConfigPlugin, withInfoPlist} from '@expo/config-plugins';

/**
 * ATS（App Transport Security）を有効化します。
 * @param config ExpoConfig
 */
export const withIosEnabledATS: ConfigPlugin = config => {
  return withInfoPlist(config, config => {
    config.modResults = {...config.modResults, NSAppTransportSecurity: undefined};
    return config;
  });
};
