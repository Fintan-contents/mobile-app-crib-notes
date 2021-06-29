---
id: plugins
title: Custom Plugin
---

このドキュメント内で利用しているPluginについて紹介します。

## redirect

[Fintan](https://fintan.jp)に公開した後で構成（markdownの名前やディレクトリ）を変更する場合は、リンク切れでユーザをがっかりさせないために`redirects`の設定を追加してください。

`@docusaurus/plugin-client-redirects`というプラグインを利用しているので`{from, to}`を設定して古いURLから移動できることを確認してください。

```json title="docusaurus.config.js"
     [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/auth/overview', // string | string[]
            to: '/reference/auth/overview', // string
          },
          {
            from: '/docs/notes-in-mobile-application-development', // string | string[]
            to: '/reference/security/awesome-sites', // string
          },//　後略
        ]
      },
      ]
```

## グローバル変数の利用

環境変数やサイト全体で共有したい値を埋め込みたいケースがあります。

JSXを利用することでコンポーネントから`siteConfig`などグローバルな変数を利用できます。
ただし、code-blockでは利用できなかったり、適したコンポーネントがない場合にコンポーネントを作成しないとJSXでは実現できません。

単純に埋め込むだけの場合は`{@inject: $key}`という構文でグローバル変数を埋め込むことが出来ます。次のような場合に利用します。

### ユースケース例

 - あるリポジトリのtagを参照するためのURLにtag名を含めるが、tagを一括で更新したい。
 - siteConfigの変数を埋め込みたい。

keyと値の設定は`docusaurus.config.js`にある`injectOptions`で設定します。

```json title="docusaurusu.config.js"
const injectOptions = {
  organization,
  rnSpoilerTag: '2021.05.0',
};
```

書き換えられるドキュメントはテキストか`a.href`属性です。他の属性などを書き換える場合は`injector.inject`を修正する必要があります。

:::note
URL（\[text\]\(url\)）の書き換えに利用する場合は`{@inject:key}`としてスペースを入れないでください。
:::

`key`がなければ置き換わらないため、`{@inject: invalid-key}`は置き換わりません。`organization`という`key`であれば（`{@inject:organization}`）置き換わります。

`key`は`Object[key]`と一致させるのでlowerCamelCaseで設定してください。

```javascript title="docusaurusu.config.js"
const injector = (options) => {
  const keys = Object.keys(options);
  const placeHolders = keys.map((key) => new RegExp('{@inject: *' + key + '}'));
  return inject;
  function inject(tree) {
    // 省略
    return tree;
  }

  function hasPlaceHolder(value) {
    return value && value.includes('{@inject:');
  }

  function replace(value) {
    return keys.reduce((replaced, key, index) => {
      return replaced.replace(placeHolders[index], options[key]);
    }, value);
  }
};
```
