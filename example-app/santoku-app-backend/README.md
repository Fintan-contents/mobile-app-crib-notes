# santoku-app-backend

## IDEの設定

このアプリケーションのソースコードは[Google Java Format](https://github.com/google/google-java-format)に従ってフォーマットされています。

各IDE向けのプラグインをインストールしてください。

### JetBrains IDEs

[google-java-format](https://plugins.jetbrains.com/plugin/8527-google-java-format/)をインストールして、有効にしてください。

また、`import`の順序を設定するために、[IntelliJ Java Google Style file](https://raw.githubusercontent.com/google/styleguide/gh-pages/intellij-java-google-style.xml)をダウンロードしてインポートしてください。

詳細な手順が必要な場合は、[公式のREADME](https://github.com/google/google-java-format#intellij-android-studio-and-other-jetbrains-ides)を参照してください。

## アプリを起動する

> ⚠️ 現在一時的にデータベースをPostgreSQLからH2に変更しています。
> それにより、Dockerで起動すべきミドルウェアは存在しないため、手順1はスキップしてください。

1. 必要なミドルウェアを`docker-compose`で起動します。

   ```bash
   docker compose up -d
   ```

   次のように`docker-compose ps`コマンドを実行して`State`が`Up`になっていれば起動成功です。

   ```
   NAME                             COMMAND                  SERVICE             STATUS              PORTS
   santoku-app-backend-postgres-1   "docker-entrypoint.s…"   postgres            restarting
   ```

   停止する場合は次のコマンドを実行してください。

   ```bash
   docker compose down
   ```

2. 必要なミドルウェアが起動したら、次のコマンドでアプリを起動できます。

   ```bash
   ./mvnw jetty:run
   ```
   例外が発生することなく次のようなログが出力されると起動成功です。

   ```
   [INFO] Started ServerConnector@6f9d1785{HTTP/1.1,[http/1.1]}{0.0.0.0:9080}
   [INFO] Started @9323ms
   [INFO] Started Jetty Server
   ```

## Dockerイメージのビルド

Dockerイメージは次のコマンドで作成します。Dockerイメージの名前はsantoku-app-backendになります。

```bash
./mvnw clean package jib:dockerBuild
```

ビルドしたイメージをローカルで起動するときは、Docker Composeで必要なミドルウェアを起動した上で、そのネットワークに参加させる必要があります。また、アプリから各ミドルウェアにアクセスするURLについても環境変数で設定する必要があります。

> ⚠️ 現在一時的にデータベースをPostgreSQLからH2に変更しています。
> それにより、Dockerで起動するミドルウェアは存在しないため、ネットワークの参加やミドルウェアにアクセスするURLの設定は必要ありません。

```bash
docker run -it --rm -p 9080:8080 --network santoku-app-network -e NABLARCH_DB_URL="jdbc:postgresql://postgres:5432/postgres" santoku-app-backend:latest
```

## Dockerイメージのプッシュ

Dockerイメージは次のコマンドでDockerレジストリにプッシュできます。Dockerイメージの名前はsantoku-app-backendになります。

```bash
./mvnw clean package jib:build
```

> **Note:** `pom.xml`の`jib.to.image`プロパティにプッシュ先のレジストリを設定し、`docker login`などのコマンドでレジストリにログインしている必要があります。
> 
> Azure Container Registryの例
> ```bash
> az login
> az acr login <registry name>
> ./mvnw clean package jib:build
> ```

## FCM（Firebase Cloud Messaging）への接続手順

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

### App Serviceへ環境変数を設定

1. App Serviceのシステム割り当てマネージドIDを有効化
    1. App Serviceの画面を開き、左側タブからIDを選択
    2. 状態をOnしてシステム割り当てマネージドIDを有効化
        - これによりApp ServiceがAzure Active Directoryに登録され、他サービスがこのリソースに対するアクセスを制御できる
2. App ServiceからKeyVaultへのアクセスを許可する
    1. 作成したKey Vaultの画面を開き、左側タブからAccess policiesを選択
    2. Add Access Policyを押す
    3. Configure from template (optional)は空のまま
    4. Secret permissionsでGetのみにチェックを入れる
    5. Select principalで、App Service名で検索して出てきたものを選んでSelectボタンを押す
    6. Addボタンを押して保存
3. App ServiceのConfigurationで環境変数を追加
    1. 作成したApp Serviceの画面を開き、左側タブからConfigurationを選択
    2. Application settingsのタブで、New application settingを押す
    3. Nameには"FIREBASE_SERVICE_ACCOUNT"を、Valueには"@Microsoft.KeyVault(SecretUri=先ほど控えておいたSecretIdentifierのURL)"を入力してOKを押す
        - Valueの例： `@Microsoft.KeyVault(SecretUri=https://yourvaultname.vault.azure.net/secrets/FirebaseServiceAccount/ffffffffffffffffffffffffffffffff)`
4. App Serviceを再起動（再起動するまでKeyVaultを読み込めないことがあったため）
    1. 作成したApp Serviceの画面を開き、画面上部にあるRestartを押す

## 静的解析

### Spotbugs

このアプリケーションは[Nablarchが提供しているJavaスタイルガイド](https://github.com/nablarch-development-standards/nablarch-style-guide/tree/2.0/java)を参考にして静的解析を組み込んでいます。

次のコマンドで、[SpotBugs](https://spotbugs.readthedocs.io/ja/latest/)による静的解析を実行できます。

```bash
./mvnw spotbugs:check
```

## ソースコードのフォーマット

[IDEの設定](#ideの設定)でも紹介している通り、このアプリケーションのソースコードは[Google Java Format](https://github.com/google/google-java-format)に従ってフォーマットされています。

IDEでフォーマットするだけでなく、Mavenから次のコマンドを実行することで全てのファイルをフォーマットすることができます。

```bash
./mvnw fmt:format
```

また、フォーマットされていないファイルが存在しないかどうかを、次のコマンドでチェックすることができます。

```bash
./mvnw fmt:check
```
