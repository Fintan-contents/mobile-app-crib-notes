---
title: 各サービスの初期設定
---

## リモート通知の開発に必要なアカウント

具体的な実装方法の話をする前に、まずはリモート通知の送信のために必要なファイルやアカウントを取得し、初期設定を済ませておきましょう。

### AppleのアプリID発行とPush Notificationの有効化

初めてiOSアプリを作成する場合などでまだアプリIDの発行が済んでいない場合は、以下の手順でAppleのアプリIDを発行しておきましょう。

1. [Apple Developer Member Center](https://developer.apple.com/membercenter/index.action)に、Apple Developer Programに登録したApple IDでログイン
2. 左側のメニューから「Certificates, IDs & Profiles」を選択
3. 左側のメニューから「Identifiers」内の「App IDs」を選択し、右上にある＋ボタンを押す
    - App IDを発行する権限がない場合は、メニューにApp IDsが表示されません。その場合は権限を持つユーザに作成を依頼してください
4. Name, Bundle IDを入力
5. App Servicesセクション内のPush Notificationにチェックを入れて保存

:::note
既存のアプリIDを利用する場合は、そのアプリIDの設定を開き、App ServiceセクションでPush Notificationが許可されているか確認しておきましょう。
:::

### APNs Auth Keyの発行

iOS端末にリモート通知を送信するためには、APNs Auth Keyと呼ばれる、APNsを利用するための鍵ファイルが必要になります。
APNs Auth Keyは、Apple Developer Programのアカウント内に最大2つまでしか作成できません。
既に発行済みのAPNs Auth Keyがあるかアカウント管理者の方に確認し、無ければ以下の手順でAPNs Auth Keyを発行してもらいましょう。

1. [Apple Developer Member Center](https://developer.apple.com/membercenter/index.action)に、Apple Developer Programに登録したApple IDでログイン
    - Apple Developer Programに登録していないApple IDではAPNs Auth Keyは発行できません。
2. 左側のメニューから「Certificates, IDs & Profiles」を選択
3. 左側のメニューから「Keys」内の「All」を選択し、右上にある＋ボタンを押す
    - APNs Auth Keyを発行する権限がない場合は、メニューにKeysが表示されません。その場合は権限を持つユーザに作成を依頼してください
4. 新規作成画面でKeyの名前を入力し、Key Servicesの中からAPNsにチェックを入れてContinueを押す
5. 確認画面の内容を確認してConfirmを押す
6. APNs Auth Keyが発行されてDownloadボタンが出てきますので、ボタンを押して。p8拡張子のファイルをダウンロードする
    - このファイルは後ほどFirebaseへ登録する際に使用します
7. APNs Auth Keyの画面でKey IDを控えておく

このAPNs Auth KeyのファイルをFirebaseに登録することで、Firebase経由でiOS端末にリモート通知が送れるようになります。

### Firebaseアカウントの作成と初期設定

Firebase Cloud Messagingを用いてリモート通知を送信するためには、Firebaseを利用するためのGoogleアカウントが必要です。
既にGoogleアカウントを持っている場合は、[Firebaseコンソール](https://console.firebase.google.com/)からログインするだけでFirebaseの利用を開始できます。
持っていない場合はログイン画面の下側にあるアカウント作成を選択し、画面の説明に従ってGoogleアカウントを作成しましょう。

Firebaseのコンソール画面にログインしたら、開発に利用するプロジェクトを1つ作成しましょう。

1. トップ画面にある「プロジェクトを作成」ボタンを押す
2. プロジェクト名を入力し、規約を確認した上で同意して「続行」ボタンを押す
3. Google Analyticsを有効にするかどうかを選択して「続行」ボタンを押す
4. Google Analyticsを有効にした場合は、地域・初期設定・規約への同意を入力して「プロジェクトを作成」ボタンを押す

プロジェクトを作成するとプロジェクトの画面に遷移します。
次は、iOSアプリとAndroidアプリを1つずつ登録してみましょう。

### Firebaseアプリの作成

Androidアプリを作成する手順は以下のとおりです。

1. プロジェクト画面にあるAndroidアプリ追加のボタンを押す
2. 以下の項目を入力
    - Androidパッケージ名
        - アプリのandroid/app/build.gradleファイル内に記載されているapplicationIdの値を入力してください
    - アプリのニックネーム（省略可）
        - Firebaseコンソール上での表示名です。自由に命名して構いません
    - デバッグ用の署名証明書SHA-1（省略可）
        - Firebase Dynamic Linksや、Firebase AuthenticationでGoogleログインや電話番号ログインを用いる場合に必要です
        - 後からでも設定できるので、一旦空のまま進めても問題ありません
3. 設定ファイルをダウンロード
    - 画面からgoogle-services.jsonというファイルをダウンロードしておきます
    - このファイルは後ほどAndroidアプリの開発時に使用します
4. Firebase SDKの追加手順、初期化コードの追加手順を確認
    - 詳細についてはこのガイドでも後述するため、この時点では軽く確認するだけで構いません

iOSアプリを作成する手順は以下のとおりです。

1. プロジェクト画面にあるiOSアプリ追加のボタンを押す
2. 以下の項目を入力
    - iOSバンドルID
        - iOSバンドルIDはXcodeでiOSプロジェクトを開き、プロジェクトナビゲータで最上位のアプリを選択してGeneralタブ内のBundle Identifierフィールドの値から確認できます
    - アプリのニックネーム（省略可）
        - Firebaseコンソール上での表示名です。自由に命名して構いません
    - Apple Store ID（省略可）
        - Firebase Dynamic LinksでユーザをApp Storeページにリダイレクトする場合などで必要です
        - 後からでも設定できるので、一旦空のまま進めても問題ありません
3. 設定ファイルをダウンロード
    - 画面からGoogleService-Info.plistというファイルをダウンロードしておきます
    - このファイルは後ほどiOSアプリの開発時に使用します
4. Firebase SDKの追加手順、初期化コードの追加手順を確認
    - 詳細についてはこのガイドでも後述するため、この時点では軽く確認するだけで構いません

### FirebaseにAPNs Auth Keyを登録

iOSアプリをFirebaseに登録すると、APNs Auth Keyを設定できるようになります。
これを設定しておかないとiOS端末へリモート通知を送信できないので、設定しておきましょう。

1. プロジェクト画面の左側メニュー内にある、設定ボタン（歯車のアイコン）を押し、「プロジェクトを設定」を選択
2. Cloud Messagingのタブを開く
3. iOSアプリの構成の欄で、設定したいiOSアプリを選ぶ
4. APNs認証キーの欄で、アップロードを選択
5. 参照ボタンを押し、事前にダウンロードしておいたAPNs Auth Keyのファイル（.p8拡張子のファイル）を選択
6. キーIDとチームIDを入力してアップロードボタンを押す
    - キーIDは[Apple Developer Member Center](https://developer.apple.com/account/resources/authkeys/list)のCertificates, Identifiers & Profiles内のKeysから対象のKeyを選択すると確認できます
    - チームIDは[Apple Developer Member Center](https://developer.apple.com/account/#/membership/)のMembershipの画面から確認できます

### Firebase Admin SDKの秘密鍵の生成

最後に、バックエンドサーバからFirebaseのAPIを呼びだす際の認証情報となる、Firebase Admin SDKの秘密鍵を生成しましょう。

1. プロジェクト画面の左側メニュー内にある、設定ボタン（歯車のアイコン）を押し、「プロジェクトを設定」を選択
2. サービスアカウントのタブを開く
3. Firebase Admin SDKの欄の一番下にある「新しい秘密鍵の生成」ボタンを押す
4. 「キーを生成」ボタンを押して秘密鍵ファイルをダウンロード
    - このファイルは後ほどバックエンド側のコードの実装時に使用します。

以上でFirebase側の設定は完了です。
次は開発に取り掛かりましょう。
