# モバイルアプリ開発ノウハウ集

モバイルアプリケーションを開発する際に役立つノウハウ集です。

## ドキュメントの表示方法

本ドキュメントは[Hugo](https://gohugo.io/)を使っています。

### 前提条件
- [Hugo](https://gohugo.io/)をインストール済み

### 手順

- クローンしたリポジトリで`hugo serve`を実行
```
cd mobile-app-crib-notes
hugo serve
```
- ブラウザで[http://localhost:1313](http://localhost:1313)にアクセス


#### `hugo serve`でエラーが出る場合

本ドキュメントではHugoのテーマ[alex-shpak/hugo-book](https://github.com/alex-shpak/hugo-book)をサブモジュールとして使っていますが、それがうまくクローンできていない可能性があります。
リポジトリのフォルダで以下コマンドを実行してください。

```
git submodule update --init
```

`themes/book`配下に[alex-shpak/hugo-book](https://github.com/alex-shpak/hugo-book)のソースコードなどが格納されていれば成功です。

※これで解消されない場合は、リポジトリをクローンする時に`--recursive`オプションをつけてやり直してみてください。


<!-- textlint-disable -->

## ライセンス

ドキュメントは、<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</a>の下に提供されており、コードサンプルは<a rel="license" href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>の下に提供されています。

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
  <img alt="クリエイティブ・コモンズ・ライセンス" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /> </a>

<!-- textlint-enable -->
