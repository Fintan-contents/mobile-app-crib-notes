---
title: プロジェクトの作成
---

## React Nativeプロジェクトの作成

<!-- TODO: リンク貼るよ -->
[アプリを実装する前に](.)で紹介しているコードを簡単に動かすことができるように、プロジェクトを作成します。

このコンテンツでは[React Navigation](https://reactnavigation.org/)や[React Native Elements](https://reactnativeelements.com/)などのパッケージを利用します。これらのパッケージがインストールされたプロジェクトを簡単に用意できるよう、[RN Spoiler](https://github.com/ws-4020/rn-spoiler)というテンプレートを用意しています。

次のコマンドを実行して、新規プロジェクトを作成してください。（`<YourAppName>`の部分は、好みのプロジェクト名に変更してください）

```bash
npx react-native init --npm --template https://github.com/ws-4020/rn-spoiler <YourAppName>
```

<!-- TODO: リンク貼るよ -->
RN Spoilerは、Expoの[expo-template-bare-typescript](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript)をベースにしているので、[Expoとは](.)で紹介しているBare Workflowのアプリとして開発できます。

:::info
[npm](https://www.npmjs.com/)ではなく[Yarn](https://yarnpkg.com/)を利用したい場合は、`--npm`というオプションを削除してください。Yarnがインストールされている場合は、Yarnを利用してパッケージがインストールされます。

```bash
npx react-native init --template https://github.com/ws-4020/rn-spoiler <YourAppName>
```

:::

:::info
Node.js 15系で初めて`npx react-native init ...`を実行すると、次のように不足しているパッケージをインストールするかと聞かれます。`react-native`をインストールしようとしていれば問題ないので、エンターキーを押して実行してください。

```console
Need to install the following packages:
  react-native
Ok to proceed? (y)
```

:::

:::caution
npm 7で`peerDependencies`の扱いが変更された影響で、npm 7でRN Spoilerをテンプレートとしてプロジェクトを作成すると次のようなエラーが発生します。

```console
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: undefined@undefined
npm ERR! Found: @babel/core@7.9.6
npm ERR! node_modules/@babel/core
npm ERR!   dev @babel/core@"~7.9.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peerOptional @babel/core@">=7.11.0" from eslint-config-universe@7.0.1
npm ERR! node_modules/eslint-config-universe
npm ERR!   dev eslint-config-universe@"^7.0.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
```

新規プロジェクトの作成中にエラーが発生した場合は次の手順でリカバリしてください。

1. `cd <YourAppName>`（`<YourAppName>`は実際に作成したときの値に変更してください）
2. `npm install --legacy-peer-deps`
3. （macOSの場合のみ）`npx pod-install`
:::
