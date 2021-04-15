---
title: iOSアプリのビルド
sidebar_label: はじめに
---


iOSではアプリケーションをビルド、配布するために必要なリソースがあります。
リソースの作成方法は[iOSのライセンス](../../ios_lisence.md)によって違うため、一度ライセンスのページを確認してください。



#### AdHoc Distributionを利用する場合の考慮

高度な機能を利用するアプリを開発する場合、Personal Teamでは機能に制限があるため、ADP・ADEPでUSB経由のインストール（AdHoc配布）を選択するケースがあります。
ADP・ADEPに登録できるiPhoneは契約毎に100台という厳しい制限があるので、できればUSB経由ではなくTestFlightまたはIn-Houseでの配布をおすすめします。

## ビルドで使用するリソース

### 証明書


### Provisioning Profileの作成

  - [Apple Developer Webサイト](https://developer.apple.com/account/)にログインし、`Profiles`を開いて`Profiles ⊕`クリック
  - 配布用途にあわせて、選択してください。
    - AppStoreで公開する（TestFlightでの配布を含む）場合、**App Store**（ADPのみ選択可能です）
    - In-Houseでの配布する場合、**In House**（ADEPのみ選択可能です）
  - 選択後、`Continue`をクリック
  - 事前に登録したApp IDを選択し`Continue`をクリック
  - 証明書を選択し`Continue`をクリック
  - プロビジョニングプロファイル名を入力して`Generate`をクリック
  - 作成したプロビジョニングプロファイルをMac端末にダウンロード

