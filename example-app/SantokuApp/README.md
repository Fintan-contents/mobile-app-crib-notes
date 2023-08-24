# SantokuApp

## React Native開発環境の構築

- [開発環境構築](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment)を参考に開発環境を構築してください。

## アプリで使用するアカウント

このアプリでは、事前データとして以下のアカウントを用意しています。

| アカウントID | アカウント種別 | 特徴 |
|:--|:--|:--|
| santoku | なし | 実際の運用に近いデータを作成しています。境界値のテスト以外に有用なアカウントです。 |
| admin | administrator,techlead | 最大桁数の検証を実施したい場合に有用なアカウントです。一覧データも大量に作成しています。 |
| partner | partner | 最小桁数の検証を実施したい場合に有用なアカウントです。一覧データは初期データとして存在しません。 |

パスワードは、英小文字、英大文字、数字を1つ以上含む8文字以上の文字列であればどんな文字列でもログイン可能です。（例：`aaaaaaA1`）

## アプリケーション構造

- [アプリケーション構造](https://fintan-contents.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/application-structure/overview)を参照してください。

## tools
`.script` フォルダに、ライブラリのライセンス一覧を出力するscriptなどがあります。

参考: [.script/README.md](.script/README.md)
