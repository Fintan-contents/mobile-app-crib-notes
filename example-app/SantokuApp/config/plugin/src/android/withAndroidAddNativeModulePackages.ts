import {ConfigPlugin, withMainApplication} from 'expo/config-plugins';

/**
 * アプリで作成したNative ModulesのReact Packageを追加します。
 * @param config ExpoConfig
 */
export const withAndroidAddNativeModulePackages: ConfigPlugin = config => {
  return withMainApplication(config, config => {
    if (config.modResults.language === 'java') {
      config.modResults.contents = apply(config.modResults.contents);
    } else if (config.modResults.language === 'kt') {
      config.modResults.contents = applyKotlin(config.modResults.contents);
    } else {
      throw new Error('In this app, only java or kotlin is supported as the language for MainApplication.');
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

const applyKotlin = (mainApplication: string): string => {
  return mainApplication.replace(
    /override\s+fun\s+getPackages\(\):\s+List<ReactPackage>\s+{[\s\S]*return\s+PackageList\(this\)\.packages/,
    `override fun getPackages(): List<ReactPackage> {
            val packages = PackageList(this).packages
            packages.add(ThrowErrorPackage())
            return packages`,
  );
};
