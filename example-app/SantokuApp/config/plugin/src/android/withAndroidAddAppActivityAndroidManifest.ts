import {ConfigPlugin, withAndroidManifest} from '@expo/config-plugins';

/**
 * AppActivityをAndroidManifest.xmlに追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddAppActivityAndroidManifest: ConfigPlugin = config => {
  return withAndroidManifest(config, config => {
    const androidManifest = config.modResults;
    const mainApplication = androidManifest.manifest.application?.find(a => a.$['android:name'] === '.MainApplication');
    if (!mainApplication) {
      // MainApplicationは必ず存在する想定
      throw new Error('MainApplication does not exist in AndroidManifest.');
    }
    const originalMainActivity = mainApplication.activity?.find(a => a.$['android:name'] === '.MainActivity');
    if (!originalMainActivity) {
      throw new Error('MainActivity does not exist in AndroidManifest application.');
    }
    const mainActivity = {
      $: {
        'android:name': '.MainActivity',
        'android:theme': '@style/Theme.App.SplashScreen',
        'android:exported': 'true' as 'true',
      },
      'intent-filter': [
        {
          action: [{$: {'android:name': 'android.intent.action.MAIN'}}],
          category: [{$: {'android:name': 'android.intent.category.LAUNCHER'}}],
        },
      ],
    };
    const restApplication =
      androidManifest.manifest.application?.filter(a => a.$['android:name'] !== '.MainApplication') ?? [];
    const restActivity = mainApplication.activity?.filter(a => a.$['android:name'] !== '.MainActivity') ?? [];

    config.modResults = {
      ...androidManifest,
      manifest: {
        ...androidManifest.manifest,
        application: [
          {
            ...mainApplication,
            activity: [
              mainActivity,
              {
                $: {
                  ...originalMainActivity.$,
                  'android:name': '.AppActivity',
                  'android:exported': 'false',
                  'android:theme': undefined,
                },
              },
              ...restActivity,
            ],
          },
          ...restApplication,
        ],
      },
    };
    return config;
  });
};
