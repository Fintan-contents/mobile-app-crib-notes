---
title: セキュリティ関連リンク
---

ここでは、モバイルアプリケーション開発を始める上で参考になる、セキュリティ関連のガイドや記事を紹介します。

## OWASP Mobile Top 10

- [原文](https://owasp.org/www-project-mobile-top-10/)
- [日本語訳](https://coky-t.gitbook.io/owasp-mobile-top10-ja)

プロジェクト開始時に確認することをお勧めします。特にモバイル開発に初めて取り組む方は必ず知っておくべき内容です。

[Open Web Application Security Project (OWASP)](https://owasp.org/)が公開しているドキュメントで、モバイル開発する上で注意すべきセキュリティ事項が簡潔にまとめられています。数時間もあれば読み終えることができます。

ただし記載が不足している箇所もあるので、次に紹介するOWASP Mobile Security Testing Guideも参照するとより理解を深めることができます。例えば以下のような記事です。

- [iOSのアプリで脱獄(Jailbreak)を検知する方法](https://coky-t.gitbook.io/owasp-mastg-ja/ios-tesutogaido/0x06j-testing-resiliency-against-reverse-engineering)
- [KeyStoreはデバイスによってはTrusted Execution Environment(TEE)、Secure Elements(SE)に未対応](https://coky-t.gitbook.io/owasp-mastg-ja/android-tesutogaido/0x05d-testing-data-storage#keystore-androidkeystore)

## Mobile Application Security Verification Standard (OWASP MASVS)

- [原文](https://mas.owasp.org/MASVS/)
- [日本語訳](https://coky-t.gitbook.io/owasp-masvs-ja)

プロジェクト開始時に確認することをお勧めします。

[Open Web Application Security Project (OWASP)](https://owasp.org/)が公開しているドキュメントです。モバイル開発におけるセキュリティ要件がチェックリスト形式でまとめられており、数時間もあれば読み終えることができます。

MASVSに含まれるすべての検証観点を満たすことを要件とするのではなく、後述のMAS Testing ProfilesとMASWEを参考にしてセキュリティ要件を設定します。

:::info
以前はセキュリティ検証レベルとテスト観点のマッピングがMASVSに含まれていました。2023年頃の構成変更でセキュリティ検証レベルはMAS Testing
Profile、テスト観点とのマッピングはMASWEと、それぞれ独立したコンテンツに抽出されました。
:::

## OWASP Mobile Application Security Testing Guide (OWASP MASTG)

- [原文](https://mas.owasp.org/MASTG/)
- [日本語訳](https://coky-t.gitbook.io/owasp-mastg-ja)

[OWASP](https://owasp.org/www-chapter-japan/)が公開している、モバイルアプリケーションのセキュリティをテストするための包括的なマニュアルです。[OWASP MASVS](https://coky-t.gitbook.io/owasp-masvs-ja)に記載されている要件に対応するテストケースのリストが含まれています。

[OWASP Mobile Top 10](https://coky-t.gitbook.io/owasp-mobile-top10-ja)よりも、詳細に記載されているため分量は多いですが、案件の内容に合わせてピックアップして読むだけでも十分役に立ちます。例えば、[モバイルアプリの認証アーキテクチャ](https://coky-t.gitbook.io/owasp-mastg-ja/mobairuapuritesutogaido/0x04e-testing-authentication-and-session-management)を読むと、認証アーキテクチャや注意点などについて理解できるでしょう。

## Mobile Application Security Weakness Enumeration (MASWE)

OWASP Mobile App Security (OWASP MAS)では、[MAS Testing Profiles](https://mas.owasp.org/news/2023/07/28/mas-testing-profiles-and-mastg-atomic-tests/#mas-testing-profiles) として、4つのプロファイルを定義しています。

- MAS-L1: 必要不可欠なセキュリティ
- MAS-L2: 高度なセキュリティ
- MAS-R:  追加の保護コントロール
- MAS-P: プライバシーの保護

そして、MASVSで定義される検証項目のうち、どれを対象にするかがプロファイルごとにまとめられているのが[MASWE](https://mas.owasp.org/MASWE/)です。

まずは開発対象のアプリの特性からどのプロファイルを採用するかを決め、MASWEを参考にしてセキュリティ観点での検証項目を決める、という進め方が想定されています。

## Android Developers Guide | Security

- [Android Developers Guide | Security](https://developer.android.com/topic/security/best-practices?hl=ja)

[Android オープンソース プロジェクト](https://source.android.com/?hl=ja)が公開しているガイドで、Androidアプリケーションを設計する際に読むと参考になります。

一般的なセキュリティ観点はここまでに紹介したOWASPのドキュメントで網羅できますが、Android特有のセキュリティ観点についてはこちらを一読するのをお勧めします。次で紹介する[Androidアプリのセキュア設計・セキュアコーディングガイド](https://www.jssec.org/dl/android_securecoding/index.html)をあわせて読むと、より実装ベースで理解できます。分量は多いですが、案件の内容に合わせてピックアップして読むだけでも十分役に立ちます。

## Androidアプリのセキュア設計・セキュアコーディングガイド

- [Androidアプリのセキュア設計・セキュアコーディングガイド](https://www.jssec.org/dl/android_securecoding/index.html)

[一般社団法人日本スマートフォンセキュリティ協会（JSSEC）](https://www.jssec.org/)が公開しているガイドで、設計、実装を始める際に読むことをお勧めします。
[OWASP Mobile Top 10](https://coky-t.gitbook.io/owasp-mobile-top10-ja)や[OWASP MASVS](https://github.com/coky-t/owasp-masvs-ja/tree/v1.3.1)、[OWASP MASTG](https://coky-t.gitbook.io/owasp-mastg-ja/)と重複する部分はありますが、他ドキュメントよりも実装レベルで詳細に記載されています。例えばAndroid特有のパーミッションの管理やモバイル特有の生体認証などについてです。

ボリュームは大きく、ソースコードは読み飛ばし「ルールブック」に注目すれば、1日で読むことができます。

「ルールブック」のセクションでは、その記事がテーマとする開発者コンテキストにおいて、セキュリティ観点から守るべきルールや考慮事項を掲載しています。1、2章は読み飛ばして3～6章を読むことお勧めします。

## iOSのセキュリティについて

iOSのセキュリティに関するガイド等で最近のドキュメントは見つけられておりません。

OWASP MASTGの[iOSテストガイド](https://coky-t.gitbook.io/owasp-mastg-ja/ios-tesutogaido/0x06a-platform-overview)をご覧ください。

## 開発ツールごとのセキュリティに関するガイド

開発ツールごとにセキュリティ関連のガイドがあるので、プロジェクト開始時に見ておくことをお勧めします。

- [React Native](https://reactnative.dev/docs/security)
- [Flutter](https://flutter.dev/security)
- [Ionic](https://ionicframework.com/docs/techniques/security)
- [Cordova](https://cordova.apache.org/docs/en/latest/guide/appdev/security/index.html)
