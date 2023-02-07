const withAppBuildGradleForRelease = require('./app.plugin.js').withAppBuildGradleForRelease;
const withRemoveUsesClearTextTrafficForRelease = require('./app.plugin.js').withRemoveUsesClearTextTrafficForRelease;
const withEnabledATS = require('./app.plugin.js').withEnabledATS;
const withSetCredentials = require('./app.plugin.js').withSetCredentials;

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
      withAppBuildGradleForRelease,
      withRemoveUsesClearTextTrafficForRelease,

      // このアプリで用意しているiOS用のプラグイン
      withEnabledATS,
      [
        withSetCredentials,
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
