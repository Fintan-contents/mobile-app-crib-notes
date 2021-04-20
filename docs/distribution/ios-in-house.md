---
title: ADEPライセンスのIn-Houseで配布
sidebar_label: In-House(ADEP)
---

ADEPライセンスはライセンス契約している社内に閉じた配布とする必要があります。

## 制限事項

ADEPのIn-Houseには以下のような制限事項があります。

### 配布範囲は社内のみ

<!-- textlint-disable ja-technical-writing/sentence-length -->
[Apple Developer Enterprise Program](https://developer.apple.com/jp/programs/enterprise/)には「社内用Appのダウンロードを従業員にのみ限定するためのシステム、およびメンバーシップの資格情報やアセットを保護するためのシステムを構築していること」と記載があります。そのため、用意したHTTPSサーバに認証などを設けて、社内の人のみがアクセスできるように制限する必要があります。
<!-- textlint-enable ja-technical-writing/sentence-length -->

## 配信の準備

In-House配信をする場合、アプリケーションをビルドしてHTTPSサーバに配置します。

  1. アプリをリリースビルド
  1. ビルドしたアプリのバイナリを保存
  1. バイナリをサーバにアップロード
  1. デバイスにインストール

## アプリをリリースビルド

アプリのリリースビルドは[iOSのビルド](./build/ios-build.md)を参照してください。

## ビルドしたアプリのバイナリを保存

ビルドしたアプリを、ホストするWebサーバにアップロードするバイナリとしてMac端末に保存します。

  1. XcodeでArchiveした後に表示されるウインドウでDistribute Appを選択
  1. Enterpriseを選択し、Nextを選択
     - Include manifest for over-the-air installationにチェックを入れる
     - over-the-airで配布する場合、アプリのipaファイル、小さいロゴ、大きいロゴのアドレスを指定
        - URLのプロトコルはhttpsとする必要があります（httpは使えません）
           - ここで指定する値は、manifest.plist生成時のインプットです
           - 仮の情報を入力して、あとでmanifest.plistを編集してもよいです
  1. 証明書とプロビジョニングプロファイルを選択
  1. Exportを選択しipaファイルを保存

## マニフェストファイルなどをHTTPSサーバに配置

取得したファイル郡をHTTPSサーバ配下にホストします。
<!-- textlint-enable ja-technical-writing/max-kanji-continuous-len -->
公開時は必ずベーシック認証などをかけて、ADEPでのアプリの配信を許可された人（社員、業務委託先社員）だけがアクセスできるように管理してください。
<!-- textlint-enable ja-technical-writing/max-kanji-continuous-len -->

サーバには以下のようなHTMLファイル（ファイル名はindex.html）を作成してホストしてください。
`url=`以降の値はマニフェストファイルの公開URLを指定してください。

```html
   <a href="itms-services://?action=download-manifest&url=https://your-bucket-url/manifest.plist">ダウンロード</a>
```

## デバイスにアプリをインストール

In Houseで配布するアプリケーションをダウンロードして起動します。
この手順は開発者チームではなく組織内のメンバーの説明です。

初回起動時にはインストールしたメンバーが[証明書を信頼](https://help.apple.com/xcode/mac/current/#/dev96a12fb84)する必要があります。

デバイスのブラウザから、Webサーバにアクセスしindex.htmlを表示して、マニフェストファイルへのリンクをタップしてください。ポップアップが出てくるのでInstallを選択するとインストールが完了します。

アプリ初回起動の場合、ポップアップがでて起動できません。
起動できるようにするため、エンタープライズデベロッパを信頼してください。

  1. 設定 > 一般 > プロファイルとデバイス管理で、該当するエンタープライズデベロッパを選択
  1. 「XXXを信頼」という青い文字を選択
  1. ポップアップで信頼を選択

信頼を選択したあと、デバイスでアプリをタップすると起動できるようになります。
