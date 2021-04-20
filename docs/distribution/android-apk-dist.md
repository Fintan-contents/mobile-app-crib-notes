---
title: APKファイルでAndroidアプリを配布
sidebar_label: APKファイルを配布
---

Google Play経由ではなく独自配布をするケースではAPKファイルをWebサイトなどで配布し、インストールします。
（ここではAzureを例にして）クラウドストレージからダウンロードしてインストールする方法を紹介します。

アプリのビルドは[Androidアプリのビルド](build/android-build.md)を参照してください。

## ビルドしたアプリのダウンロード

Azureを利用した例としてAzure Blob Storageを利用します。

リソースに対してベーシック認証をかける機能はありませんが、Shared Access Signatureという機能を使って一定期間で無効となるURLを発行できます。
詳細はMicrosoft Docs: Azure Storage: [Shared Access Signatures (SAS) でデータの制限付きアクセスを付与する](https://docs.microsoft.com/ja-jp/azure/storage/common/storage-sas-overview)を参照してください。

1. Azure Blob Storageにて、対象のリソースで右クリック > Shared Access Signatureの取得を選択
2. 公開時間、アクセス権限などを設定
3. URLが発行されるので、テスターにURLを通知
4. テスターはAndroidデバイスでAPKファイルをダウンロード
5. デバイスでダウンロードしたAPKファイルをインストール

ダウンロードしたAPKファイルをファイルアプリなどで開くとインストールできます。

### デバイスへのインストール

デバイスのファイルアプリでダウンロードしたAPKファイルをタップすると、以下が表示されるので許可します。なお、不明なアプリのインストールについてはOSバージョンごとに手順が異なります。

1. 「インストール」をタップします。
1. Playプロテクトにブロックされたら、「インストールする」をタップします。
1. アプリがインストールできたら、「開く」をタップします。
