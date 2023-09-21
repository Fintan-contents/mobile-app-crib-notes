const withIosDisabledATS = require('./app.plugin.js').withIosDisabledATS;
const withIosSetCredentials = require('./app.plugin.js').withIosSetCredentials;
const generateDeepLinkIntentFilter = require('./utils/generateDeepLinkIntentFilter');

const deepLinkPathPrefix = 'dev';
const deepLinkIntentFilter = generateDeepLinkIntentFilter(deepLinkPathPrefix);

module.exports = config => {
  return {
    name: 'Dev SantokuApp',
    android: {
      package: 'jp.fintan.mobile.SantokuApp.dev',
      adaptiveIcon: {
        foregroundImage: './assets/android/ic_launcher_foreground_dev.png',
      },
      googleServicesFile: './google-services-dummy.json',
      intentFilters: [deepLinkIntentFilter],
    },
    ios: {
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp.dev',
      googleServicesFile: './GoogleService-Info.Dummy.plist',
      icon: './assets/ios/ic_dev.png',
      infoPlist: {
        UIBackgroundModes: undefined,
      },
    },
    plugins: [
      // このアプリで用意しているiOS用のプラグイン
      withIosDisabledATS,
      [
        withIosSetCredentials,
        {
          developmentTeam: 'D9MUZCM4X6',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp Dev Development',
        },
      ],
    ],
    extra: {
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
      deepLinkPathPrefix,
    },
  };
};
