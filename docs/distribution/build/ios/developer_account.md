---
title: 開発者アカウントでローカルデバイスにインストール
sidebar_label: 開発者アカウントを利用
---

UIや操作感を確認するため、シミュレータではなく実際のデバイスで検証したい場合でもプロビジョニングプロファイルが必要です。

開発時のAppの高度な機能の検証や、リリースビルドしたアプリの検証をしない場合、**開発者アカウントに紐づいたプロビジョニングプロファイルを利用できます。**

ADP・ADEPに紐付いたデバイスはライセンス毎に台数制限があるため、不用意にデバイス登録台数を増やしたくない場合は開発者アカウントを利用して開発できます。


## インストール

ADP、ADEPは[Apple Developer Webサイト](https://developer.apple.com/account/)でリソースを作成しますが、開発者アカウントの場合Xcodeで作成します。

デバイスにアプリをインストールし起動する以外は、すべてXcodeにて作業します。
個人アカウントの証明書が作成できている場合は[開発デバイスの登録](#開発デバイスの登録)から進めてください。

- 個人アカウントのApple IDの登録
  - Xcodeにて個人のApple IDを登録します
- 個人アカウントの証明書の作成
  - Personal Team(個人のApple ID)に紐づいた証明書を作成します
  - ここで誤ってADP・ADEPのTeamを選択しないことが重要です
- 開発用デバイス登録
  - 開発用デイバイスをMac端末に接続してXcodeに登録します
- 個人アカウントの紐付け
  - 前手順で作成した証明書紐付を行います
  - ビルド設定ファイルのテンプレートに個人のApple ID情報を記入します
- デバイスにアプリをインストール・起動
  - 初めてアプリを起動する際には、デバイスでアプリを信頼する必要があります


### 個人アカウントのApple IDの登録

- ヘッダー > Xcode > Preferences > Apple IDを開き、左下`+`をクリック
- Apple IDを選択し`Continue`をクリック
- Apple IDとパスワードを入力
- 登録したApple IDが表示されればOK


### 個人アカウントの証明書の作成

- ヘッダー > Xcode > Preferences > Apple IDを開き、Teamの個人IDを選択し、Manage Certificatesをクリック
- 左下の+をクリックしApple Developmentをクリックし、自分の開発用端末の証明書を作成する
- 自分の開発端末の証明書が表示されているのを確認し、Doneをクリック

### 開発デバイスの登録

- Xcodeを起動した状態で、iOS端末を自分の開発用端末にUSB接続する
- 接続時にパスコードなどを入力
- Xcode左上部（再生ボタン、停止ボタンの左）をクリックすると、先ほど接続したデバイスが表示されるのでデバイスを選択


### Xcodeでの個人アカウントの紐付け

- ビルド設定値ファイルのテンプレート（アプリのルートフォルダ直下の`PersonalAccount.xcconfig.template`）を編集してApple IDの追加
   - `CODE_SIGN_STYLE` は `Automatic` に設定
   - `PERSONAL_IDENTIFIER` は他の人と重複しない値に設定（Bundle Identifierのサフィックスとして利用されます）
   - `DEVELOPMENT_TEAM` は、個人のApple IDのDEVELOPMENT_TEAM(※)を設定
      - **(※) 個人のApple IDのDEVELOPMENT_TEAMの確認方法**  
        - 別途Xcodeでサンプルアプリを作成する
        - ConfigurationにてCODE_SIGN_STYLEをAuto Signingに指定し、個人のApple IDでビルドを設定する
        - 設定終了後、サンプルアプリのproject.pbxproj中のDEVELOPMENT_TEAMを確認する → これが個人のApple IDのDEVELOPMENT_TEAM

#### トラブルシュート

以下のようなエラーが出てConfigurationのエラーが消えない
→ Xcodeを再起動すると解消される可能性があります。再起動の際は必ずXcodeのメニューから`Quit`を選択してXcodeを一度終了してください。

```
No signing certificate "iOS Development" found
No "iOS Development" signing certificate matching team ID "D9MUZCM4X6" with a private key was found.
```

### 開発用デバイスへのアプリインストール・起動

- 最初Xcodeからビルドして実機でアプリを起動しようとすると以下エラーになります
- 実機にはアプリはインストールされていますが、タップして起動しようとすると、以下のようなメッセージが出て起動できません
- そこで実機の設定 > 一般 > プロファイルとデバイス管理をクリック
- デベロッパAPPで、Xcodeで登録しているApple IDを選択
- 青文字の「XXXを信頼する」をクリック（スクショでは文字が見切れていてわかりにくいですが、青文字の部分です）
- 以下で信頼を選択
- 以下のようになります。このあと、実機でアプリをタップすると起動できるようになっています

ToDo：信頼の手順はIn-Houseも同じはず。
