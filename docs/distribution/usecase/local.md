---
title: ローカル環境でアプリをインストールする
sidebar_label: ローカル環境で確認
---

開発中にデバイスで動作確認したいときのアプリのインストール方法を紹介します。

### iOS

iOSでプッシュ通知などのAppの高度な機能を使用するアプリの場合は、ADP・ADEPライセンスの証明書、プロビジョニングプロファイル、デバイスが必要です。USB経由でデバイスにインストールするのが最も簡単ですが、デバイスをADP・ADEPライセンスに登録する必要があります。ADP・ADEPに登録できるiPhoneは契約毎に100台という厳しい制限があるので、できればUSB経由ではなくTestFlightまたはIn-Houseでの配布をおすすめします。

Appの高度な機能を含まない場合は、個人のApple IDに紐づく証明書、プロビジョニングプロファイル、デバイスを使用できます。
こちらもiOSのAppの高度な機能を含むアプリの場合と同様にTestFlightまたはIn-Houseでも配布できます。

- ADPの[TestFlight](../build/ios/adp_testflight.md)の内部テスターを利用する
- ADEPの[In-House](../build/ios/adep_in_house.md)で配布
- [個人のApple ID](../build/ios/personal_team.md)を使用する
- ADP・ADEPの[AdHoc](../build/ios/adp_local.md)でインストールする

### Android

AndroidはiOSのようにAppの高度な機能を考慮する必要はありません。 USB経由でデバイスにインストールするのが最も簡単ですが、USB接続が禁止されている場合はAPKファイルでの配布か内部テスト版としての配布が利用できます。APKファイルでの配布は自分たちでサーバを立てるなどして配布する必要がありますが、内部テストであればGoogle Play Console経由で配布できるので簡単です。

- [デバイスにUSB経由](../build/android/local.md)でインストール
- [APKファイルを配布](../build/android/apk_dist.md)
- [内部テスト版で配布](../build/android/google_play_test.md)
