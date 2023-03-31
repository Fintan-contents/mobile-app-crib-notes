# `.script`

## [list-dependencies.js](./list-dependencies.js)
npm, Gradle(Android), CocoaPods(iOS) で使用しているライブラリを返します。

このscriptを開発者が直接 `node` を使って実行することはありません。

この機能は後述する以下のscriptで使用されています。

- `check-licenses.js`
- `generate-acknowledgements-file.js`
- `generate-licenses.csv.js`

### 前提
- `npm run prebuild` が実行済
    - `prebuild:stg`, `prebuild:prod` を含む
- Root ディレクトリ (このREADMEファイルからみて `../`) で実行

### 処理概要
1. (`prebuild` ごとに1回でOK) [Gradle(Android)] Gradleのライセンス用plugin(`com.jaredsburrows.license`) を使って依存ライブラリ情報をjsonとして作成
    - `./android/app/build/reports/licenses/licenseReleaseReport.json`
1. (`prebuild` ごとに1回でOK) [CocoaPods(iOS)] `pod install` を実行して依存ライブラリ情報をplistとして作成
    - `ios/Pods/Target Support Files/Pods-${projectName}/Pods-${projectName}-acknowledgements.plist`
1. 各種ライブラリ一覧を取得してマージ
    - npm: [license-checker](https://www.npmjs.com/package/license-checker) を使用して `package.json` と `node_modules` フォルダから
    - Gradle(Android): `licenseReleaseReport.json` から
    - CocoaPods(iOS): `Pods-${projectName}-acknowledgements.plist` ファイルから
1. ライセンス情報が不足している場合は [managed-license.js](./managed-license.js) の情報を使って調整する。一覧から除外することも可能
    - `licenseName`
    - `licenseUrl`
    - `licenseText`
    - `exclude`
1. `name`, `version` でソート
1. ライセンス名を [SPDX形式](https://spdx.org/licenses/) に統一する

### オプション
第1引数に `quick` を指定して呼び出すと前回の Gradle と CocoaPods の処理結果を再利用します。

この機能は以下のscriptでも有効です

- `check-licenses.js`
- `generate-acknowledgements-file.js`
- `generate-licenses.csv.js`

`check-licenses` を実行する場合のコマンド例
```sh
node .script/check-licenses.js quick
```


## [check-licenses.js](./check-licenses.js)
使用しているライブラリのライセンスについて以下の観点でチェックします。

- ライセンス名が判明しているか？
    - scriptで取得できない場合は [managed-license.js](./managed-license.js) で手動管理します
- 使用可能なライセンス名か？
    - ホワイトリスト形式 (`licenseWhitelist` 変数参照)
    - 新しいライセンスのライブラリを使う場合は、ライセンスの使用可否について調査してから追加してください
- ライセンステキストが存在するか？
    - scriptで取得できない場合は [managed-license.js](./managed-license.js) で手動管理します

### TODO/既知の問題
- `Android Software Development Kit License` について調査（現在 `licenseWhitelist` に含めてある）
- npm ライブラリの一部で `licenseFile` が README を参照しており、ライセンステキストがない問題に対応


## [generate-acknowledgements-file.js](./generate-acknowledgements-file.js)
アプリに含めるためのライセンス一覧情報を作成します。

ライセンステキスト情報として `licenseUrl` のみである場合、 `fetch` で取得します。

### TODO/既知の問題
- ライセンス一覧とファイルは Android/iOS それぞれに、両OSで使う全てのライブラリが含まれており冗長
    - 一覧のみ表示時に filter してOSごとに切り替えている
- `name`, `version` が同じライブラリが存在し、アプリ上で区別できない
    - ※ `id` は異なるが、 `id` には `type` も含まれている & `version` の代わりに `checksum` が含まれている場合があり、表示用ではない

## [generate-licenses.csv.js](./generate-licenses.csv.js)
使用ライブラリのライセンス一覧をCSVファイルとして保存します。

### 出力先
`.script/dist/licenses.csv`


## [managed-license.js](./managed-license.js)
scriptでライセンス情報を取得できない場合の手動管理用ファイルです。

このscriptを開発者が直接 `node` を使って実行することはありません。
