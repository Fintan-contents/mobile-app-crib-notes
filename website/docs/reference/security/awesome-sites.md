---
title: セキュリティ関連リンク
---

ここでは、モバイルアプリケーション開発を始める上で参考になる、セキュリティ関連のガイドや記事を紹介します。

## OWASP Mobile Top10

- [原文](https://owasp.org/www-project-mobile-top-10/)
- [日本語訳](https://github.com/LAC-Japan/OWASP-Mobile-Top-10-2016)

プロジェクト開始時に確認することをお勧めします。特にモバイル開発に初めて取り組む方は必ず知っておくべき内容です。

[Open Web Application Security Project (OWASP)](https://owasp.org/)が公開しているドキュメントで、モバイル開発する上で注意すべきセキュリティ事項が簡潔にまとめられています。数時間もあれば読み終えることができます。

ただし記載が不足している箇所もあるので、次に紹介するOWASP Mobile Security Testing Guideも参照するとより理解を深めることができます。例えば以下のような記事です。

- [iOSのアプリで脱獄(Jailbreak)を検知する方法](https://coky-t.gitbook.io/owasp-mstg-ja/ios-tesutogaido/0x06j-testing-resiliency-against-reverse-engineering)
- [KeyStoreはデバイスによってはTrusted Execution Environment(TEE)、Secure Elements(SE)に未対応](https://coky-t.gitbook.io/owasp-mstg-ja/android-tesutogaido/0x05d-testing-data-storage#keystore-androidkeystore)

## OWASP Mobile AppSec Verification Standard (OWASP MASVS)

- [原文](https://mobile-security.gitbook.io/masvs/)
- [日本語訳](https://coky-t.gitbook.io/owasp-masvs-ja/)

プロジェクト開始時に確認することをお勧めします。

[Open Web Application Security Project (OWASP)](https://owasp.org/)が公開しているドキュメントです。モバイル開発におけるセキュリティ要件がチェックリスト形式でまとめられており、数時間もあれば読み終えることができます。

MASVSは2つのセキュリティ検証レベル（MASVS-L1およびMASVS-L2）とリバースエンジニアリング耐性要件（MASVS-R）を定義しています。

- MASVS-L1: 一般的なセキュリティ要件であり、すべてのモバイルアプリに推奨される
- MASVS-L2: 機密性の高いデータを扱うアプリに推奨される
- MASVS-R:  追加の保護コントロール

[Using the MASVS](https://mobile-security.gitbook.io/masvs/0x03-using_the_masvs)（[日本語](https://coky-t.gitbook.io/owasp-masvs-ja/0x03-using_the_masvs)）に、どのようなアプリケーションでどのセキュリティ検証レベルを採用するべきかについて説明が記載されています。プロジェクトで[どのセキュリティ検証レベルを採用するべきかについてもガイドラインが提示されている](https://mobile-security.gitbook.io/masvs/0x03-using_the_masvs#which-verification-type-to-choose)（[日本語](https://coky-t.gitbook.io/owasp-masvs-ja/0x03-using_the_masvs#donotaipuwosuruka)）ので、セキュリティ要件を定義する際などに参考にしてください。

## OWASP Mobile Security Testing Guide (OWASP MSTG)

- [原文](https://owasp.org/www-project-mobile-security-testing-guide/)
- [GitBook(原文)](https://mobile-security.gitbook.io/mobile-security-testing-guide/)
- [GitBook(日本語訳)](https://coky-t.gitbook.io/owasp-mstg-ja/)
- [チェックリスト (1.1.3)](https://github.com/OWASP/owasp-mstg/tree/1.1.3-excel/Checklists)
  - [OWASP MASVS](https://owasp.org/www-project-mobile-security-testing-guide/)と[OWASP MSTG](https://owasp.org/www-project-mobile-security-testing-guide/)のマッピング表です。
- [チェックリスト(Framework別)](https://github.com/OWASP/owasp-mstg#about-hybrid-apps)
  - React NativeやFlutterなどフレームワークごとにセキュリティ要件を担保しているかが明記されているチェックリストです。ただし未完成（Work In Progress）なので注意してください。

[OWASP](https://owasp.org/www-chapter-japan/)が公開している、モバイルアプリケーションのセキュリティをテストするための包括的なマニュアルです。[OWASP MASVS](https://coky-t.gitbook.io/owasp-masvs-ja/)に記載されている要件に対応するテストケースのリストが含まれています。

[OWASP Mobile Top10](https://github.com/LAC-Japan/OWASP-Mobile-Top-10-2016)よりも、詳細に記載されているため分量は多いですが、案件の内容に合わせてピックアップして読むだけでも十分役に立ちます。例えば、[モバイルアプリの認証アーキテクチャ](https://coky-t.gitbook.io/owasp-mstg-ja/mobairuapuritesutogaido/0x04e-testing-authentication-and-session-management)を読むと、認証アーキテクチャや注意点などについて理解できるでしょう。

## Android Developers Guide | Security

- [Android Developers Guide | Security](https://developer.android.com/topic/security/best-practices?hl=ja)

[Android オープンソース プロジェクト](https://source.android.com/?hl=ja)が公開しているガイドで、Androidアプリケーションを設計する際に読むと参考になります。

一般的なセキュリティ観点はここまでに紹介したOWASPのドキュメントで網羅できますが、Android特有のセキュリティ観点についてはこちらを一読するのをお勧めします。次で紹介する[Androidアプリのセキュア設計・セキュアコーディングガイド](https://www.jssec.org/dl/android_securecoding/index.html)をあわせて読むと、より実装ベースで理解できます。分量は多いですが、案件の内容に合わせてピックアップして読むだけでも十分役に立ちます。

## Androidアプリのセキュア設計・セキュアコーディングガイド

- [Androidアプリのセキュア設計・セキュアコーディングガイド](https://www.jssec.org/dl/android_securecoding/index.html)

[一般社団法人日本スマートフォンセキュリティ協会（JSSEC）](https://www.jssec.org/)が公開しているガイドで、設計、実装を始める際に読むことをお勧めします。
[OWASP Mobile Top 10](https://github.com/LAC-Japan/OWASP-Mobile-Top-10-2016)や[OWASP MASVS](https://coky-t.gitbook.io/owasp-masvs-ja/)、[OWASP MSTG](https://coky-t.gitbook.io/owasp-mstg-ja/)と重複する部分はありますが、他ドキュメントよりも実装レベルで詳細に記載されています。例えばAndroid特有のパーミッションの管理やモバイル特有の生体認証などについてです。

ボリュームは大きく、ソースコードは読み飛ばし「ルールブック」に注目すれば、1日で読むことができます。

「ルールブック」のセクションでは、その記事がテーマとする開発者コンテキストにおいて、セキュリティ観点から守るべきルールや考慮事項を掲載しています。1、2章は読み飛ばして3～6章を読むことお勧めします。

## iOSのセキュリティについて

iOSのセキュリティに関するガイド等で最近のドキュメントは見つけられておりません。

OWASP MSTGの[iOSテストガイド](https://coky-t.gitbook.io/owasp-mstg-ja/ios-tesutogaido/0x06a-platform-overview)をご覧ください。

## 開発ツールごとのセキュリティに関するガイド

開発ツールごとにセキュリティ関連のガイドがあるので、プロジェクト開始時に見ておくことをお勧めします。

- [React Native](https://reactnative.dev/docs/security)
- [Flutter](https://flutter.dev/security)
- [Ionic](https://ionicframework.com/docs/techniques/security)
- [Cordova](https://cordova.apache.org/docs/en/latest/guide/appdev/security/index.html)
