import {ConfigPlugin, withAndroidManifest} from 'expo/config-plugins';

/**
 * 「android:usesCleartextTraffic」の設定を削除します。
 * android:usesCleartextTrafficのデフォルト値はfalseのため、HTTP通信が禁止（HTTPS通信のみ許可）されます。
 *
 * なお、「android:usesCleartextTraffic」の設定を削除しないでfalseを設定すると、ビルド時にエラーが発生してしまいます。
 * 「debug/AndroidManifest.xml」では「android:usesCleartextTraffic」をtrueに設定していますが、同じ設定値をoverrideする場合は「tools:replace」を設定する必要があるためです。
 * そのため、ここでは「android:usesCleartextTraffic」の設定を削除する対応を実施しています。
 *
 * @param config ExpoConfig
 */
export const withAndroidRemoveUsesClearTextTrafficForRelease: ConfigPlugin = config => {
  return withAndroidManifest(config, config => {
    const androidManifest = config.modResults;
    const applications = androidManifest.manifest.application;
    const disabledClearTextTrafficApplications = applications?.map(a => ({
      ...a,
      $: {...a.$, 'android:usesCleartextTraffic': undefined},
    }));
    config.modResults = {
      ...androidManifest,
      manifest: {
        ...androidManifest.manifest,
        application: disabledClearTextTrafficApplications,
      },
    };
    return config;
  });
};
