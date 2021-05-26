---
title: ToDoアプリの実装
sidebar_label: Overview
hide_table_of_contents: true
---

このハンズオンで作成するToDoアプリは[Webベースのハンズオン](https://fintan-contents.github.io/spa-restapi-handson/)と同じようなアプリケーションです。

ReactでのWebアプリケーションの経験がない、または前提となるレベルを確認したい方はWebベースのハンズオンを参照し、必要であれば学習してください。

<!-- textlint-disable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

import {PageList} from '../../../src/components';
const overviews = [
  {
    title: 'ToDoアプリの仕様',
    to: '/react-native/learn/todo-app/app-spec',
    summary: <>これから実装するToDoアプリの仕様を理解します。</>
  },
  {
    title: 'ToDoアプリプロジェクトの説明',
    to: '/react-native/learn/todo-app/app-project-desc',
    summary: <>ToDoアプリの開発に利用するReact Nativeプロジェクトのディレクトリ構成などについて学びます。</>
  },
  {
    title: '画面の実装',
    to: '/react-native/learn/todo-app/screens/welcome',
    summary: <>まずは、ToDoアプリの各画面と画面遷移を実装します。この時点ではバックエンドのREST APIは利用せず、データは固定値とします。</>
  },
  {
    title: 'REST APIとの接続',
    to: '/react-native/learn/todo-app/networking/setting-up-local-server',
    summary: <>ToDoアプリの各画面に表示するデータをREST APIから取得するように変更します。また、HTTP APIの呼び出しに関連して画面デザインを修正します。</>
  },
]

<PageList overviews={overviews} colSize={12} />

<!-- textlint-enable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->
