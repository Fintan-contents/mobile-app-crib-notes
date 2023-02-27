import {ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import fs from 'fs';
import path from 'path';

import {getMainActivityDir} from './getMainActivityDir';
import {copyFile} from '../utils/copyFile';

/**
 * テンプレートに存在するファイルを、「android/app/main/java/[パッケージ名]」配下にコピーします。
 * @param config ExpoConfig
 * @param srcDir テンプレートファイルが存在するディレクトリ
 * @param fileName テンプレートファイル名
 */
export const withAndroidCopyTemplateJavaFile: ConfigPlugin<{srcDir: string; fileName: string}> = (
  config,
  {srcDir, fileName},
) => {
  return withDangerousMod(config, [
    'android',
    async config => {
      if (!config.android?.package) {
        // packageは必ず設定されている想定
        throw new Error('Package is not set.');
      }
      const projectRoot = config.modRequest.projectRoot;
      const src = path.resolve(projectRoot, srcDir, fileName);
      const dest = path.resolve(await getMainActivityDir(projectRoot), fileName);
      copyFile(src, dest);
      renameJavaPackage(dest, 'com.helloworld', config.android.package);
      return config;
    },
  ]);
};

const renameJavaPackage = (filePath: string, fromPackageName: string, toPackageName: string) => {
  try {
    if (fs.lstatSync(filePath).isFile()) {
      let contents = fs.readFileSync(filePath).toString();
      contents = contents.replace(new RegExp(fromPackageName, 'g'), toPackageName);
      fs.writeFileSync(filePath, contents);
    }
  } catch (e) {
    throw new Error(`Cannot rename package of ${filePath} from ${fromPackageName} to ${toPackageName}. ${String(e)}.`);
  }
};
