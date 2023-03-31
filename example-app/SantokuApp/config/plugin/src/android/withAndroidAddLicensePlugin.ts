import {ConfigPlugin, withAppBuildGradle} from '@expo/config-plugins';

/**
 * libraryのライセンス一覧を取得するpluginを追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddLicensePlugin: ConfigPlugin = config => {
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
  // plugins block は記述場所に制限がある。他の plugin 追加とコンフリクトしないようにするため既存の biuldGradle を挟み込むように追加する
  return `
plugins {
  id "com.jaredsburrows.license" version "0.9.0"
}
${buildGradle}

licenseReport {
  generateCsvReport  = false
  generateHtmlReport = false
  generateJsonReport = true  // android/app/build/reports/licenses/licenseReleaseReport.json
  generateTextReport = false
}
`.trimStart();
};
