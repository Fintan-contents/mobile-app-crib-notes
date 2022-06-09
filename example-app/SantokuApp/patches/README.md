# ライブラリへのパッチ

## スプラッシュスクリーンの表示を柔軟にする

`expo-splash-screen`は、Androidではデフォルトでは単純に1枚の画像を拡大・縮小して表示することしかできません。（特にAndroidでは、`ImageView.ScaleType.CENTER`で表示することしかできない）

今回は、複数の画像を中央で画面サイズに合わせて表示したり、下揃えで表示したりする必要があります。それを可能にするためにパッチを当てています。`native`を指定したときに`ImageView.ScaleType.FIT_XY`が利用されるように変更）

## `npm run ios`実行時に発生する警告を抑止するパッチ

Xcode 13から、`xcodebuild`の実行時に常に`destination`が適切に指定される必要があるようです。

`@react-native-community/cli`では、内部でXcodeのビルド設定を取得するときにdestinationを指定していないため、以下のような警告が表示されます。

> --- xcodebuild: WARNING: Using the first of multiple matching destinations:

動作には特に問題はなかったですが、警告を放置するのは問題があるのでパッチを当てて対応しています。

## React Native Elementsの型エラーに対処するパッチ

↓の変更で、TV関連の型が変更されました。
https://github.com/DefinitelyTyped/DefinitelyTyped/commit/73459e5084f7406d577a5b03ac2bf8cdd2c30f45

また、React Native 0.66ではTextInputの`autoCompleteType`が`autoComplete`に変更になりました。
https://github.com/facebook/react-native/commit/27fec9569e08a04e0dbdbd5de063a599ad0416fa

React Native Elementsの3系ではこの変更に追従できていなかったため、以下の修正をしたパッチを当てています。
* `Icon`のPropsから`tvParallaxProperties`を削除
* `ListItem`のPropsから`tvParallaxProperties`、`hasTVPreferredFocus`を削除
* `ListItem.XXX`のPropsから`tvParallaxProperties`を削除
* `Input`のPropsの`autoCompleteType`を`autoComplete`に変更