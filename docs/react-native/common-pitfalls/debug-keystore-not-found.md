---
title: debug.keystoreが存在しない
---

## エラー内容

`npm run android`を実行したときに、必要なキーストアファイルが存在していないと次のようなエラーが発生します。

```console
* What went wrong:
Execution failed for task ':app:validateSigningDebug'.
> Keystore file '/private/tmp/ProjectFromTemplate/android/app/debug.keystore' not found for signing config 'debug'.
```

## 対処方法

### debug.keystoreの作成

この場合、次のコマンドをReact Nativeプロジェクトのルートディレクトリで実行してください。`debug.keystore`が作成されます。

```bash
keytool -genkey -v -keystore android/app/debug.keystore -storepass android -alias androiddebugkey -keypass android -dname "CN=Android Debug,O=Android,C=US"
```

`debug.keystore`はデバッグ用途のキーストアなので、Gitリポジトリに含めて問題ありません。
