# santoku-app

## 前提条件

1. React NativeでiOS/Androidアプリケーションを開発する環境が構築できていること
   * [Setting up the development environment · React Native](https://reactnative.dev/docs/environment-setup)
   * 開発に利用するOSによって手順が異なるので、適切な手順を参照するように注意してください
   * "React Native CLI Quickstart"を参照してください

## 環境構築手順

### ソースコードの準備（iOS、Android共通）
1. ローカルの任意の作業ディレクトリでソースコードを取得
    ```bash
    git clone https://gitlab.com/ws-4020/fintan-contents-draft/mobile-app-crib-notes.git
    ```

1. プロジェクトのルートディレクトリに移動
    ```bash
    cd santoku-app
    ```
    
1. 以下コマンドで依存ライブラリをインストール
    ```bash
    npm ci
    ```

### Apple IDの設定

1. Apple ID設定用のファイルを用意
   ```
   cp ios/PersonalAccount.xcconfig.template ios/PersonalAccount.xcconfig
   ```
1. `ios/PersonalAccount.xcconfig`にApple IDの設定を追加
   * `CODE_SIGN_STYLE` は `Automatic` に設定
   * `PERSONAL_IDENTIFIER` は他の人と重複しない値に設定（Bundle Identiferのサフィックスとして利用されます）
   * `DEVELOPMENT_TEAM` は、Xcodeで個人のApple IDをTEAMとして設定したときに表示される値を設定

### iOS
1. Podをインストール
  * `npx pod-install`

1. 以下コマンドで、iOSのシミュレータでアプリを起動
    ```bash
    npm run ios
    ```

### Android
1. 以下コマンドで、Androidのエミュレータでアプリを起動
    ```bash
    npm run android
    ```

## トラブルシュート

### Android
#### トップ画面でロードエラーが発生する

`npm run android`を実行してアプリケーションを起動すると、同時に[Metro Bundler](https://facebook.github.io/metro/)が起動します。
Metro Bundlerの起動失敗などの理由でアプリケーションからMetro Bundlerにアクセスできないと、以下のようなエラー画面が表示されます。

![](../images/failtoload.png)

Metro Bundlerはデフォルトでは`8081`ポートを利用して起動します。`http://localhost:8081`にアクセスして、`React Native packager is running`のように表示されることを確認してください。

`8081`ポートがすでに他のアプリケーションに利用されている場合は、環境変数`RCT_METRO_PORT`を指定することでMetro bundlerが利用するポートを変更できます。

> **Note**: ポートが既に利用されている場合でもエミュレータは正常に起動し、上記のエラー画面が表示されます。

#### プロキシ環境でGradleビルドに失敗する

外部へのアクセスにプロキシを経由している場合、Gradleの設定ファイルにプロキシの設定が必要です。
`~/.gradle/gradle.properties` に以下の設定を追記してください。([Gradle - Accessing the web through a HTTP proxy](https://docs.gradle.org/current/userguide/build_environment.html#sec:accessing_the_web_via_a_proxy))
```
systemProp.http.proxyHost=myproxy.co.jp
systemProp.http.proxyPort=8080
systemProp.http.proxyUser=**** #認証プロキシサーバの場合のみ
systemProp.http.proxyPassword=**** #認証プロキシサーバの場合のみ
systemProp.https.proxyHost=myproxy.co.jp
systemProp.https.proxyPort=8080
systemProp.https.proxyUser=**** #認証プロキシサーバの場合のみ
systemProp.https.proxyPassword=**** #認証プロキシサーバの場合のみ
```

#### エミュレータが起動しない
```
> emulator @Pixel_API_27
PANIC: Missing emulator engine program for 'x86' CPU.
```

利用しているエミュレータの実行ファイルが誤っている可能性があります。

実行ファイルは`$ANDROID_HOME\emulator`と`$ANDROID_HOME\tools`に含まれています。`$ANDROID_HOME\emulator`の実行ファイルが利用されるように`PATH`を設定してください。

なお、`$ANDROID_HOME`は、Android SDKのインストールディレクトリを指します。Android Studioでは、以下の手順で確認できます。

1. File > Project Structureを開く
1. SDK Location > Android SDK locationのテキストボックスを確認する


### iOS
#### nodeバイナリが見つからない場合
```
Can't find 'node' binary to build React Native bundle
```

Xcode Project内で、React Nativeのバンドル時にnodeコマンドを使用しており、PATHを通す必要があります。


- bashの場合：`~/.bash_profile`
- zshの場合：`~/.zprofile`
    ```bash
    export PATH=$PATH:[Nodeのインストールディレクトリ]/bin
    ```
