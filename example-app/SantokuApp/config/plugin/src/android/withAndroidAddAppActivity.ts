import {ConfigPlugin, withPlugins} from 'expo/config-plugins';

import {withAndroidAddAppActivityAndroidManifest} from './withAndroidAddAppActivityAndroidManifest';
import {withAndroidCopyMainActivity} from './withAndroidCopyMainActivity';
import {withAndroidCopyTemplateSourceFile} from './withAndroidCopyTemplateSourceFile';
import {ANDROID} from '../constants';

const MAIN_ACTIVITY_FILE_NAME = 'MainActivity.kt';
const APP_ACTIVITY_CLASS_NAME = 'AppActivity';

/**
 * Transition中にActivityのbackgroundが表示される問題があるため、Splash Screen用とReact Native用にActivityを分けます。
 * https://github.com/software-mansion/react-native-screens/issues/380
 *
 * 1. 「MainActivity.kt」を「AppActivity.kt」というファイル名でコピー（併せて、「AppActivity.kt」のクラス名を「AppActivity」に変更）
 * 2. テンプレートのMainActivity.ktを「android/app/src/main/[パッケージ名]」にコピー（既存のMainActivity.ktを上書き）
 * 3. AndroidManifest.xmlにAppActivityを追加
 *
 * 1でMainActivity.ktを単純にリネームしないでコピーしているのは、MainActivity.ktが存在しないとExpo prebuild中にエラーが発生するためです。
 * @param config ExpoConfig
 */
export const withAndroidAddAppActivity: ConfigPlugin = config => {
  return withPlugins(config, [
    [
      withAndroidCopyTemplateSourceFile,
      {srcDir: ANDROID.PLUGIN_TEMPLATE_MAIN_ACTIVITY_DIR, fileName: MAIN_ACTIVITY_FILE_NAME},
    ],
    [withAndroidCopyMainActivity, {toClassName: APP_ACTIVITY_CLASS_NAME}],
    withAndroidAddAppActivityAndroidManifest,
  ]);
};
