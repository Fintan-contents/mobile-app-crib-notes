---
title: ADPライセンスのTestFlight
sidebar_label: TestFlight（ADP）
---

ADPのApp Store Connectでは[TestFlight](https://developer.apple.com/jp/testflight/)を使ってテストのためにアプリを配信できます。テスト内容や目的に応じて使い分けることができる2つの配信方法が用意されています。


||内部テスター|外部テスター|
|-|-|-|
|テスター数|**最大100人**|**最大10000人**|
|デバイス登録数|**最大30台/人**|**制限なし**|
|テスターの招待|**Apple IDをADPのチームに紐付ける必要がある**|**Eメールかパブリックリンク経由**|
|テスト可能なビルド|**1つだけ**|**グループ別に分けられる**|
|アプリの審査|**不要**|**必要**|
|フィードバック|スクショとコメント|スクショとコメント|
|ビルドの有効期限|アップロード後90日間|アップロード後90日間|


## 手順概要
内部テスターと外部テスターともにアプリのアップロードについては同じ手順です。

1. アプリをリリースビルド
2. ビルドしたアプリをApp Store Connectにアップロード
   a. Xcodeでアップロード
   b. Xcode以外でアップロード
3. TestFlight（内部テスター）の設定
4. TestFlight（外部テスター）の設定

## 1. アプリのリリースビルド

 - [TestFlightを使用してアプリを配布する（Xcode Help）](https://help.apple.com/xcode/mac/current/#/dev2539d985f)

- 配布用証明書（Apple Distribution）の秘密鍵（p12ファイル）を準備
- App Developer Webサイトにてプロビジョニングプロファイルの作成
   - 秘密鍵をアプリをビルドする端末に登録
   - p12ファイルをダブルクリック
- パスワードの入力を求められるのでライセンス管理者から教えてもらったパスワードを入力
   - Xcodeでアプリを開く
   - XcodeでADPに紐づくApple IDでサインインする
   - Xcodeの左側からアプリのフォルダを選択 > Signing & Capabilitiesで、リリース用のビルド設定を選択
   - 自動署名をオフにする（Signing > Automatically manage signingのチェックを外す）
   - Xcodeで作成したプロビジョニングプロファイルを紐づける（Provisioning Profileのプルダウン選択 > Import Profileを選択）
   - リリースビルド用のConfigurationが紐付けられたSchemaを選択し、ビルド先をAny iOS Deviceに設定  
     ※ヘッダーメニューのProduct > Archiveが活性になる
   - ヘッダーメニューからProduct > Archiveを選択
   - Archiveが終わったら以下のような画面が表示される


## 2. ビルドしたアプリをApp Store Connectにアップロード

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


