# React Nativeのサンプルアプリケーション

## はじめに

モバイルアプリの開発は短期間での開発が要求される傾向にあります。そのため、技術選定や方式設計など、開発準備を十分に行う時間を確保できないことが多いと感じています。

そこで、React Nativeアプリの開発をスムーズに進行できるよう、時間割共有アプリを題材とした次のコンテンツを公開しています。

[React Nativeのサンプルアプリケーション \| Fintan » Mobile App Development](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku)

コンテンツの主な内容は以下のとおりです。これらは実際の開発プロセスに沿った形で作成しており、アプリ開発現場で役立つドキュメント類および、[ソースコード](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp)となっています。コンテンツは今後も継続的にアップデートし、内容を充実させていく予定です。

- 要件定義
- 方式設計
- テスト計画
- 外部設計
- 開発ガイド

また、アプリ開発現場でこのサンプルアプリケーションをより有効に活用してもらうため、方式設計などについては検討過程も「[Decision Records](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions)」として公開しています。

なお、このサンプルアプリケーションでは開発手法にウォーターフォールモデルを採用しています。その理由は以下のとおりです。

- 主要な読者として想定しているウォーターフォールモデルに慣れている開発者にとっては、公開するサンプルがウォーターフォールモデルで作成する成果物と一致していた方が理解しやすい
- ウォーターフォールモデルに沿って各工程ごとの成果物を一通り作成し、その後に各成果物の効果を振り返ることで、モバイルアプリの開発を成功させるために最低限必要な成果物を見極めたい

---

## 注意事項

公開しているコンテンツを、予告なく修正・更新・削除する可能性があります。ご了承ください。

---

## 更新履歴

### 2022/02/17

#### 🌱 新規コンテンツ（2022/02/17）

- プッシュ通知
  - アプリケーション方式
    - [プッシュ通知](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/overview)
    - [登録トークンの登録・更新](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/register-token)
    - [登録トークンの削除](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/delete-token)
    - [プッシュ通知の送信](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/send-push-notification)
    - [プッシュ通知の受信](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/push-notification/receive-push-notification)
  - Decision Records
    - [プッシュ通知方式の方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-008-push-notification)
    - [FCMを用いたプッシュ通知方式の管理方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-009-push-notification-fcm)
    - [プッシュ通知の内容に関する方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-010-push-notification-contents)
- キャッシュ
  - アプリケーション方式
    - [キャッシュの取り扱い](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/cache-management/overview)
  - Decision Records
    - [キャッシュの取り扱いに関する方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-011-cache-management)

#### 🌿 更新コンテンツ（2022/02/17）

- アプリケーション方式
  - [アプリのライフサイクル管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/overview)

### 2022/01/12

#### 🌱 新規コンテンツ（2022/01/12）

- 認証
  - アプリケーション方式
    - [認証方式](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/overview)
    - [匿名サインアップ](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/signup)
    - [自動ログイン](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/login)
    - [ログアウト](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/logout)
    - [端末認証](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/local-auth)
    - [ログイン資格情報の管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/auth/credential-management)
  - Decision Records
    - [認証方式の方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-007-auth)
- 単体テスト
  - テスト計画
    - [単体テスト計画](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/ut-planning/)
  - 開発ガイド
    - [エミュレータ／シミュレータの作成](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/test/create-emulator-simulator/)

### 2021/12/22

#### 🌱 新規コンテンツ（2021/12/22）

- 要件定義
  - [機能要件](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/requirements/functional/overview)
  - [非機能要件](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/requirements/non-functional/overview)
- テスト計画
  - [全体テスト計画](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/test-all-planning)
  - [テスト観点](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/test-type/overview)
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
