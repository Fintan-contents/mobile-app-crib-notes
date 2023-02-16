const withAndroidAppBuildGradleForRelease = require('./app.plugin.js').withAndroidAppBuildGradleForRelease;
const withAndroidRemoveUsesClearTextTrafficForRelease =
  require('./app.plugin.js').withAndroidRemoveUsesClearTextTrafficForRelease;
const withIosEnabledATS = require('./app.plugin.js').withIosEnabledATS;
const withIosSetCredentials = require('./app.plugin.js').withIosSetCredentials;

module.exports = config => {
  return {
    name: 'Stg SantokuApp',
    android: {
      package: 'jp.fintan.mobile.SantokuApp.stg',
      adaptiveIcon: {
        foregroundImage: './assets/android/ic_launcher_foreground_stg.png',
      },
    },
    ios: {
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp.stg',
      icon: './assets/ios/ic_stg.png',
    },
    plugins: [
      // このアプリで用意しているAndroid用のプラグイン
      withAndroidAppBuildGradleForRelease,
      withAndroidRemoveUsesClearTextTrafficForRelease,

      // このアプリで用意しているiOS用のプラグイン
      withIosEnabledATS,
      [
        withIosSetCredentials,
        {
          developmentTeam: 'D9MUZCM4X6',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp Stg Development',
        },
      ],
    ],
    extra: {
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
    },
  };
};
