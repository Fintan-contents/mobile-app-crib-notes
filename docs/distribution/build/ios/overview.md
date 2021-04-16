---
title: iOSアプリのビルド
---

iOSアプリをビルドするために必要なリソースがあります。
リソースの作成方法は[iOSのライセンス](../../ios_lisence.md)によって違います。

ここではADP・ADEPライセンスを使用する開発チームの管理者向けにAppleのWebサイトで作成し、ビルド担当者に展開するリソースについて説明します。iOSアプリの具体的なビルドや配布の方法はそれぞれのページを参照してください。

開発者が開発時にアプリをインストールする場合は[開発者アカウントを利用](./developer_account.md)を参照してください。

iOSアプリをビルドするためには管理者が証明書を作成し、アプリケーションを登録してプロビジョニングプロファイルを作成します。
ビルド担当者は管理者が作成したプロビジョニングプロファイルと証明書の秘密鍵を使用して、アプリをビルドします。

## ビルドで使用するリソース

### 証明書

アプリケーションをデバイスにインストールするための証明書を作成・取得します。
インストールするための証明書は開発用（Apple Development）と配布用（Apple Distribution）の2種類があります。

利用できる証明書には[上限](https://help.apple.com/xcode/mac/current/#/dev3a05256b8)があります。  
証明書の概要は[Appleのヘルプ](https://help.apple.com/developer-account/#/deveedc0daa0)を参照してください。

作成した証明書の秘密鍵はアプリケーションをビルドするmacOSにインストールする必要があるため、ビルドの担当者に渡してください。

### アプリケーションのID

Apple Developer Webサイトの[登録ページ](https://developer.apple.com/account/resources/identifiers/add/bundleId)でアプリケーションのID（`App ID`）を登録します。

このApp IDはプロビジョニングプロファイルの作成とアプリのビルド時に利用します。

作成したApp IDは[一覧](https://developer.apple.com/account/resources/identifiers)で確認できます。

### プロビジョニングプロファイル

プロビジョニングプロファイルは[登録ページ](https://developer.apple.com/account/resources/profiles/add)で証明書とApp IDを組み合わせて作成します。
デバイスに直接インストールするAdHoc配布を利用する場合は事前にデバイスも紐付けておく必要があります。

作成したプロビジョニングプロファイルは[一覧](https://developer.apple.com/account/resources/profiles)で確認できます。
プロビジョニングプロファイルは作成時に選択した証明書をインストールしているmacOSでビルドできます。

#### AdHoc Distributionを利用する場合の考慮

Push通知など高度な機能を利用するアプリを開発する場合、開発者アカウントでは機能に制限があるため、ADP・ADEPでUSB経由のインストール（AdHoc）を選択するケースがあります。
AdHocではプロビジョニングプロファイルをデバイスと紐付けるため、デバイスが増えるとプロビジョニングプロファイルから作成し直す必要があります。
また登録できるiPhoneはライセンス毎に100台という制限があるので、AdHocではなくTestFlightまたはIn-Houseでの配布をおすすめします。
