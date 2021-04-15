---
title: テスト版でAndroidアプリを配布
sidebar_label: テスト版で配布
---


## Google Playで利用できるテストの違い

Google Playではテストのためにアプリを配信できます。テスト内容や目的に応じて使い分けることができる3つのテスト版トラック（配信方法）が用意されています。


 - 内部テスト版
    - アプリを利用できるGoogleアカウントを制限して、アプリを配信できます
    - クローズドテスト版とは異なり、トラックを分けることはできません
 - クローズド テスト版
    - アプリを利用できるGoogleアカウントを制限して、アプリを配信できます
    - アプリは、実際にGoogle Playからの公開に近い形でテスターに配布されます
      - 例えば、有料のアプリは購入しないとテストに参加できません
    - トラックごとにテスターやテスト対象のアプリを設定でき、複数のトラックを使い分けることで、複数の機能を並列でテストできます
 - オープンテスト版
    - Google Playから「早期アクセス」のアプリとして一般に公開されます

それぞれの違いや使い分け方についての詳細は、以下のドキュメントを参照してください。

 - [オープンテスト版、クローズド テスト版、内部テスト版をセットアップする - Play Console ヘルプ](https://support.google.com/googleplay/android-developer/answer/9845334?hl=ja&visit_id=637534600531183904-3822568075&rd=1)

内部テストとクローズド テストでは、テスターをグループ化して管理します。テスターの登録にはメールアドレスを利用しますが、Googleアカウントに登録されているメールアドレスである必要があります。

内部テストとクローズド テストについて簡単に紹介します。

##  アプリのビルド

Androidアプリの場合、APKファイル配布、内部テスト、外部テスト、オープンテストの全ての配布方法においてビルド手順は同じです。
React Native公式サイトを参考にAPKファイルを作成してください。

:::caution
TODO：鍵管理についてもガイドするか判断。
TODO：`cd android`はReactNativeが前提だけど、どうやって案内するか判断。
[AABを作成するコマンド](https://reactnative.dev/docs/signed-apk-android#generating-the-release-aab)は `./gradlew bundleRelease` ではなく `.gradlew assembleRelease` を実行してAPKファイルを作成してください。 
:::

## 内部テスト

### 1. Play ConsoleにAPKファイルをアップロード、各種設定

Play Consoleヘルプ：[オープンテスト版、クローズド テスト版、内部テスト版をセットアップする](https://support.google.com/googleplay/android-developer/answer/3131213?hl=ja)にしたがって作業してください。
リリース鍵の管理はGoogle Play App Signingを利用することを推奨します。

Play Consoleでアプリを登録した後、内部テストのリリースを作成すると、Play Consoleのダッシュボードに内部テストでアプリを配信するまでに必要な手順の詳細が表示されます。それにしたがって作業してください。

- 参考
  - Play Consoleヘルプ：[オープンテスト版、クローズド テスト版、内部テスト版をセットアップする](https://support.google.com/googleplay/android-developer/answer/3131213?hl=ja)
  - [Androidアプリの内部テストを実施する - Qiita](https://qiita.com/taketakekaho/items/0d2fe1f4204015414863)

### 2. 内部テストで公開したアプリの公開URLをAndroid端末で開きアプリをインストール・起動


## クローズド テスト

内部テストと同様に、Play Consoleヘルプ：[オープンテスト版、クローズド テスト版、内部テスト版をセットアップする](https://support.google.com/googleplay/android-developer/answer/3131213?hl=ja)にしたがって作業してください。
