const fs = require('fs');

/**
 * @typedef License
 * @property {boolean?} exclude ライセンス不明なものを除外するため(build 処理にのみ使用され成果物に含まれない場合のみ除外可能)
 * @property {string?} licenseName
 * @property {string?} licenseUrl
 * @property {string?} licenseText
 */

/**
 * @returns {Object.<string, Object.<string, License>>}
 */
module.exports = function () {
  return {
    npm: {
      '@segment/loosely-validate-event@2.0.0': { // https://www.npmjs.com/package/@segment/loosely-validate-event
        licenseName: 'MIT',
      },
      'readline@1.3.0': { // https://www.npmjs.com/package/readline
        /**
         * ライセンス詳細が不明なため除外する ("BSD" のみ README に記載されているが具体的なバージョン不明)
         * build に使用される cli でのみ使用されているためアプリには使用されていないため除外OK
         * !WARNING! ライブラリ変更時、"@react-native-community/cli-plugin-metro"("@react-native-community/cli") 以外で使用されていないかの確認が必要
         */
        exclude: true,
      },
      'valid-url@1.0.9': { // https://www.npmjs.com/package/valid-url
        licenseName: 'MIT',
        licenseUrl: 'https://github.com/ogt/valid-url/blob/v1.0.9/LICENSE',
      },
      '@react-native/metro-babel-transformer@0.74.87': { // https://github.com/facebook/react-native/blob/v0.74.5/packages/react-native-babel-transformer/package.json
        licenseUrl: 'https://github.com/facebook/react-native/blob/v0.74.5/LICENSE',
      },
      'metro-babel-transformer@0.80.12': { // https://github.com/facebook/metro/blob/v0.80.12/packages/metro-babel-transformer/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.80.12/LICENSE',
      },
      'metro-cache-key@0.80.12': { // https://github.com/facebook/metro/blob/v0.80.12/packages/metro-cache-key/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.80.12/LICENSE',
      },
      'metro-cache@0.80.12': { // https://github.com/facebook/metro/blob/v0.80.12/packages/metro-cache/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.80.12/LICENSE',
      },
      'metro-minify-terser@0.80.12': { // https://github.com/facebook/metro/blob/v0.80.12/packages/metro-minify-terser/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.80.12/LICENSE',
      },
      'metro-runtime@0.80.12': { // https://github.com/facebook/metro/blob/v0.80.12/packages/metro-runtime/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.80.12/LICENSE',
      },
      'metro-symbolicate@0.80.12': { // https://github.com/facebook/metro/blob/v0.80.12/packages/metro-symbolicate/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.80.12/LICENSE',
      },
      'metro-transform-plugins@0.80.12': { // https://github.com/facebook/metro/blob/v0.80.12/packages/metro-transform-plugins/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.80.12/LICENSE',
      },
      'metro-transform-worker@0.80.12': { // https://github.com/facebook/metro/blob/v0.80.12/packages/metro-transform-worker/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.80.12/LICENSE',
      },
      'tr46@0.0.3': { // https://github.com/jsdom/tr46/tree/0.0.3
        licenseUrl: 'https://github.com/jsdom/tr46/blob/3a6f29721e7063b9ffd421e461a54beae6170001/LICENSE.md', // v0.0.3 の次の commit で追加されている
      },
    },
    gradle: {
      'com.parse.bolts:bolts-tasks:1.4.0': { // https://github.com/BoltsFramework/Bolts-Android
        licenseName: 'BSD-3-Clause', // 名称だけ厳密にする(元: BSD License: https://github.com/BoltsFramework/Bolts-Android/blob/1.4.0/LICENSE)
      },
    },
    cocoapods: {
      'glog@0.3.5': { // https://github.com/google/glog
        licenseName: 'BSD-3-Clause', // https://code.google.com/archive/p/google-glog/ (元: "Google" https://github.com/facebook/react-native/blob/v0.70.5/third-party-podspecs/glog.podspec#L9)
      },
      'SocketRocket@0.7.0': { // https://github.com/facebookincubator/SocketRocket/blob/0.7.0/LICENSE
        licenseName: 'BSD-3-Clause', // 名称だけ SPDX 形式に変更する (元: BSD)
      },
    },
  };
};
