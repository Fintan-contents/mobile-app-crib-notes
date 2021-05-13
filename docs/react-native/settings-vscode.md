---
title: Visual Studio Codeの設定
---

ここではVisual Studio Code (以下VS Code) での開発に際して有用なプラグインをご紹介します。

## React Native Tools

VS Codeプラグインである`React Native Tools`を利用することで開発中のモバイルアプリケーションをデバッグできます。

VS Codeで、React NativeのTypeScriptコードをデバッグできるように、[React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)をセットアップします。

### React Native Toolsのインストール

VS CodeのReact Nativeの拡張ツールである、`React Native Tools`プラグインをインストールします。

Visual Studioマーケットプレイスの[React Native Toolsページ](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)の`Install`をクリックしてインストール。

または、VS Codeの「拡張機能」で`React Native Tools`検索してインストール。

### 起動構成を追加する

プロジェクトルート配下の`/.vscode/launch.json`に以下を追加してください。ファイルが無い場合は新規に作成してください。

```json title="/.vscode/launch.json"
{
  "configurations": [
    {
      "name": "Attach to packager",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "attach",
      "port": "19000"
    }
  ]
}
```

:::info
portにはMetro Bundlerのポート番号を指定してください。デフォルトはExpoの場合19000、Expoを使用しない場合は8081です。

ポート番号をデフォルトから変更している場合はその番号を指定してください。
:::

### デバッグ

以下の手順でデバッガーを起動します。

1. デバッグ対象のアプリで開発者メニューを表示する
1. `Debug Remote JS`を選択する
1. ブラウザで`debugger-ui`が立ち上がるのでそのタブを閉じる
1. VS Codeの「実行とデバッグ」から`Attach to packager`をクリックして実行する
1. 開発者メニューからアプリをリロードする

:::info
開発者メニューの表示方法は端末によって異なります。

- 実機：端末をシェイクする
- iPhoneシミュレータ：Windowsの場合`Ctrl+Z`、 Macの場合`Cmd+Z`
- Androidエミュレータ：Windowsの場合`Ctrl+M`、 Macの場合`Cmd+M`
:::

## Lint、フォーマッタ

このプロジェクトでは、LintツールとしてESLint、フォーマッタとしてEditorConfigとPrettierの設定をしています。

次にあげる3つのプラグインをインストールして、React Nativeのプロジェクトを開くと、
ESLintとPrettierのチェックが有効になります。
チェックに違反しているコードは黄色か赤の波線が表示されます。

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## その他

- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
