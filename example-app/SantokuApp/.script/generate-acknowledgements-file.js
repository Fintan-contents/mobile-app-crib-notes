const path = require('path');
const fs = require('fs');
const fsPromises = require('fs/promises');
const crypto = require('crypto');
const licenseChecker = require("license-checker");

const rootDir = path.resolve(__dirname, '..');

const DEPENDENCIES_OUTPUT_FILE = path.resolve(rootDir, 'src/features/acknowledgements/constants/ThirdPartyDependencies.ts');
const LICENSE_FILE_OUTPUT_DIR = path.resolve(rootDir, 'src/assets/licenses');

const listDependencies = () => new Promise((resolve, reject) => {
  // Options: https://github.com/davglass/license-checker#options
  licenseChecker.init({
    start: rootDir,
    // devDependenciesは含めない。
    production: true,
    // privateなパッケージは含めない。
    excludePrivatePackages: true,
    // https://github.com/davglass/license-checker#custom-format
    // 個人名やメールアドレスは含めない。
    customFormat: {publisher: false, email: false, name: true, version: true},
  }, (err, packages) => {
    if (err) {
      reject(err);
    }
    // ハッシュ値の一致するLICENSEファイルとNOTICEファイルは一つしかアプリに含めないようにする。（サイズ圧縮のため）
    // なので、ここで各ライセンスファイルのハッシュ値を計算しておく。
    Promise.all(Object.entries(packages).map(async ([id, info]) => {
        const licenseFileDigest = await getLicenseFileHashDigest(id, info.licenseFile);
        const licenseFileAssetPath = getAssetPath(licenseFileDigest, 'license.txt');
        const noticeFileDigest = await getFileHashDigest(id, info.noticeFile);
        const noticeFileAssetPath = getAssetPath(noticeFileDigest, 'notice.txt');
        return {...info, id, licenseFileDigest, licenseFileAssetPath, noticeFileDigest, noticeFileAssetPath}
      })
    ).then(dependencies => resolve(dependencies)).catch(e => reject(e));
  })
})

const getLicenseFileHashDigest = (id, filePath) => {
  if (!filePath) {
    console.warn(`The license file is not found in package. id=[${id}]`)
  }
  return getFileHashDigest(id, filePath)
}

const getFileHashDigest = (id, filePath) => {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      resolve()
    }

    const hash = crypto.createHash('sha256');
    const input = fs.createReadStream(filePath);
    input.on('data', (data) => {
      if (data) {
        hash.update(data)
      }
    })
    input.on('end', () => {
      resolve(hash.digest('hex'))
    })
    input.on('error', (err) => {
      reject(err)
    })
  })
}

const getAssetPath = (digest, ext) => {
  if (!digest) {
    return;
  }
  return path.resolve(LICENSE_FILE_OUTPUT_DIR, `${digest}.${ext}`)
}

const digestKeyNameMapping = {
  licenseFile: {digest: 'licenseFileDigest', path: 'licenseFileAssetPath'},
  noticeFile: {digest: 'noticeFileDigest', path: 'noticeFileAssetPath'},
}
const getFilesToCopy = (dependencies, key) => {
  return dependencies.reduce((files, curr) => {
    if (curr[key]) {
      files[curr[digestKeyNameMapping[key].digest]] = {file: curr[key], copyTo: curr[digestKeyNameMapping[key].path]};
    }
    return files;
  }, {})
}
const copyFilesToOutputDir = async (files) => {
  await fsPromises.mkdir(LICENSE_FILE_OUTPUT_DIR, {recursive: true});
  return Promise.all(Object.values(files).map(({file, copyTo}) => fsPromises.copyFile(file, copyTo)))
}

const buildDependenciesSourceCode = (dependencies) => {
  return `export type ThirdPartyDependency = {
  id: string;
  name?: string;
  version?: string;
  repository?: string;
  licenses?: string | string[];
  licenseFileName?: string;
  licenseContentModuleId?: number;
  noticeFileName?: string;
  noticeContentModuleId?: number;
};
export const ThirdPartyDependencies: ThirdPartyDependency[] = [${dependencies.map(buildAcknowledgement).join(',')}];`
}

const buildAcknowledgement = (dependency) => {
  return `{${['id', 'name', 'version', 'licenses', 'repository'].map(key => {
    return buildAcknowledgementInfo(dependency, key);
  }).concat(
    buildFileContentModuleIdPart(dependency, 'licenseFileAssetPath', 'licenseContentModuleId'),
    buildFileNamePart(dependency, 'licenseFile', 'licenseFileName'),
    buildFileContentModuleIdPart(dependency, 'noticeFileAssetPath', 'noticeContentModuleId'),
    buildFileNamePart(dependency, 'noticeFile', 'noticeFileName'),
  ).filter(item => !!item).join(',')}}`
}

const buildAcknowledgementInfo = (dependency, infoKey, outputKey) => {
  const info = dependency[infoKey];
  return info ? `${JSON.stringify(outputKey ?? infoKey)}: ${JSON.stringify(info)}` : ''
}

const buildFileContentModuleIdPart = (dependency, assetPathKey, outputKey) => {
  const assetPath = dependency[assetPathKey]
  return assetPath ? `${JSON.stringify(outputKey)}: require(${JSON.stringify(
    getRelativePathToRequire(DEPENDENCIES_OUTPUT_FILE, assetPath))}) as number` : '';
}

const getRelativePathToRequire = (from, to) => {
  const relativePath = path.relative(path.dirname(from), to)
  if (!relativePath.startsWith('../')) {
    return `./${relativePath}`
  }
  return relativePath;
}

const buildFileNamePart = (dependency, fileNameKey, outputKey) => {
  const fileName = dependency[fileNameKey] ? path.basename(dependency[fileNameKey]) : undefined;
  return fileName ? `${JSON.stringify(outputKey)}: ${JSON.stringify(fileName)}` : '';
}

const main = async () => {
  const dependencies = await listDependencies();
  await copyFilesToOutputDir(getFilesToCopy(dependencies, 'licenseFile'));
  await copyFilesToOutputDir(getFilesToCopy(dependencies, 'noticeFile'));
  const output = fs.createWriteStream(DEPENDENCIES_OUTPUT_FILE)
  output.write(buildDependenciesSourceCode(dependencies));
};

main();
