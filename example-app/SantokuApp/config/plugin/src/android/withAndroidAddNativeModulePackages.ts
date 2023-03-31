import {ConfigPlugin, withMainApplication} from '@expo/config-plugins';

/**
 * アプリで作成したNative ModulesのReact Packageを追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddNativeModulePackages: ConfigPlugin = config => {
  return withMainApplication(config, config => {
    if (config.modResults.language === 'java') {
      config.modResults.contents = apply(config.modResults.contents);
    } else {
      throw new Error('In this app, only java is supported as the language for MainApplication.');
    }
    return config;
  });
};

const apply = (mainApplication: string): string => {
  return mainApplication.replace(
    /protected\s+List<ReactPackage>\s+getPackages\(\)\s+{[\s\S]*List<ReactPackage>\s+packages\s+=\s+new PackageList\(this\).getPackages\(\)/,
    `protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      packages.add(new ThrowErrorPackage());`,
  );
};
