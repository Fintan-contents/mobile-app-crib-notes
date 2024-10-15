# React Nativeの学習

Reactを利用したWebアプリの開発経験者がReact Nativeを利用したモバイルアプリケーション開発を学習するための[React Nativeの学習用コンテンツ](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn)を公開しています。

モバイルアプリケーションを開発しようとするとき、Reactの経験が多い組織やチームであれば、React Nativeを採用して学習コストを抑えてすぐに開発できることが期待できます。アプリの実装はReactに近いので学習コストは低くなりますが、ReactでのWebアプリの開発とは異なるポイントがあります。

- React Nativeでのアプリ開発環境はどうやって構築すればよいか
- 開発中のアプリをどうやって動作確認するのか
- ReactでWebアプリを実装する場合と比べて大きな違いはあるか

React Nativeを利用した開発経験が浅い方向けに、実際にアプリを作成して学習できるコンテンツとなっています。

## コンテンツで学習できる内容

公開しているコンテンツでは、次のことが学習できます。

- [開発環境の構築とアプリの実行](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/getting-started)

    React Nativeでのアプリ開発に必要な環境を用意し、アプリの実行方法と仕組みを学習します。

- [アプリの実装前に](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/basic-concepts)

    アプリを実装する前にReact NativeやExpo、React Navigationの基本を学習します。

- [ToDoアプリの実装](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/todo-app)

    題材として「ToDoアプリ」というシンプルなアプリを作成することをテーマに手を動かしながら学習します。

- [Q&Aアプリの実装](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app)

    ToDoアプリの実装が完了した方向けのコンテンツです。ここでは、「Q&Aアプリ」を題材としてより実践的なアプリを作成します。

React Nativeを利用して開発を進める中で挙がったFAQ（[トラブルシューティング](https://ws-4020.github.io/mobile-app-crib-notes/react-native/common-pitfalls)）を紹介しています。もし学習を進める中で困ったこと（アプリ起動時のエラー等）があれば参考にしてみてください。

## 前提と学習に必要な期間

このコンテンツは、ReactでのWebアプリ開発の知識があることを前提としています。Reactでの開発経験がない方は、まず[SPA + REST API構成のサービス開発リファレンス](https://fintan.jp/?p=5952)に含まれるハンズオンコンテンツから学習を始めてみてください。

このコンテンツを学習するのに必要な期間はReact Nativeを利用した開発経験の有無で変わってきます。ToDoアプリの実装までを終えるのに未経験の方で2～3日程度必要となります。

---

## 更新履歴

### 2024/10/15

#### 🌿 更新コンテンツ（2024/10/15）

- Node.jsのインストールコマンドを更新
  - Getting Started
    - [開発環境の構築](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/getting-started/setting-up-development-environment)
- React Native Elementsを使用する場合に表示されるエラーに関して注意書きを追加
  - Getting Started
    - [アプリの実行](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/getting-started/launch-created-app)
- `@expo/vector-icons`でのアイコン名変更を反映
  - アプリの実装前に
    - React Navigationの基本
      - [Tab](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/basic-concepts/react-navigation-basics/tab)
    - ToDoアプリの実装
      - 画面の実装
        - [Tabナビゲーション](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/todo-app/screens/tab)
        - [Modalスクリーン](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/todo-app/screens/modal)

### 2023/12/25

#### 🌱 新規コンテンツ（2023/12/25）

- React NativeとExpoの概要を学習するコンテンツを追加
  - アプリの実装前に
    - [React Nativeとは](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/basic-concepts/what-is-react-native)
    - [Expoとは](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/basic-concepts/what-is-expo)
- Q&Aアプリの実装前に学習するコンテンツを追加
  - Q&Aアプリの実装
    - Q&Aアプリの実装前に
      - [概要](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/pre-app-implementation)
      - [実装方法の検討について](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/about-implementation-selection)
      - [コンポーネントの分割について](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/about-component-units)
- Q&Aアプリの単体テストに関するコンテンツを追加
  - Q&Aアプリの実装
    - Q&Aアプリの実装（基本編）
      - 一覧画面（ホーム画面）
        - [単体テストの実施](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-home-test-case)
      - イベント一覧画面
        - [単体テストの実施](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-list-event-test-case)
      - 質問詳細画面
        - [単体テストの実施](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-detail-question-test-case)
      - イベント詳細画面
        - [単体テストの実施](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-detail-event-test-case)
      - 入力画面
        - [単体テストの実施](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-input-test-case)
- キャッシュが残ってファイルが更新できない場合の対処方法を追加
  - トラブルシューティング
    - アプリを実行できない
      - [キャッシュが残ってファイルの更新ができない](https://ws-4020.github.io/mobile-app-crib-notes/react-native/common-pitfalls/clear-cache)

#### 🌿 更新コンテンツ（2023/12/25）

- Reactの公式ドキュメントを参照している箇所は、[新しい公式ドキュメント](https://ja.react.dev/)を参照するように変更
- 前提知識に、React Nativeで使用する技術の概要を追加
  - [前提知識](https://ws-4020.github.io/mobile-app-crib-notes/react-native/pre-requisites)
- Visual Studio Code用の推奨設定を追加
  - Getting Started
    - [プロジェクトの作成](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/getting-started/create-project)
- Q&Aアプリで使用するTanStack Query（旧React Query）をv4にアップグレード
  - Q&Aアプリの実装
    - [Q&Aアプリプロジェクトの説明](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/app-project-desc)
- TanStack Query（旧React Query）の使用方法に関する参考サイトを追加
  - Q&Aアプリの実装
    - [Q&Aアプリプロジェクトの説明](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/app-project-desc)
- TanStack Query（旧React Query）導入時の注意点を追加
  - Q&Aアプリの実装
    - [Q&Aアプリプロジェクトの説明](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/app-project-desc)
- コンポーネント作成時の注意点を追加
  - Q&Aアプリの実装
    - Q&Aアプリの実装（基本編）
      - 一覧画面（ホーム画面）
        - [表示部品の作成](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app/exercise-basic-home-components)

### 2022/12/12

#### 🌱 新規コンテンツ（2022/12/12）

- より実践的な学習コンテンツを追加
  - [Q&Aアプリの実装](https://ws-4020.github.io/mobile-app-crib-notes/react-native/learn/qa-app)
