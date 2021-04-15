---
title: 社内や業務委託先でのテスト
---

## iOS

ADEPライセンスでのIn-House配布か、ADPでのTestFlight（内部テスター）の2つが適切です。
両者はデバイス登録台数制限と配布方法が異なります。プロジェクトの要件に応じて選択してください。

|  |ADPのTestFlight（内部テスター）|ADEPのIn-House配布|
|:-|:---------------------------|:----------------|
|テスター登録|Apple IDをADPライセンスに登録する必要がある|不要|
|テスター人数制限|100人まで|なし|
|デバイス台数制限|1人につき30台まで|なし|
|配布方法 | TestFlight経由|自前のHTTPSサーバ経由|

 - [ADPのTestFlight(内部テスター)で配布](../build/ios/adp_testflight.md)
 - [ADEPのIn-House配布](../build/ios/adep_in_house.md)

## Android

APKファイルを自前で配布するか、内部テストまたはクローズドテストが使えます。
内部テストやクローズドテストはGoogle Play Consoleがアプリを配布してくれるので、配布の仕組みを自前で用意する必要がありません。

 - [Google Play](../build/android/google_play_test.md)でテスト配布
 - [APKファイルを配布](../build/android/apk_dist.md)
