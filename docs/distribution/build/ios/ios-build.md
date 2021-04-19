---
title: iOSアプリのビルド
---

ADP、ADEPライセンスを利用したiOSアプリをビルドするための手順です。開発者アカウントを利用する場合は[開発者アカウント](./developer_account.md)を参照してください。


 1. 配布用証明書の秘密鍵をインストール
 1. App Developer Webサイトにて作成したプロビジョニングプロファイルのダウンロード
 1. Xcodeでビルドの設定をする
    1. Xcodeでアプリを開く
    1. ライセンスに紐づくApple IDでサインインする
    1. アプリのフォルダを選択 > Signing & Capabilitiesで、リリース用のビルド設定を選択
    1. 自動署名をオフにする（Signing > Automatically manage signingのチェックを外す）
    1. ダウンロードしたプロビジョニングプロファイルを紐づける（Provisioning Profileのプルダウン選択 > Import Profileを選択）
    1. リリースビルド用のConfigurationが紐付けられたSchemaを選択し、ビルド先をAny iOS Deviceに設定  
 1. ヘッダーメニューからProduct > Archiveを選択
 1. Archiveが終わるとArchivesの画面が表示される
  
ビルドしたアプリ（Archive）はXcodeのヘッダーメニューのWindow > Organizerを開き、左のメニューにあるArchivesを選択して一覧を確認できます。

- デバイスにアプリをインストール・起動
  - 初めてアプリを起動する際には、デバイスでアプリを信頼する必要があります
