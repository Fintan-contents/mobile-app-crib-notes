import {ConfigPlugin, withAndroidStyles} from '@expo/config-plugins';

/**
 * Avoid image shifting occurs when the splash screen changes from theme background to ImageView shown by expo-splash-screen
 * cf.) https://github.com/crazycodeboy/react-native-splash-screen/issues/241
 * @param config ExpoConfig
 */
export const withAndroidDisabledWindowDrawsSystemBarBackgrounds: ConfigPlugin = config => {
  return withAndroidStyles(config, config => {
    const styles = config.modResults.resources.style ?? [];
    const filtered = styles?.filter(s => s.$.name !== 'Theme.App.SplashScreen');
    const originalSplashScreenStyle = styles.find(s => s.$.name === 'Theme.App.SplashScreen');
    const splashScreenStyle = originalSplashScreenStyle
      ? [
          {
            $: originalSplashScreenStyle.$,
            item: [
              ...originalSplashScreenStyle.item,
              {
                _: 'false',
                $: {
                  name: 'android:windowDrawsSystemBarBackgrounds',
                },
              },
            ],
          },
        ]
      : [];
    config.modResults = {resources: {...config.modResults.resources, style: [...filtered, ...splashScreenStyle]}};
    return config;
  });
};
