import {IOSConfig, ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import path from 'path';

import {IOS} from '../constants';
import {copyDir} from '../utils/copyDir';
import {copyFile} from '../utils/copyFile';

const STORYBOARD_FILE_NAME = 'SplashScreen.storyboard';
const IMAGES_XCASSETS_DIR_NAME = 'Images.xcassets';

/**
 * テンプレートの「SplashScreen.storyboard」を、「ios/[プロジェクト名]」配下にコピーします。
 *
 * Storyboardに「SplashScreen」という名前でImageを追加すると、expo-splash-screenのプラグインによって定義が上書きされてしまいます。
 * そのため、Imageを追加する場合は「SplashScreen」以外の名前を付けてください。
 *
 * @see https://github.com/expo/expo/blob/main/packages/%40expo/prebuild-config/src/plugins/unversioned/expo-splash-screen/wtihIosSplashScreenStoryboardImage.ts#L19
 * @param config ExpoConfig
 */
export const withIosOverrideStoryboard: ConfigPlugin = config => {
  return withDangerousMod(config, [
    'ios',
    config => {
      const projectRoot = config.modRequest.projectRoot;
      const sourceRoot = IOSConfig.Paths.getSourceRoot(projectRoot);
      copyFile(
        path.resolve(IOS.PLUGIN_TEMPLATE_SOURCE_DIR, STORYBOARD_FILE_NAME),
        path.resolve(sourceRoot, STORYBOARD_FILE_NAME),
      );
      copyDir(
        path.resolve(IOS.PLUGIN_TEMPLATE_SOURCE_DIR, IMAGES_XCASSETS_DIR_NAME),
        path.resolve(sourceRoot, IMAGES_XCASSETS_DIR_NAME),
      );
      return config;
    },
  ]);
};
