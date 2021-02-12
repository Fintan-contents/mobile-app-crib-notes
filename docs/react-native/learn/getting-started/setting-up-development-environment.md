---
title: 開発環境の構築
---

React Nativeでアプリケーションを開発するための環境構築手順です。環境構築を進める前に必要なツールが既にインストールされているか確認してください。併せてバージョンについても確認してください。必要なバージョンを満たしている場合は該当のツールの再インストールは不要です。満たしていない場合はアップデートしてください。
以降で、[React Nativeの公式ドキュメント](https://reactnative.dev/docs/environment-setup)を参照する際は、**React Native CLI Quickstart**タブを選択して、参照してください。

## React Nativeでの開発に必要なツール
必要なツールとバージョンの確認方法を以下に纏めているので、確認してください。

### **必要なツールとバージョン**
- 共通
  1. Node.js
    コマンドラインかターミナルで`node -v`を実行してください。バージョン `v10.x.x` 以降であればOKです。

      実行結果の例：
      ```console
      $ node -v
      v14.15.1
      ```

      エラーが表示された場合、またはバージョンが`v9.x.x`以下の場合はインストールが必要です。

  1. Open Java Development Kit
    コマンドラインかターミナルで`java -version`を実行してください。バージョン `1.8.x` 以降であればOKです。

      実行結果の例：
      ```console
      $ java -version
      openjdk version "1.8.0_275"
      OpenJDK Runtime Environment (AdoptOpen_JDK)(build 1.8.0_275-b01)
      OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.275-b01, mixed mode)
      ```

      エラーが表示された場合、またはバージョンが`1.7.x`以下の場合はインストールが必要です。

  1. Android Studio
    Android Studioが、インストールされていることを確認してください。インストールされている場合、Android SDKがインストールされていることも確認してください。確認方法は、[Android SDK　主な利用ツール](#android-sdk%e4%b8%bb%e3%81%aa%e5%88%a9%e7%94%a8%e3%83%84%e3%83%bc%e3%83%ab)を参照してください。
    Android Studioがインストールされていない場合、Android Studioからインストールしてください。

  1. react-native-cli
      `react-native-cli`がインストールされていると、アプリ実行に失敗します。[react-native-cliについて](#%e5%8b%95%e4%bd%9c%e7%a2%ba%e8%aa%8d%e6%99%82react-native-cli%e3%81%ab%e3%81%a4%e3%81%84%e3%81%a6)を参照してアンインストールしてください。

- macOS
  1. Watchman
    ターミナルで`watchman -v`を実行してください。   

      実行結果の例：
      ```shell
      $ watchman -v
      4.9.0
      ```

      エラーが表示された場合、インストールが必要です。
      ※バージョンに関して特に指定はありません。

  1. CocoaPods
    ターミナルで`pod --version`を実行してください。   

      実行結果の例：
      ```shell
      $ pod --version
      1.10.1
      ```

      エラーが表示された場合、インストールが必要です。
      ※バージョンに関して特に指定はありません。

  1. Xcode
    Xcodeが、インストールされていることを確認してください。インストールされている場合、Xcodeを起動してください。起動後のウィンドウにバージョンが表示されています。`12.x` 以降であればOKです。  

      表示例：
      `Version 12.3(12C33)`

      Xcodeが、インストールされていない場合、またはバージョンが`11.x`以下の場合はインストールが必要です。

### **Android SDK　主な利用ツール**
Android環境について、Android SDKのツール類を使用してアプリケーション開発を進めていきます。以下のものが利用可能状態であるか確認してください。

1. Platform-Tools
    - **用途**
    Platform-Toolsは、adbやfastboot等の各種ツールが利用できるツールキットです。詳細については、[公式サイト](https://developer.android.com/studio/releases/platform-tools?hl=ja)を参照してください。
    - **インストール状況と環境変数の確認**
    コマンドラインまたは、ターミナルで`adb`を実行します。エラーが表示された場合、Android SDK Platform-Toolsのインストール状況の確認と環境変数の設定状況を確認してください。

      - Android SDK Platform-Toolsの確認方法
      確認はAndroid StudioのSDK Managerを参照して確認します。Android Studioを起動してください。`Configure > SDK Manager > Appearance & Behavior > System Setting > Android SDK`まで遷移し、`SDK Tools`タブを選択。`Android SDK Platform-Tools`がインストール状態で表示されていることを確認してください。

      - 環境変数の確認
      Android SDK Platform-Toolsがインストールされており、環境変数`PATH`に以下`platform-tools`パスが含まれていることを確認してください。

        - Windows
        `%LOCALAPPDATA%\Android\Sdk\platform-tools`

        - macOS
        `~/Library/Android/sdk/platform-tools`

## 環境構築
環境構築について、[React Nativeの公式ドキュメント](https://reactnative.dev/docs/environment-setup)を参照してを進めてください。構築環境について、WindowsとmacOSの両環境の方法を説明します。インストールについて、上記で確認した結果、不足しているものがあれば、React Nativeの公式ドキュメントにしたがってインストールしてください。

## 補足事項
### **Visual Studio Code**  
  開発時に使用するエディタをインストールします。エディタは使い慣れたものなら何でもよいですが、何もインストールしていなければ、今回のハンズオンで使用するコードに対応できるVisual Studio Codeをインストールします。[公式サイト](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)の案内に沿って、インストールしてください。エディタが既に整っている場合は、この手順をスキップしてください。

### **proxy設定**  
proxy環境下で環境構築を進める場合、一部のツールおよび、動作確認時に使用するエミュレータについて、proxy経由での通信が発生するため、設定が必要となります。以下を参照してそれぞれの設定を実施してください。

  - 環境変数  
    環境構築および、実行時等に使用する一部ツール（npmやCocoaPods等）のproxy設定は環境変数に設定してください。

    - Windows  
    以下のコマンドを実行し、proxyを設定してください。
      ```shell
      setx http_proxy=http://プロキシアドレス:ポート番号
      setx https_proxy=http://プロキシアドレス:ポート番号
      ```

    - macOS  
    `~/.bash_profile` へ以下を追記してください。
      ```shell
      export http_proxy=http://プロキシアドレス:ポート番号
      export https_proxy=http://プロキシアドレス:ポート番号
      ```

    上記追記後、`source ~/.bash_profile`を実行してください。

  - Gradle  
    ビルド時はGradleを使用しています。そのためGradleについてもproxyの設定が必要となります。以下を参照して設定してください。

    - 設定ファイル配置場所
      - Windowsの場合  
        `C:\Users\%USERNAME%\.gradle\`配下に`gradle.properties`が存在するか確認してください。  
      - macOSの場合  
        `~/.gradle/gradle.properties`配下に`gradle.properties`が存在するか確認してください。  
      ※`gradle.properties`が存在しない場合、新規作成してください。

    上記の`gradle.properties`へ以下を追記してください。

    ```
    systemProp.http.proxyHost=プロキシアドレス（※）
    systemProp.http.proxyPort=8080
    systemProp.https.proxyHost=プロキシアドレス（※）
    systemProp.https.proxyPort=8080
    ※ネットワークプロトコル（"http://"）は不要。
    ```

## トラブルシュート
これまでに環境構築を進める中で、発生した事象と対処方法を記載します。該当する事象が発生した場合は以下を確認し、対応してください。

### **（動作確認時）トップ画面でJavaScriptがロードできないというエラーが発生する**  
アプリ起動後「Unable to load script.」が表示された場合、`http://localhost:8081`にアクセスしてください。`React Native packager is running`が表示されるかどうかを確認してください。  
`npm run android`や`npm run ios`を実行してアプリケーションを起動すると、同時に[Metro Bundler](https://facebook.github.io/metro/)が起動します。Metro Bundlerはデフォルトでは`8081`ポートで起動します。
このポートが他のプロセスなどによって利用されている場合、アプリがJavaScriptファイルを取得できずに「Unable to load script.」とエラーを表示します。
ポートが他のプロセスに利用されている場合でもエミュレータやMetro Bundlerは正常に起動し、アプリ起動時にエラーが表示されます。
`http://localhost:8081`でMetro Bundlerにアクセスできない場合は、以下いずれかを実施してください。
  - `8081`ポートを利用しているプロセスの停止。
  - `8081`以外のポートでMetro Bundlerを起動。  

`8081`ポートを利用しているプロセスは、次のコマンドで確認できます。

  - Windows  
    ```shell
    netstat -nao | find "ポート番号"
    ```

  - macOS  
    ```shell
    sudo lsof -i:ポート番号
    ```

  上記にて確認した結果、ポート番号が別プロセスで使用されていた場合、以下にて実行時のポート番号を指定して実行してください。  

  - Windows
    - Android
      ```shell
      npx react-native run-android --port=ポート番号
      ```

  - macOS  
  macOSの場合、Metro Bundlerをポート番号指定で起動した後にエミュレータを起動します。
  まず、以下にてポート番号を指定してMetro Bundlerを起動してください。

    ```shell
    npx react-native start --port ポート番号 --reset-cache
    ```

    上記の後、以下から利用するエミュレータに合わせてMetro Bundler起動時と同じポート番号を指定して実行してください。

    - Android
      ```shell
      npx react-native run-android --port=ポート番号
      ```

    - iOS
      ```shell
      npx react-native run-ios --port ポート番号
      ```

### **（動作確認時）react-native-cliについて**  
`react-native-cli` がインストールされていると、アプリ実行時に失敗します。次のコマンドでインストール状況を確認できます。

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

実行結果に`react-native-cli`が含まれている場合は、 **必ずアンインストール**してください。
次のコマンドでアンインストールできます。

  - アンインストールコマンド
    ```shell
    npm uninstall -g react-native-cli
    ```
