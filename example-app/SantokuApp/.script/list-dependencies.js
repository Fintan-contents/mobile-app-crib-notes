const path = require('path');
const { exec } = require('node:child_process');
const fs = require('fs');
const plist = require('plist');

const licenseChecker = require("license-checker");

const rootDir = path.resolve(__dirname, '..');

/**
 * SPDX形式のライセンス名に統一する
 * @returns normalizedLicenseName
 */
const normalizeLicense = (() => {
  // https://spdx.org/licenses/
  const aliasList = {
    '0BSD': [
    ],
    'Apache-2.0': [
      'The Apache Software License, Version 2.0',
      'The Apache License, Version 2.0',
      'apache license, version 2.0',
      'Apache License 2.0',
      'Apache2',
      'Apache 2.0',
      'Apache-2',
    ],
    'BSD-2-Clause': [
      'Simplified BSD License', // https://opensource.org/license/bsd-license-php/
    ],
    'BSD-3-Clause': [
      'bsd_3_clauses',
    ],
    'BSL-1.0': [
    ],
    'CC-BY-4.0': [
    ],
    'CC0-1.0': [
    ],
    ISC: [
    ],
    MIT: [
      'MIT License',
    ],
    'Python-2.0': [
    ],
    Unlicense: [
    ],
    WTFPL: [
    ],
    Zlib: [
    ],
    // Deprecated
    'GPL-2.0': [ // 警告対策, 採用することはない, 現在存在するのはデュアルライセンスの片方
    ],
    // Not included in SPDX
    'Android Software Development Kit License':[
    ],
  };
  const aliasMap = Object.fromEntries(Object.entries(aliasList).flatMap(([normalized, aliases]) => {
    return aliases.map(alias => {
      return [alias, normalized]
    }).concat([
      [normalized, normalized],
    ]).map(([k, v]) => {
      return [k.toLowerCase(), v];
    });
  }));

  /**
   * @param {string} licenseName
   * @returns {string} normalizedLicenseName
   */
  const normalizeLicense = (licenseName) => {
    if (!licenseName) return licenseName;
    if (licenseName.startsWith('(') && licenseName.endsWith(')')) {
      const list = licenseName.slice(1, -1).split(' OR ').map(normalizeLicense);
      return `(${list.join(' OR ')})`;
    }
    const key = licenseName.toLowerCase();
    if (key in aliasMap) return aliasMap[key];
    console.warn(`[WARN] ${licenseName} is not found in aliasMap`);
    return licenseName;
  };
  return normalizeLicense;
})();

const licenseManager = new class {
  constructor() {
    this._managedLicenseMap = require('./managed-license')();
  }
  /**
   * ライセンス情報が不足している部分を調整する
   */
  adjust(libraries) {
    const adjusted = libraries.flatMap(lib => {
      const ml = this._managedLicenseMap[lib.type][lib.libraryId];
      if (ml) {
        ml.used = true;
        if (ml.exclude) return [];
        if (ml.licenseName) lib.licenseName = ml.licenseName;
        if (ml.licenseText) lib.licenseText = ml.licenseText;
        if (ml.licenseUrl) lib.licenseUrl = ml.licenseUrl;
      }
      if (!lib.licenseName || !(lib.licenseText || lib.licenseUrl || lib.licenseFile)) {
        const message = [
          `license info notfound!: [${lib.type}] ${lib.libraryId}`,
          `  ${__dirname}/managed-license.js を編集してください`,
          JSON.stringify(lib, '', '\t'),
        ].join('\n');
        throw new Error(message);
      }
      return [lib];
    });
    const unusedList = Object.entries(this._managedLicenseMap).flatMap(([type, licenses]) => {
      return Object.entries(licenses).map(([libraryId, license]) => {
        return {
          type,
          libraryId,
          used: license.used,
        };
      });
    }).filter(({used}) => !used);
    if (unusedList.length) {
      const message = [
        '未使用ライブラリが存在します',
        `  ${__dirname}/managed-license.js を編集してください`,
        JSON.stringify(unusedList, '', '\t'),
      ].join('\n');
      console.warn('[WARN]', message);
    }
    return adjusted;
  }
};

class PodfileParser {
  constructor() {
    const lockFileText = fs.readFileSync(`${rootDir}/ios/Podfile.lock`, 'utf8');

    const versionList = [
      ...lockFileText.matchAll(/^  - (.+) [(]((?:[0-9]+[.])*[0-9]+)[)]:?$/mg),
    ].map(([_all, name, version]) => {
      return [name, version];
    });
    this._versionMap = Object.fromEntries(versionList);
  
    const checksumList = [
      ...lockFileText.matchAll(/^  ([^:]+): ([a-z0-9]+)$/mg),
    ].map(([_all, name, version]) => {
      return [name, version];
    });
    this._checksumMap = Object.fromEntries(checksumList);
  }

  versionOfPods(podName) {
    return this._versionMap[podName] || null;
  }
  checksumOfPods(podName) {
    return this._checksumMap[podName] || null;
  }
}

const listNodeDependencies = () => new Promise((resolve, reject) => {
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
    if (err) reject(err);
    else {
      const list = Object.entries(packages).map(([_id, info]) => {
        const {
          name,
          version,
          licenses,
          repository: url,
          licenseFile,
          noticeFile,
        } = info;
        if (Array.isArray(licenses)) licenses = `(${licenses.join(' OR ')})`;
        const isGuessed = licenses.includes('*');
        const data = {
          type: 'npm',
          libraryId: `${name}@${version}`,
          name,
          version,
          url,
          licenseName: isGuessed ? null : licenses,
          licenseFile,
          noticeFile,
        };
        if (isGuessed) data._guessedLicenseName = licenses;
        return data;
      });
      resolve(list);
    }
  });
});

const getProjectName = () => {
  const podfileText = fs.readFileSync(`${rootDir}/ios/Podfile`, 'utf8');
  return (/^target '([^']+)'/m.exec(podfileText) || [])[1] || null;
};

const preIos = () => Promise.resolve().then(() => {
  return new Promise((resolve, reject) => {
    console.log('start: npm run pod-install');
    exec('npm run pod-install', (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
});

const preAndroid = () => Promise.resolve().then(() => {
  return new Promise((resolve, reject) => {
    console.log('start: gradlew app:licenseReleaseReport');
    exec('./gradlew app:licenseReleaseReport', {
      cwd: './android/',
    }, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
});

const listIosDependencies = () => {
  const projectName = getProjectName();
  const xmlText = fs.readFileSync(`${rootDir}/ios/Pods/Target Support Files/Pods-${projectName}/Pods-${projectName}-acknowledgements.plist`, 'utf8');
  const xmlObj = plist.parse(xmlText);
  const podfileParser = new PodfileParser();
  const libraries = xmlObj.PreferenceSpecifiers.filter(obj => {
    return !(['Acknowledgements', ''].includes(obj.Title) && !obj.License);
  }).map(lib => {
    const {
      Title: name,
      License: licenseName,
      FooterText: licenseText,
    } = lib;
    const version = podfileParser.versionOfPods(name);
    const checksum = podfileParser.checksumOfPods(name);
    return {
      type: 'cocoapods',
      libraryId: `${name}@${version || checksum}`,
      name,
      version,
      checksum,
      licenseName,
      licenseText,
    };
  });
  return Promise.resolve(libraries);
};

const listAndroidDependencies = () => {
  const list = require(`${rootDir}/android/app/build/reports/licenses/licenseReleaseReport.json`);
  return list.map(lib => {
    const {
      project: name,
      dependency: libraryId,
      licenses,
      version,
      url,
    } = lib;
    return {
      type: 'gradle',
      libraryId,
      name,
      version,
      url,
      licenseName: licenses?.[0]?.license,
      licenseUrl: licenses?.[0]?.license_url,
    };
  });
};

/**
 * @typedef Dependency
 * @property {string} id `${type}:${libraryId}`
 * @property {string} type "npm", "gradle", "cocoapods"
 * @property {string} libraryId type ごとにライブラリを特定できるID
 * @property {string} name
 * @property {string?} version
 * @property {string?} checksum only cocoapods
 * @property {string?} url
 * @property {string} licenseName
 * @property {string?} licenseText
 * @property {string?} licenseUrl
 * @property {string?} licenseFile
 * @property {string?} noticeFile
 */

/**
 * 
 * @returns {Promise<Dependency[]>} dependencies
 */
module.exports = function listDependencies() {
  const quickMode = process.argv[2] === 'quick';
  console.log(`quickMode(first arg === 'quick'): ${quickMode}`);
  return Promise.all([
    listNodeDependencies(),
    (quickMode ? Promise.resolve() : preIos()).then(listIosDependencies),
    (quickMode ? Promise.resolve() : preAndroid()).then(listAndroidDependencies),
  ]).then(lists => {
    return lists.flat();
  }).then(list => {
    return licenseManager.adjust(list);
  }).then(list => {
    const toSortByString = d => `${d.name} ${d.version}`;
    list.sort((a, b) => {
      return toSortByString(a).localeCompare(toSortByString(b), undefined, {
        numeric: true, // version 文字列中の数字を数値として比較する
      });
    });
    return list;
  }).then(list => {
    return list.map(lib => {
      lib.id = `${lib.type}:${lib.libraryId}`;
      lib.licenseName = normalizeLicense(lib.licenseName);
      return lib;
    });
  });
};
