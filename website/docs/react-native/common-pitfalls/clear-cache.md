---
title: キャッシュが残ってファイルの更新ができない
---

## エラー内容

イメージファイルを追加し、エミュレータで確認する時に、キャッシュが残っていると次のようなエラーが発生します。

```console
The development server returned response error
code: 500
URL: http://localhost:8081/index.bundle?platform=android&dev=true&minify=false
Body:
("originModulePath":"path/
image/Logo.tsx", targetModuleName"."assets/ logo.png
""message": "Unable to resolve module
assets/logo.pg from /path/
image/Logo.tsx: assets/logo.png could not be found within the project or in these directories:
In node_modules\n\nif you are sure the module exists, try these steps: In 1. Clear watchman
watches: watchman watch-del-all\n 2. Delete node_modules and run yarn install\n 3. Reset Metro's cache: yarn start --reset-cacheln 4. Remove the cache: rm -rf/tmp/
metro-*\n\u001b/0m\u001b|31m\u001b/1m>\u0
01b(22m\u001b[39m\u001b[90m 1 /\u001b/39m
lu001b|36mimport\u001b[39m logolmage
lu001b/36mfrom\u001b[39m \u001b|32m'assets/ logo.png'\u001b[39m\u001b|33m; lu0016/39m\u001b|0m\n\u001b|0m lu001b[90m \u001b|39m \u001b|31m\u001b(1m^\u001b[22m\u001b|
39m\u001b|0m\n\u001b|0m \u001b 90m 2 |
\u0016[39m \u001b|36mimport\u001b[39m
lu001b/33mReact\u001b 39m
\u001b|36mfrom\u001 b 39m
\u001b|32mreact\u001b(39m\u001b|33m;
```

## 対処方法

### エミュレータの再起動

エミュレータとターミナルを終了し、再起動します。<br/>
再起動しでもエラーが発生する場合は[キャッシュ削除](/react-native/common-pitfalls/clear-cache#キャッシュ削除)を実行してください。

### キャッシュ削除

次のコマンドでキャッシュが削除されます。

```bash
npx expo start --clear
```

:::note info
OSごとのキャッシュに関する詳細は下記を参照してください。

* [macOS](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux/)
* [Windows](https://docs.expo.dev/troubleshooting/clear-cache-windows/)
:::
