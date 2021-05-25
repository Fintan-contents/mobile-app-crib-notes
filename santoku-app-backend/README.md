# santoku-app-backend

<!-- markdownlint-disable-file MD024 -->

SantokuAppが利用するプッシュ通知などのAPIを提供するサンプルコードです。
このコードはAzure Functions上で稼働します。

## Azure Functions環境の構築手順

### Firebaseプロジェクトの作成

1. Firebaseのコンソール画面にログイン
2. プロジェクトを新規作成

### Firebase Admin SDKで利用するService Account Credentials Fileの取得

1. Firebaseのコンソール画面にログイン
2. プロジェクトを選択し、プロジェクトの設定画面を開く
3. サービスアカウントのタブを開き、「新しい秘密鍵の生成」ボタンを押す
4. 「キーを生成」ボタンを押し、Service Account Credentials Fileをダウンロード

### Azure Key Vault（日本語名：キーコンテナー）の作成と設定

1. Azure Portal上でKey Vaultを新規作成
    - Resource group, Key vault name, Region以外はデフォルトで構わない
2. Key Vault画面の左側タブからSecretsを選択し、「Generate/Import」を選択
3. 名前は適切な値、値にFirebaseコンソールからダウンロードしたService Account Credentials FileのJSONを入力して作成
4. 作成したシークレットの詳細画面を開き、Secret Identifierの項目をコピーして控えておく

### Function App（日本語名：関数アプリ）の作成と設定

1. Azure Portal上でFunction Appを新規作成
    - Basicsタブ
        - Resource Group, Function App nameを入力
        - PublishはCodeを選択
        - Runtime stackとVersionはそれぞれJava, 11.0を選択
        - Regionは適切なものを選択
    - Hostingタブ
        - Operating systemはWindowsを選択（従量課金制プランの場合、LinuxだとKey Vault参照が未サポート）
2. Function AppのSystem assigned identityを作成
    1. 作成したFunction Appの画面を開き、左側タブからIdentityを選択
    2. StatusをOnに切り替える
3. Function AppからKeyVaultへのアクセスを許可する
    1. 作成したKey Vaultの画面を開き、左側タブからAccess policiesを選択
    2. Add Access Policyを押す
    3. Configure from template (optional)は空のまま
    4. Secret permissionsでGetのみにチェックを入れる
    5. Select principalで、Function App名で検索して出てきたものを選んでSelectボタンを押す
    6. Addボタンを押して保存
4. Function AppのConfigurationで環境変数を追加
    1. 作成したFunction Appの画面を開き、左側タブからConfigurationを選択
    2. Application settingsのタブで、New application settingを押す
    3. Nameには"FIREBASE_SERVICE_ACCOUNT"を、Valueには"@Microsoft.KeyVault(SecretUri=先ほど控えておいたSecretIdentifierのURL)"を入力してOKを押す
        - Valueの例： `@Microsoft.KeyVault(SecretUri=https://yourvaultname.vault.azure.net/secrets/FirebaseServiceAccount/ffffffffffffffffffffffffffffffff)`
5. Function Appを再起動（再起動するまでKeyVaultを読み込めないことがあったため）
    1. 作成したFunction Appの画面を開き、画面上部にあるRestartを押す

## ローカル開発環境の構築手順

### 前提条件

1. Node.jsを実行する環境が構築できていること（Azure Functions Core Toolsを動かすために必要）
2. Java 11を実行する環境が構築できていること（このAzure FunctionsがJava 11で実装されているため）

### 環境変数の設定

開発環境上でAzure Functionsをテスト実行せず、デプロイのみを行う場合は不要です。

1. Firebaseから取得したService Account Credentials FileをローカルPC上の適切な場所に置く
2. GOOGLE_APPLICATION_CREDENTIALS環境変数に、Service Account Credentials FileのPathを設定する

### 開発環境構築

1. Visual Studio Codeをインストール
2. Visual Studio Codeを起動し、ExtensionsからAzure Functionsのプラグインをインストール
3. Azure Functions Core Toolsをインストール（ローカルPC上でAzure Functionsをテスト実行する場合のみ必要）

    ```bash
    npm install -g azure-functions-core-tools
    ```

### ローカル環境でのテスト実行

1. F5キーを押す、またはメニューの「Run」＞「Start Debugging」を選択
2. localhost:7071でサービスが起動されるので、curl等を用いてアクセスを行う

## ローカル開発環境からAzure Functionsへのデプロイ手順

1. ローカル環境でのテストを実行中の場合は、Disconnectを選択して終了しておく（PauseではなくDisconnect）
2. Visual Studio CodeのサイドバーからAzureのタブを選択
3. Deploy to Function Appのボタンを押す
4. Azureのサインインが完了していない状態であれば、ブラウザでログイン画面が開くのでサインインする
5. Azure上に作成してあるFunction App名を選択してデプロイを実行
