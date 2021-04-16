---
title: APKファイルでAndroidアプリを配布
sidebar_label: APKファイルを配布
---

ビルドしたAndroidアプリを（ここではAzureを例にして）クラウドストレージからダウンロードしてインストールする方法を紹介します。

## アプリのビルド

Androidアプリをビルドするには[React Native公式サイト](https://reactnative.dev/docs/signed-apk-android)を参考にAPKファイルを作成してください。

:::caution
TODO：鍵管理についてもガイドするか判断。
TODO：`cd android`はReactNativeが前提だけど、どうやって案内するか判断。
[AABを作成するコマンド](https://reactnative.dev/docs/signed-apk-android#generating-the-release-aab)は `./gradlew bundleRelease` ではなく `.gradlew assembleRelease` を実行してAPKファイルを作成してください。 
:::


## ビルドアプリのダウンロード

<!-- TODO: ここの書き方は直したほうがいい。Azure Blob Storageじゃないといけないように見える気がする。 -->

Azure Blob Storageを利用します。

リソースに対してベーシック認証をかける機能はありませんが、Shared Access Signatureという機能を使って一定期間で無効となるURLを発行できます。
詳細はMicrosoft Docs: Azure Storage: [Shared Access Signatures (SAS) でデータの制限付きアクセスを付与する](https://docs.microsoft.com/ja-jp/azure/storage/common/storage-sas-overview)を参照してください。

1. Azure Blob Storageにて、対象のリソースで右クリック > Shared Access Signatureの取得を選択
2. 公開時間、アクセス権限などを設定
3. URLが発行されるので、テスターにURLを通知
4. テスターはAndroidデバイスでAPKファイルをダウンロード
5. デバイスでダウンロードしたAPKファイルをインストール

ダウンロードしたAPKファイルをファイルアプリなどで開くとインストールできます。

- デバイスのファイルアプリでダウンロードしたAPKファイルをタップすると、以下が表示されるので許可します。なお、不明なアプリのインストールについてはOSバージョンごとに手順が異なります。ここではAndroid11の場合の手順とスクリーンショットを示しています。
- 「インストール」をタップします。
- Playプロテクトにブロックされたら、「インストールする」をタップします。
- アプリがインストールできたら、「開く」をタップします。
