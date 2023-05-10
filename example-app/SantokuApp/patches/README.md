# ライブラリへのパッチ

## [expo-splash-screen] スプラッシュスクリーンの表示を柔軟にする

`expo-splash-screen`は、Androidではデフォルトでは単純に1枚の画像を拡大・縮小して表示することしかできません。（特にAndroidでは、`ImageView.ScaleType.CENTER`で表示することしかできない）

今回は、複数の画像を中央で画面サイズに合わせて表示したり、下揃えで表示したりする必要があります。それを可能にするためにパッチを当てています。`native`を指定したときに`ImageView.ScaleType.FIT_XY`が利用されるように変更）

## [react-native-elements] 型エラーに対処するパッチ

React18から、React.Componentに定義されていたchildrenが削除されました。
https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210

React Native Elementsの3系では上記の変更に追従できていなかったため、以下の修正をしたパッチを当てています。
* `ThemeProvider`のPropsに`children`を追加

## [@expo/config-plugins] iOS用に追加したファイルのIDを取得できない問題に対処するパッチ

`IOSConfig.XcodeUtils.addResourceFileToGroup`でファイルを追加した際に、追加したファイルのIDが取得できません。
そのため、追加したファイルのIDを参照するような設定ができない事象が発生しました。

そこで、`IOSConfig.XcodeUtils.addResourceFileToGroup`にファイルのIDを指定できるパッチを当てています。

### `@expo/config-plugins`を`devDependencies`に追加

このアプリの依存ライブラリである`expo`や`@react-native-firebase/app`などは、`@expo/config-plugins`を`dependencies`に設定しています。
これらのライブラリが設定している`@expo/config-plugins`のバージョンが同じとは限りません。

複数のバージョンが混在している場合、`deduped`が発生し`node_modules`配下は以下のようになります（必要な箇所以外は省略しています）。

```console
node_modules/
├── @expo
│   ├── cli
│   │   ├── node_modules
│   │   │   ├── @expo
│   │   │   │   ├── config-plugins(6.0.1)
│   ├── config-plugins(5.0.4)
├── @react-native-firebase
│   ├── app

※ 必要な箇所以外は省略しています。
※ 括弧内に記載しているバージョンは例です。
```

このアプリでは、`@expo/cli`が使用する`@expo/config-plugins`にこのパッチを適用しますが、`deduped`が発生するかどうかによってパッチを適用するべきパスが変わってしまいます。

そのため、`@expo/cli`が使用する`@expo/config-plugins`と同じバージョンを`devDependencies`に追加して、`node_modules`配下の構成を以下のようにします。

```console
node_modules/
├── @expo
│   ├── cli
│   ├── config-plugins(6.0.1)
├── @react-native-firebase
│   ├── app
│   │   ├── node_modules
│   │   │   │   ├── config-plugins(5.0.4)

※ 必要な箇所以外は省略しています。
※ 括弧内に記載しているバージョンは例です。
```

この対応により、パッチを適用するパスは常に`node_modules/@expo/config-plugins`になります。

## [react-native] FlatListでデータが0件の場合に`scrollToEnd`を呼び出すとエラーが発生する問題に対処するパッチ

FlatListでデータが0件の場合に`scrollToEnd`を呼び出すと以下のエラーが発生します。

> ERROR  Invariant Violation: Tried to get frame for out of range index -1, js engine: hermes

この問題に対するissueとPull Requestは以下になります。
* https://github.com/facebook/react-native/issues/36066
* https://github.com/facebook/react-native/pull/36067

Pull Requestは既にクローズされ`main`ブランチにはマージされていますが、このアプリで使用している`react-native`のバージョンにはまだ入っていないため、パッチを当てています。
