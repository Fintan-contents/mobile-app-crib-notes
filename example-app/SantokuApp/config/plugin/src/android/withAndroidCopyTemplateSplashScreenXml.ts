import {AndroidConfig, ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import path from 'path';

import {ANDROID} from '../constants';
import {copyFile} from '../utils/copyFile';

const DRAWABLE_DIR_NAME = 'drawable';
const SPLASH_SCREEN_XML_FILE_NAME = 'splashscreen.xml';

/**
 * テンプレートの「splashscreen.xml」を、「android/app/main/res/drawable」配下にコピーします。
 * @param config ExpoConfig
 */
export const withAndroidCopyTemplateSplashScreenXml: ConfigPlugin = config => {
  return withDangerousMod(config, [
    'android',
    async config => {
      const resourceDir = await AndroidConfig.Paths.getResourceFolderAsync(config.modRequest.projectRoot);
      copyFile(
        path.resolve(ANDROID.PLUGIN_TEMPLATE_RESOURCE_DIR, DRAWABLE_DIR_NAME, SPLASH_SCREEN_XML_FILE_NAME),
        path.resolve(resourceDir, DRAWABLE_DIR_NAME, SPLASH_SCREEN_XML_FILE_NAME),
      );
      return config;
    },
  ]);
};
