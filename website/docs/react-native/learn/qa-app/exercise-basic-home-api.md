---
title: 一覧画面（ホーム画面）のAPI呼び出し
sidebar_label: API呼び出し
hide_table_of_contents: true
---

画面表示に必要な情報をAPIで取得します。

[プロジェクトの設定](/react-native/learn/qa-app/app-project-desc#qa%E3%82%A2%E3%83%97%E3%83%AA%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E8%A8%AD%E5%AE%9A)が終わっていない場合は実施してください。

[MSWの設定](/react-native/learn/qa-app/app-project-desc#msw%E3%81%AE%E8%A8%AD%E5%AE%9A)で設定した通り、MSWを使用してモックデータを返却するようにしています。

API呼び出しの記述例はサンプルアプリのAPI呼び出し部分を参考にしてください。

（参考例）

[src/features/qa-question/pages/QuestionDetailPage.tsx](https://github.com/{@inject:organization}/mobile-app-crib-notes/tree/master/example-app/SantokuApp/src/features/qa-question/pages/QuestionDetailPage.tsx)

[src/features/qa-question/services/useQuestion.ts](https://github.com/{@inject:organization}/mobile-app-crib-notes/tree/master/example-app/SantokuApp/src/features/qa-question/services/useQuestion.ts)

[API仕様](https://github.com/{@inject:organization}/mobile-app-crib-notes/blob/master/example-app/api-document/openapi.yaml)を参照しながら以下のAPI呼び出しを追加し、ソースコードに直接値を記載していた箇所をAPIの戻り値を使用するように修正してください。

| API名 | 呼び出しタイミング | 補足 |
|--|--|--|
| イベント一覧取得 | 画面初期表示 | 掲載期間中のイベントのみ取得 |
| 質問一覧取得 | 画面初期表示<br />ソートボタン押下<br />タグボタン押下 | ソート・タグ選択時は条件を指定 |
| お知らせ一覧取得 | お知らせボタン押下 |  |
| タグ一覧取得 | タグボタン押下 |  |
