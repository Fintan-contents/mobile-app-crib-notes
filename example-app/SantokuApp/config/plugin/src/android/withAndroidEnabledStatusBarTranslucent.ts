import {ConfigPlugin, withStringsXml} from '@expo/config-plugins';

/**
 * Avoid image shifting occurs when the splash screen changes from theme background to ImageView shown by expo-splash-screen
 * cf.) https://github.com/expo/expo/tree/master/packages/expo-splash-screen#-optional-customize-statusbar-1
 * @param config ExpoConfig
 */
export const withAndroidEnabledStatusBarTranslucent: ConfigPlugin = config => {
  return withStringsXml(config, config => {
    const strings = config.modResults.resources.string ?? [];
    const filtered = strings?.filter(s => s.$.name !== 'expo_splash_screen_status_bar_translucent');
    config.modResults = {
      resources: {
        ...config.modResults.resources,
        string: [
          ...filtered,
          {
            $: {
              name: 'expo_splash_screen_status_bar_translucent',
              translatable: 'false',
            },
            _: 'true',
          },
        ],
      },
    };
    return config;
  });
};
