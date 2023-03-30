# モバイルアプリ開発ノウハウ集

モバイルアプリケーションを開発する際に役立つノウハウ集です。

このドキュメントは[Docusaurus](https://v2.docusaurus.io/)で作成されています。

## 前提条件

- [Node.js](https://nodejs.org/ja/)をインストール済み

## インストール

```bash
npm ci
```

## ローカルで表示する

```bash
npm start
```

このコマンドは、ローカルの開発サーバを起動し、ブラウザウィンドウを開きます。ほとんどの変更は、サーバを再起動することなくライブで反映されます。

ローカルの開発サーバが起動しているポートは、起動時のログに次のように表示されています。ブラウザウィンドウが自動的に開かれない場合などは、表示されているURLにアクセスしてください。

```console
ℹ ｢wds｣: Project is running at http://localhost:3000/
ℹ ｢wds｣: webpack output is served from /mobile-app-crib-notes/
```

## ビルド

```bash
npm run build
```

このコマンドは静的コンテンツを `build` ディレクトリに生成します。

## ビルドされたものを表示する

`build`ディレクトリ内のファイルを`/mobile-app-crib-notes/`というコンテキストパスで表示します。Dockerでnginxを起動すると簡単です。

```bash
NGINX_PORT=3001 docker run -v $(pwd)/nginx:/etc/nginx/templates -v $(pwd)/build:/usr/share/nginx/html/mobile-app-crib-notes/ --rm -e NGINX_PORT -p 3001:3001 nginx
```

このコマンドを実行するnpm scriptを用意してあります。
次のコマンドを実行して`http://localhost:3001/mobile-app-crib-notes/`にアクセスすれば、ビルドされたHTMLファイルを表示できます。

```bash
npm run serve
```

## Lint

### 文章校正

[textlint](https://github.com/textlint/textlint)で文章を校正できます。

textlintを実行するには、`npm run lint:text`を実行してください。ルールに沿わない文章が警告として表示されます。

また、textlintを使って単純な誤りを自動的に修正できます。自動修正したい場合には`npm run fix:text`を実行してください。

### Markdownファイルの規約チェック

[markdownlint](https://github.com/DavidAnson/markdownlint)でMarkdownファイルの書き方が適切かどうかをチェックできます。

markdownlintを実行するには、`npm run lint:md`を実行してください。ルールに沿わない箇所が警告として表示されます。

また、markdownlintを使って単純な誤りを自動的に修正できます。自動修正したい場合には`npm run fix:md`を実行してください。

<!-- textlint-disable -->

## ライセンス

ドキュメントは、<a rel="license" href="https://fintan.jp/?page_id=201" target="_blank">Fintan コンテンツ 使用許諾条項</a>の下に提供されており、コードサンプルは<a rel="license" href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 License</a>の下に提供されています。

<!-- textlint-enable -->
