---
title: XCodeでビルドが失敗する
---

## エラー内容

XCodeで次のエラーが発生してビルドが失敗する。

```console
'event2/event-config.h' file not found
```

## 対処方法

### Flipper-Follyのバージョンを上書き

`2021/2/19`の時点において、「Flipper-Folly」のバージョンアップが原因でこのエラーが発生しています。
次のとおりにPodfileを修正して `pod install`を再実行してください。

#### 参考サイト

[Cant build react native from box in XCode: 'event2/event-config.h' file not found #30836](https://github.com/facebook/react-native/issues/30836 )

#### Podfileファイルを修正

```console
use_flipper!({ 'Flipper-Folly' => '2.3.0' })
```

#### `pod install`を再実行

```console
cd ios
rm -rf Pods/
rm Podfile.lock
pod install
cd ..
npx react-native run-ios
```
