import {Linking, Platform} from 'react-native';

export const openSettings = async () => {
  if (Platform.OS === 'ios') {
    // アプリの設定画面を開きます。
    await Linking.openSettings();
  } else if (Platform.OS === 'android') {
    // 以下のようにLinking.sendIntentを使用することで、アプリの通知設定画面を表示できる想定でした。
    // https://reactnative.dev/docs/linking#send-intents-android
    // しかし、React Nativeの0.67未満では、Linking.sendIntentの不具合により、インテントを実行できないようです。
    // https://github.com/facebook/react-native/pull/29000
    // そのため、アプリの設定画面を開きます。
    await Linking.openSettings();
  }
};
