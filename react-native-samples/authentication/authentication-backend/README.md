authentication-backend
===========================

このアプリケーションは[Nablarchアプリケーションフレームワークを利用して作成したウェブExampleアプリケーション](https://github.com/nablarch/nablarch-example-web)をベースに作成しています。

## 実行手順

### 1.動作環境
実行環境に以下のソフトウェアがインストールされている事を前提とします。
* Java Version : 8
* Maven 3.0.5以降

以下は、本手順では事前準備不要です。

|ソフトウェア|説明|
|:---|:---|
|APサーバ|このアプリケーションはTomcat8を使用しています。waitt-maven-pluginはTomcat8へのアプリケーションのデプロイ、起動を行います。（起動前にエンティティクラスの作成とアプリケーションのコンパイルを別途行う必要があります。）|
|DBサーバ|このアプリケーションはH2 Database Engine(以下H2)を組み込んであるため、別途インストールの必要はありません。|

### 2. アプリケーションのビルド

アプリケーションをビルドします。以下のコマンドを実行してください。

    $mvn compile
    
実行に成功すると、以下のようなログがコンソールに出力されます。

    (中略)
    [INFO] ------------------------------------------------------------------------
    [INFO] BUILD SUCCESS
    [INFO] ------------------------------------------------------------------------
    (中略)


### 3. アプリケーションの起動
最後にwaitt-maven-pluginを実行し、組み込みTomcatを起動させます。以下のコマンドを実行してください。

    $mvn waitt:run

起動に成功すると、自動的にアプリケーションのログイン画面が表示されます。
データベースのテーブルや初期データは、アプリケーション起動時にFlywayによって構築されます。
以下のログインID、パスワードでログインできます。

| ログインID | パスワード |
|:------|:--------|
| 10000001 | pass123-|

### 4. DBの確認方法

1. http://www.h2database.com/html/cheatSheet.html からH2をインストールしてください。

2. {インストールフォルダ}/bin/h2.bat を実行してください(コマンドプロンプトが開く)。  
  ※h2.bat実行中はExampleアプリケーションからDBへアクセスすることができないため、Exampleアプリケーションを停止しておいてください。

3. ブラウザから http://localhost:8082 を開き、以下の情報でH2コンソールにログインしてください。
   JDBC URLの{dbファイルのパス}には、`nablarch_example.mv.db`ファイルの格納ディレクトリまでのパスを指定してください。  
  JDBC URL：jdbc:h2:{dbファイルのパス}/nablarch_example  
  ユーザ名：NABLARCH_EXAMPLE  
  パスワード：NABLARCH_EXAMPLE

## コンテナイメージをAzure Container RegistryにPush

以下のコマンドを実行することで、Azure Container RegistryにコンテナイメージをPushできます。

```bash
az login
```

```bash
az acr login --name [acr名]
```

```bash
mvn clean package jib:build
```
