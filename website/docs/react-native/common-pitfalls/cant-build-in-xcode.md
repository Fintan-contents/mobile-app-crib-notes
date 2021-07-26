---
title: Xcodeでビルドが失敗する
---



## event2のヘッダファイルが見つからない

[Flipper](https://fbflipper.com/)というツールの依存関係が解消できないために発生することがあります。
エラーの内容と対処方法を参考にしてください。

またFlipperについては、本サイトでも[Flipperの簡単なガイド](../santoku/development/tools/flipper.md)がありますので参照してみてください。

### エラー内容

Xcodeでビルドが失敗したときに、ログに次のメッセージが出力されている。

```console
'event2/event-config.h' file not found
```

### 対処方法

#### Flipper-Follyのバージョンを上書き

`2021/2/19`の時点において、「Flipper-Folly」のバージョンアップが原因でこのエラーが発生しています。
次のとおりにPodfileを修正して `pod install`を再実行してください。

##### 参考サイト

[Cant build react native from box in XCode: 'event2/event-config.h' file not found #30836](https://github.com/facebook/react-native/issues/30836 )

##### Podfileファイルを修正

```console
use_flipper!({ 'Flipper-Folly' => '2.3.0' })
```

##### `pod install`を再実行

```console
cd ios
rm -rf Pods/
rm Podfile.lock
pod install
cd ..
npx react-native run-ios
```
