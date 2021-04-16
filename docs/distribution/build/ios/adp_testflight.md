---
title: ADPライセンスのTestFlight
sidebar_label: TestFlight（ADP）
---

## TestFlightを使った配信

ADPライセンスの[TestFlight](https://developer.apple.com/jp/testflight/)を使ってテストのためにアプリを配信できます。テスト内容や目的に応じて使い分けることができる2つの配信方法が用意されています。

インストールするにはテスターに登録するか、パブリックリンクをテスターに伝え、TestFlightアプリからインストールします。


||内部テスター|外部テスター|
|-|-|-|
|テスター数|**最大100人**|**最大10000人**|
|デバイス登録数|**最大30台/人**|**制限なし**|
|テスターの招待|**Apple IDをテスターに登録**|**Eメールかパブリックリンク経由**|
|テスト可能なビルド|**1つだけ**|**グループ別に分けられる**|
|アプリの審査|**不要**|**必要**|
|フィードバック|スクショとコメント|スクショとコメント|
|ビルドの有効期限|アップロード後90日間|アップロード後90日間|

## 配信の準備

TestFlightで配信するにはADPのプロビジョニングプロファイルを利用してリリースビルドしたアプリをApp Store Connectにアップロードします。

[Distribute an app using TestFlight - Xcode Help](https://help.apple.com/xcode/mac/current/#/dev2539d985f)にあるStepの手順を記載します。

1. アプリをリリースビルド
1. ビルドしたアプリをApp Store Connectにアップロード
1. App Store Connectで配信の準備
   * テスターの設定
   * 輸出コンプライアンスの提出

### アプリのリリースビルド

App Store ConnectにアプリをアップロードするためにはセットアップされたmacOS端末でビルドします。

 - 配布用証明書の秘密鍵をインストール
 - App Developer Webサイトにて作成したプロビジョニングプロファイルのダウンロード
 - Xcodeでビルドの設定をする
   - Xcodeでアプリを開く
   - ADPに紐づくApple IDでサインインする
   - アプリのフォルダを選択 > Signing & Capabilitiesで、リリース用のビルド設定を選択
   - 自動署名をオフにする（Signing > Automatically manage signingのチェックを外す）
   - ダウンロードしたプロビジョニングプロファイルを紐づける（Provisioning Profileのプルダウン選択 > Import Profileを選択）
   - リリースビルド用のConfigurationが紐付けられたSchemaを選択し、ビルド先をAny iOS Deviceに設定  
 - ヘッダーメニューからProduct > Archiveを選択
 - Archiveが終わるとArchivesの画面が表示される
  
ビルドしたアプリ（Archive）はXcodeのヘッダーメニューのWindow > Organizerを開き、左のメニューにあるArchivesを選択して一覧を確認できます。

## ビルドしたアプリをApp Store Connectにアップロード

ビルドしたアプリをApp Store Connectにアップロードします。

[Xcode Help: Develop and distribute an enterprise app](https://help.apple.com/xcode/mac/current/#/devba5e7054d)
[App Store Connectヘルプのアップロードツール](https:todo.todo)


Xcodeでビルドし、アップロードする手順を記載します。
Xcode以外のツールでアップロードする場合は、UploadではなくExportを選択し、バイナリを保存してください。

  - XcodeでArchiveした後に表示されるウインドウでDistribute Appを選択
  - App Store Connectを選択し、Nextを選択
  - UploadかExportを選択し、Nextを選択
  - デフォルトのままNextを選択
  - Distribution certificate
    - アプリビルドで利用したプロビジョニングプロファイルに紐づくDistribution certificateを選択
  - App Store Connectに登録しているアプリをアップロード先として選択
  - Nextを選択
  - 今まで入力した内容が一覧で表示されるので、間違いがないか確認する
  - Uploadして完了するとApp Store Connectでアプリを表示してTestFlightのタブから、iOSのビルドにアプリが追加されていることが確認できる
  - Exportの場合は[App Store Connect ヘルプのアップロードツール](https://help.apple.com/app-store-connect/#/devb1c185036)の以下の手順を参考にしてください。
    - altoolを使用するAppバイナリファイルのアップロード
    - Transporterを使用したAppのバイナリファイルのアップロード

## App Store Connectで配信の準備

ビルドしたアプリケーションを[App Store Connect](https://appstoreconnect.apple.com/apps)でTestFlightでアプリを配信できるようにします。

ベータ版ビルドの輸出コンプライアンスを提出します。[App Store Connect ヘルプ](https://help.apple.com/app-store-connect/?lang=ja#/dev22b9b2174)を参考にしてください。

テストが可能になったら内部テスターを設定します。[内部テスターの追加 - App Store Connect ヘルプ](https://help.apple.com/app-store-connect/?lang=ja#/dev839fb66e9)を参考にしてください。

[外部テスターの招待](https://help.apple.com/app-store-connect/?lang=ja#/dev859139543)を参考にベータ版のテストが開始できます。

内部テスター、外部テスターはTestFlightアプリを開いて、ベータ版のアプリケーションをインストールできます。
