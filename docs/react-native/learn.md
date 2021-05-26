---
title: About
hide_table_of_contents: true
---

このコンテンツはReact Nativeでのモバイルアプリケーション開発を学習するためのコンテンツです。

ReactでWebアプリケーションを実装できるがReact Nativeでモバイルアプリケーションを実装したことがないアプリケーション開発者を対象として、次のことについて学ぶことを目的としています。

- ReactとReact Nativeの違い
- React Nativeで作成したモバイルアプリケーションの動作確認方法

また、作成したモバイルアプリケーションの配布方法やテスト手法についてはこのコンテンツでは触れません。

<!-- textlint-disable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->

import {PageList} from '../../src/components';
const overviews = [
  {
    title: 'Getting Started',
    to: '/react-native/learn/getting-started',
    summary: <>React Nativeでのアプリ開発に必要な環境を用意します。</>
  },
  {
    title: 'アプリの実装前に',
    to: '/react-native/learn/basic-concepts',
    summary: <>React Nativeでアプリを実装し始める前に最低限必要となる前提知識や、React NativeとReact Navigationの基本的な知識について学びます。</>
  },
  {
    title: 'ToDoアプリの実装',
    to: '/react-native/learn/todo-app',
    summary: <>React Nativeで簡単なToDoアプリを実装します。</>
  },
]

<PageList overviews={overviews} colSize={12} />

<!-- textlint-enable ja-technical-writing/sentence-length,ja-technical-writing/max-comma,ja-spacing/ja-no-space-around-parentheses,jtf-style/3.3.かっこ類と隣接する文字の間のスペースの有無,ja-technical-writing/ja-no-mixed-period,ja-technical-writing/no-unmatched-pair -->
