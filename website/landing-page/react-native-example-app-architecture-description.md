# React Nativeのサンプルアプリケーション

## はじめに

モバイルアプリの開発は短期間での開発が要求される傾向にあります。そのため、技術選定や方式設計など、開発準備を十分に行う時間を確保できないことが多いと感じています。

そこで、React Nativeアプリの開発をスムーズに進行できるよう、時間割共有アプリを題材とした次のコンテンツを公開しています。

[React Nativeのサンプルアプリケーション \| Fintan » Mobile App Development](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku)

コンテンツの内容は以下のとおりです。実際の開発プロセスに沿った形で作成しており、アプリ開発現場で役立つドキュメント類および、[ソースコード](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp)となっています。

- 要件定義
- 方式設計
- テスト計画
- 外部設計
- 開発ガイド
- Decision Records[^1]

今後も継続的にアップデートし、内容を充実させていく予定です。

なお、サンプルアプリケーションの開発手法はウォーターフォールモデルを採用しています。その理由は以下のとおりです。

- 主要な読者として想定しているウォーターフォールモデルに慣れている開発者にとっては、公開するサンプルがウォーターフォールモデルで作成する成果物と一致していた方が理解しやすい
- ウォーターフォールモデルに沿って各工程ごとの成果物を一通り作成し、その後に各成果物の効果を振り返ることで、モバイルアプリの開発を成功させるために最低限必要な成果物を見極めたい

---

## 注意事項

公開しているコンテンツを、予告なく修正・更新・削除する可能性があります。ご了承ください。

---

## 更新履歴

### 2021/12/22

#### 🌱 新規コンテンツ（2021/12/22）

- 要件定義
  - [機能要件](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/requirements/functional/overview)
  - [非機能要件](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/requirements/non-functional/overview)
- テスト計画
  - [全体テスト計画](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/test-all-planning)
  - [テスト観点](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/test-point/overview)
  - [テスト端末バリエーション](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/test-variation)
- 外部設計
  - 画面
    - [画面一覧](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/screen-list/overview)
    - [画面遷移図](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/screen-transitions/overview)
    - [画面仕様](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/screen-specs/overview)
  - [メッセージ一覧](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/message-list/overview)
  - [コンテキスト設計](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/context/overview)

### 2021/11/24

#### 🌱 新規コンテンツ（2021/11/24）

- 環境切り替え
  - 開発ガイド
    - [Firebaseの機能を利用する](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/use-firebase)
    - [ビルドバリアントごとのアプリ起動](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/app-launch-with-build-variants)
    - [Firebaseの機能を利用する際の注意点](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/cautions-on-using-firebase)
    - [環境設定値の管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/configurations)
- メッセージ管理
  - アプリケーション方式
    - [メッセージ管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/message-configuration/overview)
  - 開発ガイド
    - [メッセージの管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/design/message-configuration)
    - [メッセージの定義と取得](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/message-configuration)
  - Decision Records
    - [メッセージ管理の方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-005-message)
- ログ出力
  - アプリケーション方式
    - [アプリのログ出力](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/logging-app/overview)
  - 開発ガイド
    - [ログの利用](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/logs-implementation)
  - Decision Records
    - [ログ出力の方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-006-logging)

#### 🌿 更新コンテンツ（2021/11/24）

  - アプリケーション方式
    - [アプリ起動後の初期化処理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization)

[^1]: このアプリのアーキテクチャや機能設計に関する判断の記録です。実際に方式を設計する際に、このサンプルアプリケーションをより有効に活用できるよう、設計した方式だけでなく検討過程も記録しています。
