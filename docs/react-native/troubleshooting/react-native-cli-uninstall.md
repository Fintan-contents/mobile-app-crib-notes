---
title: react-native-cliについて
---

## エラー内容

`react-native-cli` がインストールされていると、アプリ実行時に失敗します。状況を確認し、インストールされている場合はアンインストールしてください。

## 対処方法

### インストール状況の確認

インストール状況について、次のコマンドで確認できます。

- 確認コマンド

  ```bash
  react-native -v
  ```

- 実行例

  ```bash
  $ react-native -v
  react-native-cli: 2.0.1
  react-native: n/a - not inside a React Native project directory
  ```


### アンインストール

実行結果に`react-native-cli`のバージョンが表示された場合、 **必ずアンインストール**してください。
次のコマンドでアンインストールできます。

- アンインストールコマンド

  ```bash
  npm uninstall -g react-native-cli
  ```
