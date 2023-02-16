import {ConfigPlugin, withPlugins} from '@expo/config-plugins';

import {CopySplashScreenImagesProps, withAndroidCopySplashScreenImages} from './withAndroidCopySplashScreenImages';
import {withAndroidCopyTemplateSplashScreenXml} from './withAndroidCopyTemplateSplashScreenXml';

export type FlexibleSplashScreenProps = CopySplashScreenImagesProps;

/**
 * Expoの標準プラグインでは、スプラッシュスクリーンに1枚の画像しか設定できません。
 * このアプリでは、複数の画像を中央で画面サイズに合わせて表示したり、下揃えで表示したりする必要があります。
 * このプラグインでは、スプラッシュスクリーン用に複数枚の画像をコピーしたり、それらの画像を使用する設定ファイルをテンプレートからコピーします。
 *
 * 1. 「assets/splashscreen」配下の画像を、「android/app/main/res/drawable-[dpi]」配下にコピー
 * 2. テンプレートのsplashscreen.xmlを「android/app/src/main/res/drawable」にコピー
 *
 * @see ../../../patches#スプラッシュスクリーンの表示を柔軟にする
 * @param config ExpoConfig
 * @param props SplashscreenProps
 */
export const withAndroidFlexibleSplashScreen: ConfigPlugin<FlexibleSplashScreenProps> = (config, props) => {
  return withPlugins(config, [[withAndroidCopySplashScreenImages, {...props}], withAndroidCopyTemplateSplashScreenXml]);
};
