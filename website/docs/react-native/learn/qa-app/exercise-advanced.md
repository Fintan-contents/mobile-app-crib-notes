---
title: Q&Aアプリの実装（応用編）
sidebar_label: Q&Aアプリの実装（応用編）
---

Q&Aアプリの実装（基本編）で作成したアプリに対して、以下の変更を加えてください。

実現するために必要であれば、ライブラリを選定して導入してください。

## スクロール時に特定の行を画面の上端に固定表示

- 一覧画面（ホーム画面）で上スクロールしたときに、質問ラベル行が画面上部で固定され、上スクロールしても表示し続けられるようにしてください。

![ホーム画面-スクロール例](screen-home-scroll.png)

## ボタン押下時のアニメーション追加

- 質問詳細画面のいいねボタンを押下したときに、いいねボタンのアイコンが弾む（アイコンが拡大された後に元のサイズに戻る）アニメーションを追加してください。
- 上記の動き意外にも、回転や伸縮など色々なアニメーションを試してみてください。

## ジェスチャー操作追加

- 入力画面のイベントと質問のタブの切り替えについて、左右のスワイプで切り替えられるようにしてください。

## 無限スクロール

- 一覧画面（ホーム画面）またはイベント一覧画面について、無限スクロールとなるようにしてください。無限スクロールを実現するためには、APIのIFに必要な項目を追加する必要があります。[FlatListを用いて無限スクロールを実現する](/react-native/santoku/development/implement/http-api#flatlist%E3%82%92%E7%94%A8%E3%81%84%E3%81%A6%E7%84%A1%E9%99%90%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%99%E3%82%8B)を参考に、どのような変更を加えれば実現可能か考え、実装してください。

## 表示部品のテストの追加

- [自動テスト](/react-native/santoku/test-planning/ut-planning#%E8%87%AA%E5%8B%95%E3%83%86%E3%82%B9%E3%83%88)と[SantokuApp](https://github.com/{@inject:organization}/mobile-app-crib-notes/tree/master/example-app/SantokuApp)の`src/bases/ui/button/Button.test.tsx`を参考に、作成したどれか1つの表示部品について自動テストを実装してください。

## アプリアイコンの設定

- アプリアイコンとして任意の画像を用意し、iOS/Androidのホーム画面でQ&Aアプリのアプリアイコンが表示されるようにしてください。

## アプリ起動時の初期化処理の追加

[アプリ起動後の初期化処理](/react-native/santoku/application-architecture/life-cycle-management/initialization)とSantokuAppの`src/apps/app/use-cases/useAppInitialize.ts`を参考に、アプリ起動時の初期化処理を追加します。

- アプリ起動時にスプラッシュ画面が表示されるようにしてください。スプラッシュ画面のデザインは問いません。
- アプリ起動時にバージョンチェックを行い、動作保証バージョンに満たない場合は強制バージョンアップを促すダイアログ表示とアプリストアを開くようにしてください。
  - バージョンチェックはアプリ更新情報の取得API（/system/app-updates/{type}/{version}）を使用します。APIの仕様は[openapi.yaml](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/api-document/openapi.yaml)を参照してください。

## WebView表示

- 利用規約同意画面を追加し、外部サイトの利用規約をWebViewで開くようにしてください。

## ログイン/ログアウトの追加

[認証方式](/react-native/santoku/application-architecture/auth/overview)を参考に、ログイン/ログアウトを実装します。SantokuAppから`src/features/account`配下をコピーしてください。

- ログイン画面を追加してください。
- サインアップ、ログイン、ログアウトの処理を実装してください。

## エラーハンドリングの追加

[エラーハンドリング](/react-native/santoku/application-architecture/error-handling/overview)を参考に、エラーハンドリングを追加します。SantokuAppから`src/apps/app/errors`配下をコピーしてください。

- アプリケーションエラー発生時にエラーページを表示するようにしてください。
- APIエラー発生時にエラーダイアログを表示するようにしてください。

## テーマの追加

SantokuAppの`src/bases/ui/theme`を参考に、テーマを追加します。

- テーマを作成し、テーマを使用してカラーの設定をするようにしてください。
- OSの設定でダークモードにした際、アプリの表示がダークカラーで表示されるようにしてください。
- OSの設定でダークモードにしても、アプリの表示がモード変更前と同様のカラーで表示されるようにしてください。

## オンボーディング画面の追加

- アプリ初回起動時に当アプリを説明する簡単なオンボーディング画面が表示されるようにしてください。

## 入力画面でマークダウン書式での入力の追加

- 入力画面で、マークダウン書式での入力が可能なようにしてください。
