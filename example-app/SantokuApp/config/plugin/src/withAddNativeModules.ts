import {ConfigPlugin, withPlugins} from '@expo/config-plugins';

import {withAddNativeModules as withAddAndroidNativeModules} from './android/withAddNativeModules';
import {withAddNativeModules as withAddIOSNativeModules} from './ios/withAddNativeModules';
/**
 * アプリで作成したNativeModulesを追加します。
 */
export const withAddNativeModules: ConfigPlugin = config => {
  return withPlugins(config, [withAddAndroidNativeModules, withAddIOSNativeModules]);
};
