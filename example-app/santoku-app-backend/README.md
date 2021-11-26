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
