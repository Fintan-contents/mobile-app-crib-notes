import {ConfigPlugin, withPlugins} from '@expo/config-plugins';

import {withAndroidAddNativeModulePackages} from './withAndroidAddNativeModulePackages';
import {withAndroidCopyTemplateJavaFile} from './withAndroidCopyTemplateJavaFile';
import {ANDROID} from '../constants';

const THROW_ERROR_MODULE_FILE_NAME = 'ThrowErrorModule.java';
const THROW_ERROR_PACKAGE_FILE_NAME = 'ThrowErrorPackage.java';

/**
 * アプリで作成したNativeModulesを追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddNativeModules: ConfigPlugin = config => {
  return withPlugins(config, [
    [
      withAndroidCopyTemplateJavaFile,
      {srcDir: ANDROID.PLUGIN_TEMPLATE_MAIN_ACTIVITY_DIR, fileName: THROW_ERROR_MODULE_FILE_NAME},
    ],
    [
      withAndroidCopyTemplateJavaFile,
      {srcDir: ANDROID.PLUGIN_TEMPLATE_MAIN_ACTIVITY_DIR, fileName: THROW_ERROR_PACKAGE_FILE_NAME},
    ],
    withAndroidAddNativeModulePackages,
  ]);
};
