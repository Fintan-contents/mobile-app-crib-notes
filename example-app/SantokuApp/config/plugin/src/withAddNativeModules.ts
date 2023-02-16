import {ConfigPlugin, withPlugins} from '@expo/config-plugins';

import {withAndroidAddNativeModules} from './android/withAndroidAddNativeModules';
import {withIosAddNativeModules} from './ios/withIosAddNativeModules';
/**
 * アプリで作成したNativeModulesを追加します。
 */
export const withAddNativeModules: ConfigPlugin = config => {
  return withPlugins(config, [withAndroidAddNativeModules, withIosAddNativeModules]);
};
