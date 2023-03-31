import deepmerge from 'deepmerge';

import localConfig from './config/app.config.local.js';
import prodConfig from './config/app.config.prod.js';
import stgConfig from './config/app.config.stg.js';
import {
  withAndroidAddLicensePlugin,
  withAndroidAddAppActivity,
  withAndroidEnabledStatusBarTranslucent,
  withAndroidDisabledWindowDrawsSystemBarBackgrounds,
  withAndroidMoveDevSettingsActivityToDebugAndroidManifest,
  withIosRemoveCFBundleUrlTypes,
  withAddNativeModules,
  withAndroidFlexibleSplashScreen,
  withIosOverrideStoryboard,
} from './config/app.plugin.js';

const environmentConfig = {
  local: localConfig,
  stg: stgConfig,
  prod: prodConfig,
};
/**
 * アプリ全体のベースとなる設定です。
 * 環境毎に違う設定値は、prodの設定を定義しています。（一部のプラグインを除く）
 * prodと違う設定を定義する場合などは、各環境ごとの設定ファイル（app.config.xxx.json）で再定義してください。
 *
 * 環境変数「ENVIRONMENT」を設定することで、指定の環境の設定ファイルを読み込みます。
 * ex) ENVIRONMENT=local npx expo prebuild --clean
 *
 * @see https://docs.expo.dev/versions/latest/config/app/
 */
module.exports = ({config}) => {
  const environment = process.env.ENVIRONMENT ?? 'prod';
  const defaultAppConfig = {
    ...config,
    name: 'SantokuApp',
    version: '0.1.0',
    jsEngine: 'jsc',
    primaryColor: '#393939',
    locales: {
      ja: './l10n.ja.json',
      en: './l10n.en.json',
    },
    android: {
      package: 'jp.fintan.mobile.SantokuApp',
      versionCode: 4,
      adaptiveIcon: {
        foregroundImage: './assets/android/ic_launcher_foreground_prod.png',
        backgroundColor: '#393939',
      },
      splash: {
        resizeMode: 'native',
        backgroundColor: '#393939',
      },
      googleServicesFile: './google-services.json',
      softwareKeyboardLayoutMode: 'resize',
      allowBackup: false,
    },
    ios: {
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp',
      googleServicesFile: './GoogleService-Info.plist',
      icon: './assets/ios/ic_prod.png',
      supportsTablet: true,
      infoPlist: {
        CFBundleAllowMixedLocalizations: true,
        UIBackgroundModes: ['fetch', 'remote-notification'],
      },
    },
    plugins: [
      [
        'expo-build-properties',
        {
          android: {
            extraProguardRules: `
# Firebase ConsoleでCrashlyticsのエラータイトルが表示されない問題に対応
# https://firebase.google.com/docs/crashlytics/get-deobfuscated-reports?hl=ja&platform=android
-keepattributes SourceFile,LineNumberTable        # Keep file names and line numbers.
-keep public class * extends java.lang.Exception  # Optional: Keep custom exceptions.

# ExpoModulesPakage.ktから、自動生成されたクラスを参照するためにクラス名を利用しているので、クラス名が変わるとアプリが起動しなくなる。
# https://github.com/expo/expo/blob/sdk-43/packages/expo/android/src/main/java/expo/modules/ExpoModulesPackage.kt#L22
-keep class expo.modules.ExpoModulesPackageList { *; }

# https://github.com/software-mansion/react-native-svg#problems-with-proguard
-keep public class com.horcrux.svg.** {*;}
`,
            enableProguardInReleaseBuilds: true,
          },
          ios: {
            useFrameworks: 'static',
          },
        },
      ],
      ['@react-native-firebase/app'],
      ['@react-native-firebase/crashlytics'],
      // このアプリで用意しているAndroid/iOS共通のプラグイン
      withAddNativeModules,

      // このアプリで用意しているAndroid用のプラグイン
      withAndroidAddLicensePlugin,
      withAndroidAddAppActivity,
      withAndroidEnabledStatusBarTranslucent,
      withAndroidDisabledWindowDrawsSystemBarBackgrounds,
      withAndroidMoveDevSettingsActivityToDebugAndroidManifest,
      [
        withAndroidFlexibleSplashScreen,
        {
          ldpi: './assets/android/splashscreen/ldpi',
          mdpi: './assets/android/splashscreen/mdpi',
          hdpi: 'assets/android/splashscreen/hdpi',
          xhdpi: 'assets/android/splashscreen/xhdpi',
          xxhdpi: 'assets/android/splashscreen/xxhdpi',
          xxxhdpi: 'assets/android/splashscreen/xxxhdpi',
        },
      ],
      // 以下のプラグインは、環境毎の設定ファイルで定義します。
      // withAndroidAppBuildGradleForRelease,
      // withAndroidRemoveUsesClearTextTrafficForRelease,

      // このアプリで用意しているiOS用のプラグイン
      withIosRemoveCFBundleUrlTypes,
      withIosOverrideStoryboard,
      // 以下のプラグインは、環境毎の設定ファイルで定義します。
      // withIosEnabledATS,
      // withIosDisabledATS
      // withIosSetCredentials,
      // withIosAddPersonalAccountConfig,
    ],
    extra: {
      termsUrl: 'https://www.tis.co.jp/termsofuse/',
      santokuAppBackendUrl: 'https://santoku-app-backend.azurewebsites.net',
      requestTimeout: 60000,
      appStoreAppUrl: 'itms-apps://itunes.apple.com/jp/app/{appleAppId}',
      googlePlayAppUrl: 'https://play.google.com/store/apps/details?id={applicationId}',
      mobileAppCribNotesWebsiteUrl: 'https://fintan-contents.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/Fintan-contents/mobile-app-crib-notes',
      mswEnabled: true,
    },
    updates: {
      enabled: false,
    },
  };
  return deepmerge(defaultAppConfig, environmentConfig[environment](defaultAppConfig));
};
