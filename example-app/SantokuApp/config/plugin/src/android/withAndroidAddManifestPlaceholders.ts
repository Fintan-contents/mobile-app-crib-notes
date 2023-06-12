import {ConfigPlugin, withAppBuildGradle} from 'expo/config-plugins';

type ManifestPlaceholderParams = {
  // manifestPlaceholdersのキー
  placeholderKey: string;
  // gradle.propertiesやシステムプロパティに設定されているキー
  propertyKey?: string;
  // gradle.propertiesやシステムプロパティにpropertyKeyで設定したキーが存在しない場合のデフォルト値
  propertyDefaultValue?: string;
  // 固定値
  fixedValue?: string;
};

/**
 * 指定されたキーや値をbuild.gradleのmanifestPlaceholdersに追加するプラグインです。
 * manifestPlaceholdersに指定された値は、AndroidManifest.xml内で参照できます。
 * manifestPlaceholdersに指定する値は、gradle.propertiesやシステムプロパティから取得するか、固定値を設定できます。
 *
 * gradle.propertiesやシステムプロパティから取得する場合は、「propertyKey」を指定します。
 * 「propertyDefaultValue」を指定すると、「propertyKey」で指定したキーが存在しない場合のデフォルト値を設定できます。
 * 固定値を設定する場合は、「fixedValue」を指定します。
 * 両方指定した場合は、「propertyKey」を優先します。
 *
 * 例えば、以下のように設定すると、AndroidManifest.xml内で${backendApiKey}、${deepLinkUrl}を参照できます。
 * [
 *   withAndroidAddManifestPlaceholders,
 *   [
 *     {placeholderKey: 'backendApiKey', propertyKey: 'SANTOKU_BACKEND_API_KEY', propertyDefaultValue: 'dummyApiKey'}, // gradle.propertiesやシステムプロパティから値を参照
 *     {placeholderKey: 'deepLinkUrl', fixedValue: 'http://localhost'}, // 固定値を設定
 *   ],
 * ],
 *
 *
 * @param config ExpoConfig
 * @param params manifestPlaceholdersに設定する情報
 */
export const withAndroidAddManifestPlaceholders: ConfigPlugin<ManifestPlaceholderParams[]> = (config, params) => {
  return withAppBuildGradle(config, config => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = apply(config.modResults.contents, params);
    } else {
      throw new Error('In this app, only groovy is supported as the language for build.gradle.');
    }
    return config;
  });
};

const apply = (buildGradle: string, params: ManifestPlaceholderParams[]): string => {
  const manifestPlaceholders = params
    .filter(data => {
      if (data.propertyKey || data.fixedValue != null) {
        // fixedValueは空文字も許容する
        return true;
      } else {
        console.warn(
          `[withAndroidAddManifestPlaceholders] propertyKey or fixedValue must be specified. placeholderKey=${data.placeholderKey}`,
        );
        return false;
      }
    })
    .map(data => {
      if (data.propertyKey) {
        const manifestPlaceholder = `manifestPlaceholders.${data.placeholderKey} = findProperty('${data.propertyKey}')`;
        return data.propertyDefaultValue == null
          ? manifestPlaceholder
          : `${manifestPlaceholder} ?: '${data.propertyDefaultValue}'`;
      } else {
        // filterでfixedValueが存在していることを保証しているので、ここでは!演算子を使っている
        return `manifestPlaceholders.${data.placeholderKey} = '${data.fixedValue!}'`;
      }
    });
  // 改行とインデントを入れて連結
  const manifestPlaceholdersString = manifestPlaceholders.join('\n        ');
  return buildGradle.replace(
    'defaultConfig {',
    `defaultConfig {
        ${manifestPlaceholdersString}`,
  );
};
