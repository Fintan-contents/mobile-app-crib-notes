---
title: Androidアプリのビルド
---

AndroidアプリのビルドはiOSのようにライセンスなどを考慮する必要はありません。
ビルド時に必要となる秘密鍵を管理しなければいけませんが、Google Play App Singingを利用すると鍵を紛失しても影響を小さくできます。

Androidアプリをビルドするには[React Native公式サイト](https://reactnative.dev/docs/signed-apk-android)を参考に作成してください。

:::caution
React Native公式サイトはAPKではなく、Android App Bundle(AAB)を作成する手順です。
APKファイルを作成する場合、[AABを作成する手順](https://reactnative.dev/docs/signed-apk-android#generating-the-release-aab)のコマンドは `./gradlew bundleRelease` ではなく `.gradlew assembleRelease` と読み替えてください。
:::


## リリースに必要な秘密鍵の管理（Google Play App Signing)

Androidのアプリをリリースするには署名が必要で、それにはリリース用秘密鍵が必要です。
この鍵は紛失してしまうとアプリが更新できなくなります。

Google Play App Signingはこの鍵の管理を代行してくれるサービスです。
リリース用秘密鍵をPlay Consoleに預けて、そのかわりに開発者はアップロード用秘密鍵を管理します。
アップロード用秘密鍵はPlay ConsoleにAPKファイルをアップロードするための署名に必要な鍵です。
アップロード用秘密鍵の場合、紛失してもGoogleに連絡すれば再登録できます。

- 参考
  - [Google Play アプリ署名を使用する - Play Console ヘルプ](https://support.google.com/googleplay/android-developer/answer/9842756?hl=ja)
  - [Google Play App Signingで安全なAndroidの鍵管理 | Developers.IO](https://dev.classmethod.jp/articles/google-play-app-signing/)
