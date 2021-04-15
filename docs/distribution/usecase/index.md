---
title: よくあるユースケース
slug: /distribution/usecase
---

モバイルアプリケーション開発時によくあるユースケースについて、利用するライセンスや手順を紹介します。

- [開発中のアプリを開発者のデバイスで動作確認したい](./local.md)
  - [iOS](./local.md#ios)
  - [Android](./local.md#android)
- [（開発チームが開発用端末を操作して）お客様にデモを見せたい](./demo.md)
- [社内や業務委託先でテストをしたい](./develop_test.md)
- [お客様や関係者に実機でテストをしてもらいたい](./client_test.md)
- [フィールドテストをしたい・ベータリリースしたい](./field_test.md)

## 早見表

### iOS

|ユースケース/配布|[個人でUSB経由](../build/ios/personal_team.md)|[AdHoc](../build/ios/adp_local.md)|[In-House](../build/ios/adep_in_house.md)|[TestFlight(内部)](../build/ios/adp_testflight.md)|[TestFlight(外部)](../build/ios/adp_testflight.md)|
|:---------|-:-|-:-|-:-|:--|:--|
|開発中にデバイスで動作確認したい|YES|YES|YES|YES|X|
|デモを見せたい|YES|YES|YES|YES|X|
|社内や業務委託先でテストをしたい|X|YES|YES|YES|X|
|お客様に実機でテストをしてもらいたい|X|YES|X|YES|X|
|フィールドテストをしたい|X|X|X|X|YES|

### Android

|ユースケース/配布|[USB経由](../build/android/local.md)|[APKファイル配布](../build/android/apk_dist.md)|[内部テスト](../build/android/google_play_test.md)|[クローズテスト](../build/android/google_play_test.md)|[オープンテスト](../build/android/google_play_test.md)|
|:---------|-:-|-:-|-:-|-:-|-:-|
|開発中にデバイスで動作確認したい|YES|YES|YES|X|X|
|デモを見せたい|YES|YES|YES|X|X|
|社内や業務委託先でテストをしたい|X|YES|YES|YES|X|
|お客様に実機でテストをしてもらいたい|X|X|YES|YES|X|
|フィールドテストをしたい|X|X|X|X|YES|
