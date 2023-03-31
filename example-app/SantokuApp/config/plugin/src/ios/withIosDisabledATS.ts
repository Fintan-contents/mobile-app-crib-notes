import {ConfigPlugin, withInfoPlist} from '@expo/config-plugins';

/**
 * ATS（App Transport Security）を無効化します。
 * @param config ExpoConfig
 */
export const withIosDisabledATS: ConfigPlugin = config => {
  return withInfoPlist(config, config => {
    config.modResults = {...config.modResults, NSAppTransportSecurity: {NSAllowsArbitraryLoads: true}};
    return config;
  });
};
