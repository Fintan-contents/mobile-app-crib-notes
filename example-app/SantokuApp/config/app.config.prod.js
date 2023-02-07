const withAppBuildGradleForRelease = require('./app.plugin.js').withAppBuildGradleForRelease;
const withRemoveUsesClearTextTrafficForRelease = require('./app.plugin.js').withRemoveUsesClearTextTrafficForRelease;
const withEnabledATS = require('./app.plugin.js').withEnabledATS;
const withSetCredentials = require('./app.plugin.js').withSetCredentials;

module.exports = config => {
  return {
    plugins: [
      // このアプリで用意しているAndroid用のプラグイン
      withAppBuildGradleForRelease,
      withRemoveUsesClearTextTrafficForRelease,

      // このアプリで用意しているiOS用のプラグイン
      withEnabledATS,
      [
        withSetCredentials,
        {
          developmentTeam: '7Y9M87SSC3',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp AppStore Development',
        },
      ],
    ],
  };
};
