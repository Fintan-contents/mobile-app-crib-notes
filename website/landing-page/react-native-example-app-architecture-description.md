# React Nativeのサンプルアプリケーション

## はじめに

モバイルアプリの開発は短期間での開発が要求される傾向にあります。そのため、技術選定や方式設計など、開発準備を十分に行う時間を確保できないことが多いと感じています。

そこで、React Nativeアプリの開発をスムーズに進行できるよう、アプリ開発現場で役立つ次のコンテンツを公開しています。

[React Nativeのサンプルアプリケーション \| Fintan » Mobile App Development](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku)

コンテンツの主な内容は以下のとおりです。これらは実際の開発プロセスに沿った形で作成しており、アプリ開発現場で役立つドキュメント類および、[ソースコード](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp)となっています。コンテンツは今後も継続的にアップデートし、内容を充実させていく予定です。

- 要件定義
- 方式設計
- テスト計画
- 外部設計
- 開発ガイド
- メンテナンス

また、アプリ開発現場でこのサンプルアプリケーションをより有効に活用してもらうため、方式設計などについては検討過程も「[Decision Records](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions)」として公開しています。

なお、このサンプルアプリケーションでは開発手法にウォーターフォールモデルを採用しています。その理由は以下のとおりです。

- 主要な読者として想定しているウォーターフォールモデルに慣れている開発者にとっては、公開するサンプルがウォーターフォールモデルで作成する成果物と一致していた方が理解しやすい
- ウォーターフォールモデルに沿って各工程ごとの成果物を一通り作成し、その後に各成果物の効果を振り返ることで、モバイルアプリの開発を成功させるために最低限必要な成果物を見極めたい

---

## 注意事項

公開しているコンテンツを、予告なく修正・更新・削除する可能性があります。ご了承ください。

---

## 更新履歴

### 2024/10/15

#### 🌱 新規コンテンツ（2024/10/15）

- Expoアップグレード
  - メンテナンス
    - [Expo SDK 50アップグレード](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/expo-50-upgrade)
    - [Expo SDK 51アップグレード](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/expo-51-upgrade)

### 2023/12/25

#### 🌱 新規コンテンツ（2023/12/25）

- サードパーティライブラリの導入
  - アプリケーション方式
    - [サードパーティライブラリの導入](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/third-party-libraries/overview)

#### 🌿 更新コンテンツ（2023/12/25）

- TanStack Query（旧React Query）をv4にアップグレード
  - アプリケーション方式
    - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/overview)
    - [TanStack Queryを用いたHTTP API通信](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/http-api-tanstack-query)
  - 開発ガイド
    - 実装
      - [HTTP APIの呼び出し](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/http-api)
      - スタイルガイド
        - [コーディングに関する命名規約](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/naming-conversion)
- Reactコンポーネントで発生した未処理のエラーがFirebase Crashlyticsに送信されない問題の対応
  - アプリケーション方式
    - [エラーの発生箇所と処理方法](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/error-handling/how-to-handle-error)

### 2023/09/29

#### 🌱 新規コンテンツ（2023/09/29）

- スタイルガイド
  - アプリケーション方式
    - [アプリケーション構造](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/application-structure/overview)（サンプルアプリケーションの[README](https://github.com/ws-4020/mobile-app-crib-notes/blob/master/example-app/SantokuApp/README.md)から移動）
  - 開発ガイド
    - 実装
      - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/overview)
      - [ESLint](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/eslint)
      - [TypeScript](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/typescript)
      - [EditorConfig](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/editorconfig)
      - [Prettier](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/prettier)
      - [静的解析ツールの運用](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/lint-ops)
      - [TypeScriptコーディング規約](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/typescript-style-guide)
      - [コーディングに関する命名規約](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/style-guide/naming-conversion)
- ディープリンク
  - アプリケーション方式
    - [Universal Links](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/universal-links)
    - [Android App Links](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/android-app-links)
  - 外部設計
    - [ディープリンク](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/demo/deep-link/overview)
  - Decision Records
    - [ディープリンクの実現方式](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-018-deep-link)
    - ディープリンク受信時の画面遷移
      - [本文](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-019-deep-link-navigation)
      - [React Navigationのlinkingを使用した画面遷移の検討](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/linking-feasibility)
      - [React Navigationのlinkingを使用しない画面遷移の検討](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/non-linking-feasibility)
- Expoアップグレード
  - メンテナンス
    - [Expo SDK 49アップグレード](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/expo-49-upgrade)
- expo-dev-clientの導入
  - 開発ガイド
    - 開発環境
      - [実機での開発ビルドの使用設定](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-development-build-on-real-device)

#### 🌿 更新コンテンツ（2023/09/29）

- ディープリンク
  - アプリケーション方式
    - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/overview)
    - [ディープリンクの処理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/deep-link/process-deep-link)
    - [アプリ起動後の初期化処理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/life-cycle-management/initialization)
  - Decision Records
    - [ディープリンクの実現方式（廃止）](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-004-deep-link)
- expo-dev-clientの導入
  - 開発ガイド
    - 開発環境
      - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment)
      - [基本的なセットアップ](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/basic-setup)
      - [Firebaseの機能を利用する](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/use-firebase)
      - [Androidアプリの配布用ビルドの設定](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-android-distribution-build)
      - [iOSアプリの配布用ビルドの設定](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-distribution-build)
    - 実装
      - [Firebaseの機能を利用する際の注意点](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/cautions-on-using-firebase)
    - ビルド
      - [環境の切り替え](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/environments-configuration)
      - [Config Pluginsの適用](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/apply-plugins)
      - [ビルドタイプ](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/build-type)
      - [Firebaseの設定ファイル](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/firebase-setting-file)
      - [環境やビルドタイプに応じたアプリ起動](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/app-launch-per-build-settings)

### 2023/06/30

#### 🌱 新規コンテンツ（2023/06/30）

- アプリのアップデート
  - アプリケーション方式
    - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/app-updates/overview)
    - [強制アプリアップデート](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/app-updates/forced-app-updates)
  - Decision Records
    - [強制アプリアップデート](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-016-forced-app-updates)
- Expoアップグレード
  - メンテナンス
    - [Expo SDK 47アップグレード](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/expo-47-upgrade)
    - [Expo SDK 48アップグレード](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/expo-48-upgrade)
- QRコード
  - 外部設計
    - [QRコード](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/demo/qrcode/overview)
- バーコード
  - 外部設計
    - [バーコード](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/demo/barcode/overview)
- 地図表示
  - 外部設計
    - [地図表示](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/demo/map/overview)
  - Decision Records
    - [地図表示ライブラリ](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-017-map-view-library)

#### 🌿 更新コンテンツ（2023/06/30）

- プッシュ通知
  - 外部設計
    - [プッシュ通知](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/demo/push-notification/overview)

### 2023/03/31

#### 🌱 新規コンテンツ（2023/03/31）

- Config Plugins対応
  - メンテナンス
    - [Config Plugins対応](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/config-plugins)
  - 開発ガイド
    - ビルド
      - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration)
      - [環境の切り替え](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/environments-configuration)
      - [Config Pluginsについて](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/about-plugins)
      - [Config Pluginsの適用](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/apply-plugins)
      - [ビルドタイプ](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/build-type)
      - [アプリ特有の設定値](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/app-constants)
      - [開発者アカウントの使用（iOS）](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/development-account-for-ios)
      - [Firebaseの設定ファイル](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/firebase-setting-file)
      - [ネイティブプロジェクトの管理](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/native-project-management)
      - [環境やビルドタイプに応じたアプリ起動](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/build-configuration/app-launch-per-build-settings)

- QA専門ベンダーとの協業
  - テスト計画
    - [QA専門ベンダーとの協業](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/collaboration-with-qa-vendors)

#### 🌿 更新コンテンツ（2023/03/31）

- Config Plugins対応
  - アプリケーション方式
    - [システム構成](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/system-configuration/overview)
  - 開発ガイド
    - 開発環境
      - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment)
      - [基本的なセットアップ](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/basic-setup)
      - [USB接続でiOS端末にインストール](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-run-on-device)
      - [USB接続でiOS端末にインストール（Appの高度な機能）](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-advanced-run-on-device)
      - [Firebaseの機能を利用する](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/use-firebase)
      - [Androidアプリの配布用ビルドの設定](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-android-distribution-build)
      - [iOSアプリの配布用ビルドの設定](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/development-environment/setting-up-ios-distribution-build)
    - 実装
      - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement)
      - [ログの利用](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/logs-implementation)
      - [Firebaseの機能を利用する際の注意点](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/cautions-on-using-firebase)
  - テスト計画
    - [単体テスト計画](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/test-planning/ut-planning)

### 2022/12/15

#### 🌱 新規コンテンツ（2022/12/15）

- プッシュ通知
  - 外部設計
    - [プッシュ通知](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/design/demo/push-notification/overview)
  - Decision Records
    - [Androidのヘッドアップ通知](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-015-android-head-up-notification)
- Expoアップグレード
  - メンテナンス
    - [Expo SDK 46アップグレード](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/maintenance/enhance/expo-46-upgrade)
- UIライブラリの選定
  - Decision Records
    - [UIライブラリの選定](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-014-ui-libraries)
- アプリケーション構造
  - README
    - [アプリケーション構造](https://github.com/ws-4020/mobile-app-crib-notes/tree/master/example-app/SantokuApp#アプリケーション構造)

#### 🌿 更新コンテンツ（2022/12/15）

- ドキュメントの全般見直し
  - ドキュメント全般
    - [React Nativeのサンプルアプリケーション](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku)

### 2022/03/31

#### 🌱 新規コンテンツ（2022/03/31）

- HTTP API通信
  - アプリケーション方式
    - [HTTP API通信](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/overview)
    - [React Queryを用いたHTTP API通信](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/application-architecture/http-api/http-api-react-query)
  - Decision Records
    - [HTTP API通信に関する方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-012-http-api)
    - [React Queryを用いた開発方針](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/decisions/adr-013-react-query)
  - 開発ガイド
    - [HTTP APIの呼び出し](https://ws-4020.github.io/mobile-app-crib-notes/react-native/santoku/development/implement/http-api)

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
