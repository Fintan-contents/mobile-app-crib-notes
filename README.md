# mobile-app-crib-notes

これまでWebアプリケーションを開発していたエンジニアが、モバイルアプリケーションの開発を始めるために調査した内容などをまとめています。そのため、Webとは考え方やアーキテクチャが異なるポイントを重視した内容となっています。

> ここでは、まだモバイルアプリケーションの開発におけるごく一部の側面しか紹介できていません。また、すでに紹介している内容についても、内容を追記する可能性もありますし、プラットフォームの変化などで変更されていく可能性もあります。

## Project Layout

* `website`: GitHub Pagesで公開しているページのソースコード（Docusaurus）
* `example-app`: サンプルアプリケーションのソースコード（React Native）

## ライセンス

ドキュメントは、<a rel="license" href="https://fintan.jp/?page_id=201" target="_blank">Fintan コンテンツ 使用許諾条項</a>の下に提供されており、コードサンプルは<a rel="license" href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 License</a>の下に提供されています。

また、一部でMIT Licenseのソースコードを利用させていただいています。

* [extensible-custom-error](https://github.com/necojackarc/extensible-custom-error)
  * ライセンス： https://github.com/necojackarc/extensible-custom-error/blob/52d56448d9f535835a9ffbc7e447b951555c08c2/README.md
  * 利用箇所： [ErrorWrapper.ts](example-app/SantokuApp/src/bases/core/errors/ErrorWrapper.ts)
* [react-native-barcode-generator](https://github.com/Kichiyaki/react-native-barcode-generator)
  * ライセンス： https://github.com/Kichiyaki/react-native-barcode-generator/blob/22f020eacf47fe23f0e311732ec801068db14fbc/LICENSE
  * 利用箇所： [Barcode.tsx](example-app/SantokuApp/src/bases/ui/barcode/Barcode.tsx)
