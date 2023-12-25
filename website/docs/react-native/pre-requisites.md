---
title: 前提知識
sidebar_label: 前提知識
---

React Nativeを用いてアプリを実装するには、JavaScript、TypeScript、Reactの知識が必要です。使用する技術の概要は以下のとおりです。

| 技術 | 説明 |
|--|--|
| JavaScript | ウェブアプリ開発に用いられるスクリプト言語です。 |
| TypeScript | JavaScriptに静的型付けを追加したプログラミング言語です。JavaScriptと上位互換性があり、静的型付けによりコード実行前にエラーを検出できます。その性質から、開発規模が大きくなるほどその効果を発揮します。 |
| React | コンポーネントベースのアプローチで、ウェブアプリ開発に用いられるJavaScriptライブラリです。 |
| React Native | Reactをベースにしたモバイルアプリのフレームワークです。 |
| OpenAPI Specification | APIの仕様を記述するための標準規格です。<br/> ※ ToDoアプリの[REST APIとの接続](./learn/todo-app/networking/setting-up-local-server.mdx)とQ&Aアプリの[HTTP API通信](./learn/qa-app/app-project-desc.md#http-api通信)時にOpenAPI Specificationの知識が必要となります。 |

ToDoアプリの実装例や解説を理解するために参考となるサイトを紹介します。
用語やコード例でわからないことがあるときは参照してください。

JavaScriptやReactの知識がない方はまず参考サイトで学習してからToDoアプリの実装を進めてください。

## 参考サイト

### JavaScript Primer

Reactを学ぶにはJavaScriptの言語知識が必須です。 JavaScriptを触れたことがない人は、まずはJavaScriptの知識習得からお願いします。

[JavaScript Primer](https://jsprimer.net/)は、JavaScriptの文法や機能を一から学べるサイトです。「第一部：基本文法」までの知識があれば、ひとまず充分です。[基本文法の目次](https://jsprimer.net/basic/)を見てわからないことがあれば学習してください。

### サバイバルTypeScript

[サバイバルTypeScript](https://book.yyts.org/)は、TypeScriptを最短ルートで実務利用できることを目指したサイトです。静的型付け言語での実装経験があれば、[ToDoアプリの実装](./learn/todo-app.md)は進められます。

実務レベルに必要な一通りの知識が必要な場合はサバイバルTypeScriptで学習しましょう。[読んで学ぶTypeScript](https://book.yyts.org/reference)の見出しをみて内容がイメージできれば大丈夫です。

### React公式サイト

Reactを学ぶには[React公式サイト](https://ja.react.dev/)が一番お勧めです。

Reactを利用したことがない人は「クイックスタート」からはじめてください。「LEARN REACT」の内容まで理解できていれば、最低限のReactの知識が身に付いています。わからない箇所があれば学習してください。

また、「APIリファレンス」に書かれている下記のフックは使用頻度が高いので、あらかじめ読んで理解しておくことをお勧めします。

- [クイックスタート](https://ja.react.dev/learn)
- [インストール](https://ja.react.dev/learn/installation)
- [LEARN REACT](https://ja.react.dev/learn/describing-the-ui)
- [APIリファレンス](https://ja.react.dev/reference)
  - [useCallback](https://ja.react.dev/reference/react/useCallback)
  - [useMemo](https://ja.react.dev/reference/react/useMemo)
  - [useEffect](https://ja.react.dev/reference/react/useEffect)
  - [useState](https://ja.react.dev/reference/react/useState)
  - [useRef](https://ja.react.dev/reference/react/useRef)
  - [useContext](https://ja.react.dev/reference/react/useContext)

### OpenAPI Specification

OpenAPI Specificationの詳細については[公式ドキュメント(英語版)](https://www.openapis.org/what-is-openapi)を参考してください。

#### OpenAPI Specificationの見方について

[Swagger Editor](https://editor.swagger.io/)を使用することでAPIのリクエスト、レスポンスなどの詳細を確認できます。
[API仕様](https://github.com/ws-4020/mobile-app-crib-notes/blob/master/example-app/api-document/openapi.yaml)の内容を[Swagger Editor](https://editor.swagger.io/)のエディターに貼るとプレビューにその内容が表示されます。

その他のSwagger機能については[What Is Swagger?](https://swagger.io/docs/specification/about/)を参照してください。
