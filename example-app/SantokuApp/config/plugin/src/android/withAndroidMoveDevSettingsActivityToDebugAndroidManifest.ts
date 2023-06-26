import {ConfigPlugin, withAndroidManifest, AndroidConfig} from 'expo/config-plugins';
import path from 'path';

/**
 * DevSettingsActivityの設定を「main/AndroidManifest.xml」から「debug/AndroidManifest.xml」に移動します。
 * @param config ExpoConfig
 */
export const withAndroidMoveDevSettingsActivityToDebugAndroidManifest: ConfigPlugin = config => {
  return withAndroidManifest(config, async config => {
    const androidManifest = config.modResults;
    const mainApplication = androidManifest.manifest.application?.find(a => a.$['android:name'] === '.MainApplication');
    if (!mainApplication) {
      // MainApplicationは必ず存在する想定
      throw new Error('MainApplication does not exist in AndroidManifest.');
    }
    const originalDevSettingsActivity = mainApplication.activity?.find(
      a => a.$['android:name'] === 'com.facebook.react.devsupport.DevSettingsActivity',
    );
    if (!originalDevSettingsActivity) {
      return config;
    }

    await addDevSettingsActivityToDebugAndroidManifest(
      config.modRequest.platformProjectRoot,
      originalDevSettingsActivity,
    );

    const restApplication =
      androidManifest.manifest.application?.filter(a => a.$['android:name'] !== '.MainApplication') ?? [];
    const restActivity =
      mainApplication.activity?.filter(
        a => a.$['android:name'] !== 'com.facebook.react.devsupport.DevSettingsActivity',
      ) ?? [];
    config.modResults = {
      ...androidManifest,
      manifest: {
        ...androidManifest.manifest,
        application: [
          {
            ...mainApplication,
            activity: restActivity,
          },
          ...restApplication,
        ],
      },
    };
    return config;
  });
};

const addDevSettingsActivityToDebugAndroidManifest = async (
  platformProjectRoot: string,
  originalDevSettingsActivity: AndroidConfig.Manifest.ManifestActivity,
) => {
  const {readAndroidManifestAsync, writeAndroidManifestAsync} = AndroidConfig.Manifest;
  const debugAndroidManifestPath = path.resolve(platformProjectRoot, 'app/src/debug/AndroidManifest.xml');
  const originalDebugAndroidManifest = await readAndroidManifestAsync(debugAndroidManifestPath);
  if (!originalDebugAndroidManifest.manifest.application?.length) {
    // applicationは必ず存在する想定
    throw new Error('Application does not exist in debug/AndroidManifest.');
  }
  const debugApplication = originalDebugAndroidManifest.manifest.application[0];

  const debugAndroidManifest = {
    manifest: {
      ...originalDebugAndroidManifest.manifest,
      application: [{...debugApplication, activity: [{...originalDevSettingsActivity}]}],
    },
  };
  await writeAndroidManifestAsync(debugAndroidManifestPath, debugAndroidManifest);
};
