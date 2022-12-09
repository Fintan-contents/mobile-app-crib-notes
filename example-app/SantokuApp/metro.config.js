// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require('expo/metro-config');
const metroConfig = getDefaultConfig(__dirname);

// ライセンスファイルを拡張子txtとしてassetディレクトリに保存しているので、それらのファイルがアセットとして扱われるように設定
metroConfig.resolver.assetExts.push('txt');

module.exports = metroConfig;
