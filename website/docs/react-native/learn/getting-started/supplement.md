---
title: 開発環境の補足
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

開発時に使用するエディタやproxy環境下で開発環境を構築する方法を紹介します。

## Visual Studio Code

  開発時に使用するエディタをインストールします。エディタは使い慣れたものなら何でもいいです。特にこだわりがなければ`Visual Studio Code`をお勧めします。[公式サイト](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)の案内に沿って、インストールしてください。エディタ環境が準備されている場合は、この手順をスキップしてください。

## proxy設定

proxy環境下で開発環境を構築する場合、追加の設定が必要です。次の手順にしたがい設定してください。

- 環境変数

  環境構築および、実行時等に使用する一部ツール（npmやCocoaPods等）のproxy設定です。次のコマンドで環境変数を設定してください。

  <!-- textlint-disable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

  <Tabs
    groupId="operating-systems"
    defaultValue="mac"
    values={[
      {label: 'macOS', value: 'mac'},
      {label: 'Windows', value: 'win'},
    ]
  }>

  <!-- textlint-enable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

  <TabItem value="mac">

  `~/.bash_profile`へ、以下の内容を追記してください。

  ```console
  export http_proxy=http://プロキシアドレス:ポート番号
  export https_proxy=http://プロキシアドレス:ポート番号
  ```

  上記追記後、`source ~/.bash_profile`を実行してください。
  </TabItem>
  <TabItem value="win">

  ```console
  setx http_proxy http://プロキシアドレス:ポート番号
  setx https_proxy http://プロキシアドレス:ポート番号
  ```

  </TabItem>
  </Tabs>

- Gradle

  Android開発ではビルドツールにGradleを使用します。Gradleのproxy設定は`gradle.properties`で設定します。

  - 設定内容

    ```console
    systemProp.http.proxyHost=プロキシアドレス
    systemProp.http.proxyPort=8080
    systemProp.https.proxyHost=プロキシアドレス
    systemProp.https.proxyPort=8080
    ```

    :::caution
    プロキシアドレスについて、ネットワークプロトコル（`http://`）は不要です。
    :::

  - 設定先

    <!-- textlint-disable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

      <Tabs
        groupId="operating-systems"
        defaultValue="mac"
        values={[
          {label: 'macOS', value: 'mac'},
          {label: 'Windows', value: 'win'},
        ]
      }>

    <!-- textlint-enable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

      <TabItem value="mac">

      `~/.gradle/gradle.properties`配下に`gradle.properties`が存在するか確認してください。
      </TabItem>
      <TabItem value="win">

      `C:\Users\%USERNAME%\.gradle\`配下に`gradle.properties`が存在するか確認してください。
      </TabItem>
      </Tabs>

    :::caution
    `gradle.properties`が存在しない場合、新規作成してください。
    :::
