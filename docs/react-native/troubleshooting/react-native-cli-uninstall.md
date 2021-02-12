---
title: react-native-cliについて
---

## エラー内容
`react-native-cli` がインストールされていると、アプリ実行時に失敗します。状況を確認し、インストールされている場合、アンインストールしてください。

## 対処方法

### インストール状況の確認
インストール譲許うについて、次のコマンドで確認できます。

- 確認コマンド
  ```shell
  npm ls -g --depth=0
  ```

- 実行例
  ```shell
  $ npm ls -g --depth=0
  expo-cli@3.28.5
  npm@6.14.8
  react-native-cli@2.0.1
  yarn@1.22.10
  ```

### アンインストール

実行結果に`react-native-cli`が含まれている場合は、 **必ずアンインストール**してください。
次のコマンドでアンインストールできます。

- アンインストールコマンド
  ```shell
  npm uninstall -g react-native-cli
  ```
