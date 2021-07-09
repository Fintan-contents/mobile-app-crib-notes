---
title: Flipper
---

モバイルアプリ開発に使いやすいツールとして、モバイルアプリのデバッグ用プラットフォームである[Flipper](https://fbflipper.com/)を紹介します。

レイアウトやネットワークなどの様々な情報をひとつのツールで検査できます。
また、FlipperはReact Nativeを標準でサポートしているため、セットアップ後すぐにReact Nativeアプリのデバッグを開始できます。

:::note
Flipperはバージョン0.62以降のReact Nativeに対応していますが、Expo Goでアプリを起動した場合は使用できません。
:::

## インストール

インストール手順は[Desktop App | Flipper](https://fbflipper.com/docs/getting-started/index)を参照してください。
最新以外のバージョンは[GitHub](https://github.com/facebook/flipper/releases)からダウンロード可能です。

全てインストールしたあと、Flipperを起動してSetup Doctorがグリーンになっていることを確認してください。

OpenSSLとWatchmanも合わせてインストールする必要があります。

## Flipperを利用する

セットアップが完了したらReact NativeアプリとFlipperを起動してみましょう。

:::caution
Flipperはデフォルトで`8088`,`8089`ポートを使用するため、Metro Bundlerのポート番号を変更している場合被らないようにしてください。
また、Metro Bundlerのポート番号を変更している場合は、起動時にポート番号を指定する必要があります。
Flipperのインストールディレクトリで以下のコマンドを実行し、Flipperを起動してください。

```bash
METRO_SERVER_PORT=<Metro Bundlerのポート番号> ./flipper
```

環境変数として`METRO_SERVER_PORT`を定義すれば起動時に指定する必要はありません。

:::

デフォルトで以下のプラグインを利用できます。

- React Native Logs
- React DevTools
- [Device crash reporter](https://fbflipper.com/docs/features/crash-reporter-plugin)
- [Device logs](https://fbflipper.com/docs/features/logs-plugin)
- [Databases](https://fbflipper.com/docs/features/databases-plugin)
- [Images](https://fbflipper.com/docs/features/images-plugin)
- [Layout Inspector](https://fbflipper.com/docs/features/layout-plugin)
- [Network](https://fbflipper.com/docs/features/network-plugin)
- [Shared Preferences Viewer](https://fbflipper.com/docs/features/shared-preferences-plugin)

### React Native Logs

React Nativeのコンソールログが表示されます。 `log-ios`や`log-android`で表示されるものと同じです。

詳細は[こちら](https://reactnative.dev/docs/debugging#accessing-console-logs)を参照してください。

### React DevTools

React Developer Toolsと同等の機能を利用できます。

React Developer Toolsについては[こちら](https://reactnative.dev/docs/debugging#react-developer-tools)を参照してください。
