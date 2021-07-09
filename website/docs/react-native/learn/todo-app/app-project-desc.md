---
title: ToDoアプリプロジェクトの説明
---

## ToDoアプリプロジェクトの準備

[プロジェクトの作成](../getting-started/create-project.md)で作成したReact Nativeプロジェクトを使ってToDoアプリを実装していきます。

## `src`ディレクトリ構成の説明

最終的に出来上がるToDoアプリの`src`ディレクトリ構成は次の通りです。

```console
todo_app
└─src
   ├─@types
   ├─assets
   ├─backend
   ├─components
   │  ├─basics
   │  └─parts
   ├─contexts
   ├─navigation
   ├─screens
   └─services
```

- @types: 型定義（`.d.ts`）ファイル
- assets: アプリにバンドルする画像やその他のファイル
- backend: バックエンドのREST APIにアクセスする共通のクライアント部品
- components/basics: 汎用性のあるコンポーネント
- components/parts: アプリ機能に特化したコンポーネント
- contexts: コンテクスト
- navigation: ナビゲーション定義
- screens: 画面
- services: 外部（APIや内部ストレージなど）と連携するサービスやビジネスロジック
