import {ConfigPlugin, withAppBuildGradle} from '@expo/config-plugins';

/**
 * このPluginでは、以下を実施しています。
 * 【リリース用のSigningConfigを追加】
 * リリース用のSigningConfigは、以下のプロパティをgradle.propertiesに設定する必要があります。
 *
 * - SANTOKU_APP_UPLOAD_KEYSTORE_FILE
 * - SANTOKU_APP_UPLOAD_KEYSTORE_PASSWORD
 * - SANTOKU_APP_UPLOAD_KEY_ALIAS
 * - SANTOKU_APP_UPLOAD_KEY_PASSWORD
 *
 * 【Firebaseに関するGradle Pluginの適用】
 * 以下のGradle Pluginを適用しています。
 * - com.google.gms.google-services
 * - com.google.firebase.crashlytics
 *
 * Expoが標準で用意しているPluginや、React Native Firebase CrashlyticsのPluginでも上記Gradle Pluginを適用できるのですが、
 * build.gradleの最下部でGradle Pluginを適用してしまいます。
 * その場合、後述する「NDKのクラッシュログ収集に関する設定」を追加できないため、build.gradleの先頭でGradle Pluginを適用するようにしています。
 *
 * 【NDKのクラッシュログ収集に関する設定を追加】
 * リリースビルドの場合は、Native Development KitのクラッシュログをFirebase Crashlyticsに送信する設定を追加します。
 *
 * @param config ExpoConfig
 * @see https://rnfirebase.io/crashlytics/android-setup#4-optional-enable-crashlytics-ndk-reporting
 */
export const withAndroidAppBuildGradleForRelease: ConfigPlugin = config => {
  return withAppBuildGradle(config, config => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = apply(config.modResults.contents);
    } else {
      throw new Error('In this app, only groovy is supported as the language for build.gradle.');
    }
    return config;
  });
};

const apply = (buildGradle: string): string => {
  const addedFirebasePlugin = addFirebasePlugin(buildGradle);
  const addedReleaseSigningConfig = addReleaseSigningConfig(addedFirebasePlugin);
  return setReleaseSigningConfigAndNdkCrashReporting(addedReleaseSigningConfig);
};

const addFirebasePlugin = (buildGradle: string): string => {
  // ExpoのデフォルトPluginは、「com.google.gms.google-services」を適用します。
  // https://github.com/expo/expo/blob/main/packages/%40expo/prebuild-config/src/plugins/withDefaultPlugins.ts#L92
  // https://github.com/expo/expo/blob/main/packages/%40expo/config-plugins/src/android/GoogleServices.ts#L32
  // ExpoのデフォルトPluginは、app.config.jsに定義したpluginsよりも先に実行されてしまうため、
  // 以下の存在チェックを実施していますが、必ずbuild.gradleの最下部に「com.google.gms.google-services」を追加してしまいます。
  // https://github.com/expo/expo/blob/main/packages/%40expo/config-plugins/src/android/GoogleServices.ts#L118
  // build.gradleの最下部に追加すると、NDKのクラッシュログ収集に関する設定ができないため、
  // Expoがデフォルトで適用する「com.google.gms.google-services」を削除します。
  const removedGoogleServicePlugin = buildGradle.replace(
    /\napply\s+plugin:\s+['"]com\.google\.gms\.google-services['"]/,
    '',
  );
  // build.gradleの先頭でFirebaseに関するGradle Pluginを適用します。
  return removedGoogleServicePlugin.replace(
    /apply\s+plugin:\s+['"]com\.android\.application['"]/,
    `apply plugin: "com.android.application"
apply plugin: "com.google.gms.google-services"
apply plugin: "com.google.firebase.crashlytics"`,
  );
};

const addReleaseSigningConfig = (buildGradle: string): string => {
  return buildGradle.replace(
    'signingConfigs {',
    `signingConfigs {
        release {
            // You must set following properties in gradle.properties for release build
            if (project.hasProperty('SANTOKU_APP_UPLOAD_KEYSTORE_FILE')) {
                storeFile file(SANTOKU_APP_UPLOAD_KEYSTORE_FILE)
                storePassword SANTOKU_APP_UPLOAD_KEYSTORE_PASSWORD
                keyAlias SANTOKU_APP_UPLOAD_KEY_ALIAS
                keyPassword SANTOKU_APP_UPLOAD_KEY_PASSWORD
            }
        }`,
  );
};

const setReleaseSigningConfigAndNdkCrashReporting = (buildGradle: string): string => {
  return buildGradle.replace(
    /buildTypes[\s\S]*release[\s\S]*signingConfigs\.debug/,
    `buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.release
            // Crashlytics NDK reporting allows you to capture Native Development Kit crashes.
            // see https://rnfirebase.io/crashlytics/android-setup#4-optional-enable-crashlytics-ndk-reporting
            firebaseCrashlytics {
                nativeSymbolUploadEnabled true
                unstrippedNativeLibsDir 'build/intermediates/merged_native_libs/release/out/lib'
            }`,
  );
};
