---
title: USB接続をしてアプリをインストールする
sidebar_label: USBでインストール
---

USB接続をして開発者が直接デバイスにインストールする方法を紹介します。

## アプリのビルド

アプリのビルドは[Androidアプリのビルド](build/android-build.md)を参照してください。

## USBでデバイスを端末に接続してAPKファイルをダウンロードする  

Androidのヘルプ：[パソコンと Android デバイス間でファイルを転送する](https://support.google.com/android/answer/9064445?hl=ja)を参考にしてください。

ただしUSBでデバイスを接続する時に「ファイル転送モード」にする必要があります。以下に手順を示します。

### デバイス接続時に「ファイル転送モード」を選択する方法

以下のようにデバイス接続時にファイル転送モードを選択してください。

1. Androidシステム ・ このシステムをUSBで充電中をタップ
1. その他のオプションを表示しますをタップ
1. USBの使用 > ファイル転送/Android Autoを選択

## USBでデバイスを端末に接続してadbコマンドでインストールする

Androidデベロッパー公式サイト：[Android Debug Bridge（adb） > アプリをインストールする](https://developer.android.com/studio/command-line/adb?hl=ja#move)を参考にしてください。

APKファイルの場所に移動してadb installすればインストールできます。
