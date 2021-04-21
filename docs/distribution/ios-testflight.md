---
title: ADPライセンスのTestFlight
sidebar_label: TestFlight(ADP)
---

## TestFlightを使った配信

ADPライセンスの[TestFlight](https://developer.apple.com/jp/testflight/)を使ってテストのためにアプリを配信できます。テスト内容や目的に応じて使い分けることができる2つのテスターが用意されています。

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
   - 輸出コンプライアンスの提出
   - テスターの設定

### アプリのリリースビルド

アプリのリリースビルドは[iOSのビルド](./build/ios-build)を参照してください。

### アプリをApp Store Connectにアップロード

ビルドしたアプリをApp Store Connectにアップロードします。

[Xcode Help: Develop and distribute an enterprise app](https://help.apple.com/xcode/mac/current/#/devba5e7054d)  
[App Store Connectヘルプのアップロードツール](https://help.apple.com/app-store-connect/#/devb1c185036)

Xcodeでアップロードする手順を記載します。
Xcode以外のツールでアップロードする場合は、UploadではなくExportを選択し、バイナリを保存してください。

  1. XcodeでArchiveした後に表示されるウインドウでDistribute Appを選択
  1. App Store Connectを選択し、Nextを選択
  1. UploadかExportを選択し、Nextを選択
  1. デフォルトのままNextを選択
  1. Distribution certificate
     - アプリビルドで利用したプロビジョニングプロファイルに紐づくDistribution certificateを選択
  1. App Store Connectに登録しているアプリをアップロード先として選択
  1. Nextを選択
  1. 今まで入力した内容が一覧で表示されるので、間違いがないか確認する
  1. アップロードする
     - XcodeからUploadして完了すると、App Store Connectでアプリを表示してTestFlightのタブから、iOSのビルドにアプリが追加されていることが確認できる
     - Exportの場合は[App Store Connect ヘルプ](https://help.apple.com/app-store-connect/#/devb1c185036)の次の手順を参考にしてください
        - altoolを使用するAppバイナリファイルのアップロード
        - Transporterを使用したAppのバイナリファイルのアップロード

### App Store Connectで配信の準備

ビルドしたアプリケーションを[App Store Connect(要ログイン)](https://appstoreconnect.apple.com/apps)からTestFlightで配信できるようにします。

ベータ版ビルドの輸出コンプライアンスを提出します。[App Store Connect ヘルプ](https://help.apple.com/app-store-connect/?lang=ja#/dev22b9b2174)を参考にしてください。

 - ADPのチームにいるメンバーがテストする場合、内部テスターを設定します。[内部テスターの追加 - App Store Connect ヘルプ](https://help.apple.com/app-store-connect/?lang=ja#/dev839fb66e9)を参考にしてください。
 - チーム外も含めたメンバーでテストする場合、外部テスターを設定します。[外部テスターの招待](https://help.apple.com/app-store-connect/?lang=ja#/dev859139543)を参考にしてください。

内部テスター、外部テスターは[TestFlightアプリ](https://apps.apple.com/jp/app/testflight/id899247664)を開いて、ベータ版のアプリケーションをインストールできます。
