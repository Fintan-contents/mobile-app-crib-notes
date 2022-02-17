import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import {registerRootComponent} from 'expo';
import * as SplashScreen from 'expo-splash-screen';
// React NativeではURLやURLSearchParamsの一部メソッドが実装されていません。
// https://github.com/facebook/react-native/blob/main/Libraries/Blob/URL.js
// それらを使用するため、react-native-url-polyfillを適用します。
// なお、SantokuAppではOpenAPI Generatorを使用して生成したコードの中で、URL#searchやURLSearchParamsを利用しています。
import 'react-native-url-polyfill/auto';

import {App} from './src/App';

// Manually hide splash screen
SplashScreen.preventAutoHideAsync().catch(() => {
  console.info('Failed to prevent auto hide splash screen.');
});

// アプリがバックグラウンド状態で通知を受信した場合に、その時点でバックグラウンド状態のまま実行する処理
// To setup a background handler, call the setBackgroundMessageHandler outside of your application logic as early as possible
// https://rnfirebase.io/messaging/usage#background--quit-state-messages
messaging().setBackgroundMessageHandler(async remoteMessage => {
  // このアプリでは何も実施しないが、Handler未設定だとconsole.warnのログが出力されるため設定だけしておく
});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
