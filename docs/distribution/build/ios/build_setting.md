---
title: プロジェクトのビルド設定
---

アプリケーションの開発を始める前に、開発者のうちの誰かがプロジェクトのビルド設定の担当者となり、プロジェクトのビルド設定します。

## なぜビルド設定をするのか

AppleはADP・ADEPライセンス利用に関して以下のようなルールを定めております。
- 組織単位（ライセンス契約単位）で、デバイス登録台数は種類（iPhone、iPadなど）ごとに100台まで
- Appの高度な機能を使ったアプリの場合、ライセンス利用が必須

ライセンス運用では、複数プロジェクトでiOSアプリ開発をしても、組織単位のデバイス登録台数上限を超えないよう、不要なデバイス登録を避けるルールを定めるケースもあります。
- Appの高度な機能を使わないアプリの開発では個人のApple IDを使う
- Appの高度な機能を使うアプリの開発では、アプリのビルド設定で、Appの高度な機能を有効にするかどうかでビルドを分ける
  - 無効時のビルドでは、個人のApple IDを使う
  - 有効時のビルドでは、ライセンスを使う（ADP・ADEPにデバイスを登録し、そのデバイスでアプリの動作検証を実施する）
- 配布時はADP・ADEPライセンスを使う

そのため、Appの高度な機能を使うアプリの開発には少なくとも次の3つのビルド設定が必要になります。

 - 開発用 - Appの高度な機能を使わない（または無効にした）ビルド
   - 個人のApple IDを使う
 - 開発用 - Appの高度な機能を有効にしたビルド
   - ADP・ADEPライセンスを使う
 - 配布用
   - ADP・ADEPライセンスを使う


## ビルド設定で設定するもの

iOSアプリのビルド設定では大きく分けて以下3つを設定できます。

#### Configuration

アプリに紐付けるリソース（プロビジョニングプロファイル、Bundle Identifier）を設定、Capabilityを設定、読み込む設定値ファイルの設定などを設定できます。
ビルド設定ごとにConfigurationを作成します。

#### Capability

Configurationごとに設定できる項目で、アプリケーションにおいて
アプリがAppleから提供されるサービスにアクセスするのを許可するために必要な設定です。
Appの高度な機能（例えばプッシュ通知）を使う場合は、Capabilityでプッシュ通知を選択する必要があります。

#### Schema

Xcodeでビルドするときに、どのConfigurationを選択するかをあらかじめ設定しておくためのものです。


## ビルド設定の例

「なぜビルド設定をするのか」で説明した3パターンごとにビルド設定を切り替えられるようにするための、具体的な例を示します。
Debug（No. 1）の設定では、開発者ごとに設定値が異なるため、開発者一人ひとりが簡単にビルド設定できるようにするため、ビルド設定値のテンプレートを作成します。

あくまでも例なので、ビルド設定の名前や細かい設定などはプロジェクトごとに適宜変更してください。

|No.|ビルド設定名|用途|準備するリソース|ビルド設定|備考|
|-|-|-|-|-|-|
|1|Debug|開発者が通常の開発時に使う|特になし|ビルド設定ファイルのテンプレートを用意|Appの高度な機能を使うアプリの場合、このビルド設定はAppの高度な機能の検証には使えないので、その場合はNo. 2のビルド設定を使います。また本ビルド設定ではAppの高度な機能を無効にする必要があります。|
|2|DebugAdvanced|開発者がAppの高度な機能を検証する時に使う |ADP・ADEPチーム開発用|リソースをビルド設定ファイルに紐付け|Appの高度な機能を使わない場合は本ビルド設定は不要です。|
|3|Release|配布するアプリをビルドする時に使う|ADP・ADEPチーム配布用|リソースをビルド設定ファイルに紐付け|||


このような例の場合は、以下3つのConfigurationを作成し、それぞれに対応するSchemaを作成します。
- Debug: Appの高度な機能を無効にしたビルド設定
  - 個人Apple IDのリソースを紐付け
  - CapabilityからAppの高度な機能を除外
- DebugAdvanced: Appの高度な機能を有効にしたビルド設定
  - ADP・ADEPのリソースを紐付け
  - CapabilityにAppの高度な機能を含んだままにする
- Release: リリース用ビルド設定
  - ADP・ADEPのリソースを紐付け
  - CapabilityにAppの高度な機能を含んだままにする

## 事前準備

ビルド設定に必要な証明書の秘密鍵、プロビジョニングプロファイルなどは、事前に用意してください。

## 手順

「ビルド設定の例」を実現するための手順を示します。


- 証明書の秘密鍵をキーチェーンに登録
  - 開発用証明書の秘密鍵をMac端末のキーチェンに登録します
    - Mac端末にダウンロードした証明書をダブルクリックするとキーチェーンアクセスが起動するので追加をクリックしてください
- Configurationの設定
  - 1つのビルド設定ごとに1つのConfigurationの設定が必要です。ここではXcodeで`Debug`、`DebugAdvanced`、`Release`の3つのConfigurationを設定します。
- Schemaの設定
  - XcodeでConfigurationを簡単に切り替えられるよう、それぞれのSchemaを作成します  
- ビルド設定値ファイルの作成、プロジェクトのビルド設定をリポジトリに反映
  - Debug用の設定値の一部は開発者依存です。ここでは開発者依存の値を設定値ファイルに切り出しテンプレート化します。そうすることで、開発者は、設定値ファイルを修正するだけでビルド設定が可能になります


### Configuration

#### Configuration: Allの設定

プロビジョニングプロファイル設定。

- Xcode > 左ペインでプロジェクトをクリック > TARGETSで通常の（TestsやtvOSなどではない）TARGETを指定 > Signing & Capabilities > All
- Automatically manage signingのチェックを外す

- Provisioning Profileのプルダウン > Import Profile… を選択
- 開発用プロビジョニングプロファイル（Apple Development）を指定

- Bundle Identifierにアプリ管理者から教えてもらったApp IDを指定

##### トラブルシューティング
  
###### プロビジョニングプロファイルを選択しても以下のエラーが出る場合
     - Xcodeを再起動すると解消される可能性があります。再起動の際は必ずXcodeのメニューからQuitを選択してXcodeを一度終了する

```
No signing certificate "iOS Development" found
No "iOS Development" signing certificate matching team ID "D9MUZCM4X6" with a private key was found.
```

###### プロビジョニングプロファイルを選択してもが出る場合

証明書の秘密鍵がMac端末のキーチェーンに登録できていません。登録してください。

#### Configuration: DebugAdvancedの作成

- Xcode > 左ペインでプロジェクトをクリック > PROJECTでプロジェクトを選択 > Info > Configurations > Debugを選択
- `+` `-` の `+` を選択 >Duplicate “Debug” Configuration`を選択
- 名前に「DebugAdvanced」を指定する
- Xcode > 左ペインでプロジェクトをクリック > TARGETSで通常の（TestsやtvOSなどではない）TARGETを指定
- Signing & Capabilities > DebugAdvancedを確認しSigningにプロビジョニングプロファイルが設定されていればOK


####  Configuration: Debug設定

  - Xcode > 左ペインでプロジェクトをクリック > TARGETSで通常の（TestsやtvOSなどではない）TARGETを指定
  - Signing & Capabilities > Debugにて以下設定
    - Automatically manage signingのチェックをつける
    - TeamはPersonal Team（個人アカウント）を選択
    - Bundle Identifierはpersonal.${Allで設定したBundle Identifier}.{組織内の誰とも被らないID}を設定
      - 例：Allがjp.fintan.mobile.SantokuAppならDebugはpersonal.jp.fintan.mobile.SantokuApp.117117
    - CapabilityからPush Notificationを外す
      - ※このときentitlementsファイルを作るかプロンプトで聞かれますがその時は「はい」を選択してください
  - 最終的には右図のようになる
  
Appの高度な機能を使うアプリの場合は、開発者が通常使うビルド設定のCapabilityからAppの高度な機能を除外してください。



#### Configuration: 設定の確認

設定すると、最終的には以下のようになります。
- All
- Debug
- DebugAdvanced
- Release


### Schemaの設定



- Schemaの一覧はXcode左上再生ボタンと停止ボタンの右側をクリックすると見れる。本設定を終えると以下のようになる
  - <<アプリ名>>
    - リリースビルド
    - ConfigurationはRelease
  - <<アプリ名>> Debug
    - プッシュ通知を無効にしたアプリのデバッグ
    - ConfigurationはDebug
  - <<アプリ名>> DebugAdvanced
    - Appの高度な機能を有効にしたアプリのデバッグ
    - ConfigurationはDebugAdvanced

- Schemaの一覧はXcode左上再生ボタンと停止ボタンの右側をクリック > Edit Scheme... を選択
- 右図のようにダイアログが開く 


- ダイアログ左上を選択し、<<アプリ名>>のSchemaを選択

- <<アプリ名>>のSchema > Run > Infoにて
  - Build ConfigurationでReleaseを選択
  - Debug executeのチェックを外す

- Duplicate Schemeをクリック
- Schema名を <<アプリ名>> Debugにする
- Run > Infoにて
  - Build ConfigurationでDebugを選択
  - Debug executeのチェックをつける

- Duplicate Schemeをクリック
- Schema名を <<アプリ名>> DebugAdvancedにする
- Run > Infoにて
  - Build ConfigurationでDebugAdvancedを選択
  - Debug executeのチェックをつける


### ビルド設定ファイルの作成

- Xcode右メニューからプロジェクトフォルダにて右クリック > New File... を選択
- Configuration Settings Fileを選択 > Nextを選択

  - ファイル名をPersonalAccountを指定
  - プロジェクト直下（ここではiosフォルダ）配下のアプリ名のフォルダを選択
  - Targetsに<<アプリ名>>のTargetを指定
  - Createを選択
  - 以下のようなファイルが生成されるToDo: 画像見るか実ファイル作成する

  - ファイルに以下を追記

  - CODE_SIGN_STYLE
    - Automatic 
  - PERSONAL_IDENTIFIER
    - 誰とも被らない個人のID
  - DEVELOPMENT_TEAM
    - 個人アカウントのDEVELOPMENT_TEAM　※

以下に例を示します。
```
CODE_SIGN_STYLE=Automatic 
PERSONAL_IDENTIFIER=809890
DEVELOPMENT_TEAM=8G25XXXX
```

- ConfigurationのDebugにて上記で作成した設定ファイルを読み込むようにする
  - Xcode > 左ペインでプロジェクトをクリック > PROJECTでプロジェクトを選択 > Info
  - Configurations > Debugを選択し、アプリ名の右プルダウンを選択先ほど作成した設定ファイルを指定する

**※すでに別の設定ファイルが指定されてる場合**既に指定されている設定ファイルに、以下のようなinclude文を追加する。

```
#include "<<アプリ名>>/PersonalAccount.xconfig"
```

#### ビルドファイルの余計な差分を元に戻す

ビルドファイル`<<アプリ名>>.xcodeproj/project.pbxproj`でDebug Configurationの部分以外の下記項目名の差分は変更前に戻してください。変更前のファイルに元の値があれば値を戻し、項目がなければ項目ごと削除してください。
  - DevelopmentTeam
  - PROVISIONING_PROFILE_SPECIFIER
  - DEVELOPMENT_TEAM
  - CODE_SIGN_IDENTITY
  - ProvisioningStyle

#### ビルド設定値ファイルの値を、ビルドファイルで読み込むようにする

- `<<アプリ名>>.xcodeproj/project.pbxproj` のDebug Configurationの部分について、以下3つの項目はビルド設定値ファイルから値を読み込むようにする
  - CODE_SIGN_STYLE
  - DEVELOPMENT_TEAM
  - PRODUCT_BUNDLE_IDENTIFIER

修正イメージはつぎのとおりです。
```
		13B07F941A680F5B00A75B9A /* Debug */ = {
			isa = XCBuildConfiguration;
			baseConfigurationReference = 8DF7E0D6B220BA1EFB2EBF90 /* Pods-SampleApp.debug.xcconfig */;
			buildSettings = {
				ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
				CLANG_ENABLE_MODULES = YES;
				CODE_SIGN_ENTITLEMENTS = SampleApp/SampleAppDebug.entitlements;
				CODE_SIGN_IDENTITY = "Apple Development";
				CODE_SIGN_STYLE = "${CODE_SIGN_STYLE}";
				CURRENT_PROJECT_VERSION = 1;
				DEVELOPMENT_TEAM = "${DEVELOPMENT_TEAM}";
				ENABLE_BITCODE = NO;
				INFOPLIST_FILE = SampleApp/Info.plist;
				LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";
				OTHER_LDFLAGS = (
					"$(inherited)",
					"-ObjC",
					"-lc++",
				);
				PRODUCT_BUNDLE_IDENTIFIER = "personal.jp.fintan.mobile.SantokuApp.${PERSONAL_IDENTIFIER}";
				PRODUCT_NAME = SampleApp;
				PROVISIONING_PROFILE_SPECIFIER = "";
				SWIFT_OPTIMIZATION_LEVEL = "-Onone";
				SWIFT_VERSION = 5.0;
				VERSIONING_SYSTEM = "apple-generic";
			};
			name = Debug;
		};
```

- 手順の最後に、 Xcode > 左ペインでプロジェクトをクリック > TARGETSで通常のTARGET(TestsやtvOSなどついていないTARGET)を指定 > Setting & Capabilities > Debugを確認する
  - 「ビルド設定値ファイルの作成」の手順実施前と同じようにTeam、Bundle Identifierが設定されていて、エラーが出ていなければOK

#### ビルド設定値ファイルのテンプレート化

- 設定値ファイル`PersonalAccount.xcconfig`を`PersonalAccount.xcconfig.template`に名前変更し、中身も以下のようにする
  - PERSONAL_IDENTIFIERの値を削除
  - DEVELOPMENT_TEAMの値を削除

```
//
//  PersonalAccount.xcconfig
//  SampleApp
//
//  Created by <Account Name> on 2020/09/10.
//

// Configuration settings file format documentation can be found at:
// https://help.apple.com/xcode/#/dev745c5c974

CODE_SIGN_STYLE=Automatic
PERSONAL_IDENTIFIER=
DEVELOPMENT_TEAM=
```

- `PersonalAccount.xcconfig`を構成管理の対象外とする。Gitなら`.gitignore`に`PersonalAccount.xcconfig`を追加


#### プロジェクトのビルド設定をリポジトリに反映

今までの手順によって、以下のようにファイルが変更・追加されています。これらをリポジトリに反映してください。
以下はアプリ名が`SampleApp`の場合です。

- 変更
  - SampleApp.xcodeproj/project.pbxproj
  - SampleApp.xcodeproj/xcshareddata/xcschemes/SampleApp.xcscheme
- 追加
  - SampleApp.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist
  - SampleApp/PersonalAccount.xcconfig.template
  - SampleApp/SampleApp.entitlements
  - SampleApp/SampleAppDebug.entitlements
  - SampleApp/SampleAppDebugAdvanced.entitlements

