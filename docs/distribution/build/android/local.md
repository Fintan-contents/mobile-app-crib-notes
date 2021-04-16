---
title: USB接続をしてアプリをインストールする
sidebar_label: USBでインストール
---

USB接続をして開発者が直接デバイスにインストールする方法を紹介します。

## アプリのビルド

Androidアプリをビルドするには[React Native公式サイト](https://reactnative.dev/docs/signed-apk-android)を参考にAPKファイルを作成してください。

:::caution
TODO：鍵管理についてもガイドするか判断。
TODO：`cd android`はReactNativeが前提だけど、どうやって案内するか判断。
[AABを作成するコマンド](https://reactnative.dev/docs/signed-apk-android#generating-the-release-aab)は `./gradlew bundleRelease` ではなく `.gradlew assembleRelease` を実行してAPKファイルを作成してください。 
:::


## USBでデバイスを端末に接続してAPKファイルをダウンロードする  


Androidのヘルプ：[パソコンと Android デバイス間でファイルを転送する](https://support.google.com/android/answer/9064445?hl=ja)を参考にしてください。

ただしUSBでデバイスを接続する時に「ファイル転送モード」にする必要があります。以下に手順を示します。


### デバイス接続時に「ファイル転送モード」を選択する方法

1. Androidシステム ・ このシステムをUSBで充電中をタップ
1. その他のオプションを表示しますをタップ
1. USBの使用 > ファイル転送/Android Autoを選択


## USBでデバイスを端末に接続してadbコマンドでインストールする


Androidデベロッパー公式サイト：[Android Debug Bridge（adb） > アプリをインストールする](https://developer.android.com/studio/command-line/adb?hl=ja#move)を参考にしてください。

APKファイルの場所に移動してadb installすればインストールできます。
