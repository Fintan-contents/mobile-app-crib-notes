// グローバルから参照したいモックインスタンスを設定するためのオブジェクトです。
//
// 例えば、React Navigationの`navigation.navigate`のように、モックインスタンスの検証が必要な場合は、
// このオブジェクトに設定して、テストから参照できるようにしておく必要があります。
//
// React Navigationの`useNavigation`は、`jest/__mocks__/@react-navigation/native.ts`でモック化されて、
// `global.__mocks`に登録されています。
//
// テストでは、`expect(__mocks.navigation.navigate).toBeCalledWith('Screen')`のようにして、
// `navigation.navigate`の呼び出しを検証することができます。`src/screens/home/HomeScreen.test.tsx`を参考にしてください。
//
// TypeScriptで型エラーにならないように、`global.__mocks`にモックを追加したら、`jest/types/global.d.ts`にその型も追加してください。
global.__mocks = {};
