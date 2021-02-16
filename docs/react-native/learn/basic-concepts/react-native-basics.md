---
title: React Nativeの基本
sidebar_label: Overview
hide_table_of_contents: true
---

React Nativeは、Facebookが作成したオープンソースのモバイルアプリケーションフレームワークです。
Reactとそれぞれのプラットフォームのネイティブ機能を使用して、Android、およびiOSアプリを構築します。
JavaScriptを用いてプラットフォームのAPIにアクセスし、Reactコンポーネントを用いてUIの外観と動作を記述します。

画面の描画には、ネイティブUI部品に対応する特別なコンポーネントを用います。
これらのコンポーネントをネイティブコンポーネントと呼びます。

次の表は、ネイティブコンポーネントとネイティブUI部品との対応を示しています。

|ネイティブ<br/>コンポーネント|Android|iOS|Web|
|---------------------------|------------|--------|----------|
|`<View>`|`<ViewGroup>`|`<UIView>`|スクロールしない`<div>`|
|`<Text>`|`<TextView>`|`<UITextView>`|`<p>`|
|`<Image>`|`<ImageView>`|`<UIImageView>`|`<img>`|
|`<ScrollView>`|`<ScrollView>`|`<UIScrollView>`|`<div>`|
|`<TextInput>`|`<EditText>`|`<UITextField>`|`<input type="text">`|

React Nativeには、すぐに使用できる多数のネイティブコンポーネントが初めから用意されています。
これらをコアコンポーネントと呼びます。
