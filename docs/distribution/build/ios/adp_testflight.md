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
   * Xcodeでアップロード
   * Xcode以外でアップロード
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

## 2. ビルドしたアプリをApp Store Connectにアップロード

ビルドしたアプリをApp Store Connectにアップロードします。

※参考：[Xcode Help: Develop and distribute an enterprise app](https://help.apple.com/xcode/mac/current/#/devba5e7054d)
※参考：[App Store Connectヘルプのアップロードツール](https:todo.todo)


### a. Xcodeでアップロード
ここではXcodeでアップロードする手順を示します。

- XcodeでArchiveした後に表示されるウインドウにてDistribute Appを選択
（TODO: なんかショートカットキーあったはず）
- App Store Connectを選択し、Nextを選択
- Uploadを選択し、Nextを選択
- デフォルトのままNextを選択
- Distribution certificate
  - アプリビルドで利用したプロビジョニングプロファイルに紐づくDistribution certificateを選択
- App Store Connectにあらかじめ登録しているアプリをアップロード先として選択
- Nextを選択
- 今まで入力した内容が一覧で表示されるので、間違いがないか確認してUploadを選択
- 上記手順が正しく行われていれば、App Store Connectでアプリを表示してTestFlightのタブを選択すると、iOSのビルドにアプリが追加されていることが確認できる


### b. Xcode以外でアップロード
Xcode以外でアップロードする場合は、事前にXcodeにてArchiveしたアプリのバイナリをエクスポートする必要があります。

- Xcodeでビルドした後、Distribute Appを選択
- App Store Connectを選択し、Nextを選択
- Exportを選択し、Nextを選択
- Distribution certificate
  - アプリビルドで利用したプロビジョニングプロファイルに紐づくDistribution certificateを選択
- App Store Connectにあらかじめ登録しているアプリをアップロード先として選択
- Nextを選択
- 今まで入力した内容が一覧で表示されるので、間違いがないか確認してExportを選択
- 保存先を指定し、Exportを選択


アプリのバイナリをエクスポートした後は、
[App Store Connect ヘルプのアップロードツール](https://help.apple.com/app-store-connect/#/devb1c185036)の以下の手順を参考にしてください。

 - altoolを使用するAppバイナリファイルのアップロード
 - Transporterを使用したAppのバイナリファイルのアップロード


## 3. TestFlight（内部テスター）の設定

実施する概要を記載して詳細は公式でいい。

※参考：[内部テスターの追加 - App Store Connect ヘルプ](https://help.apple.com/app-store-connect/?lang=ja#/dev839fb66e9)
※参考：[ベータ版ビルドの輸出コンプライアンスを提出する - App Store Connect ヘルプ](https://help.apple.com/app-store-connect/?lang=ja#/dev22b9b2174)



## 4. TestFlight（外部テスター）の設定

実施する概要を記載して詳細は公式でいい。

※参考：[外部テスターの招待 - App Store Connect ヘルプ](https://help.apple.com/app-store-connect/?lang=ja#/dev859139543)


