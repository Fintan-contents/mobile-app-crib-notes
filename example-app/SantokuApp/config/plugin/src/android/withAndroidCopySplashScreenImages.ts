import {AndroidConfig, ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import path from 'path';

import {copyDir} from '../utils/copyDir';

export type CopySplashScreenImagesProps = {
  ldpi?: string;
  mdpi?: string;
  hdpi?: string;
  xhdpi?: string;
  xxhdpi?: string;
  xxxhdpi?: string;
};

/**
 * スプラッシュスクリーン用の画像をコピーします。
 * dpi毎に、画像が配置されているディレクトリを指定します。
 * @param config ExpoConfig
 * @param props CopySplashscreenImagesProps
 */
export const withAndroidCopySplashScreenImages: ConfigPlugin<CopySplashScreenImagesProps> = (config, props) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      const resourceDir = await AndroidConfig.Paths.getResourceFolderAsync(config.modRequest.projectRoot);
      Object.entries(props).forEach(([dpi, srcPath]) => {
        srcPath &&
          copyDir(path.resolve(config.modRequest.projectRoot, srcPath), path.resolve(resourceDir, `drawable-${dpi}`));
      });
      return config;
    },
  ]);
};
