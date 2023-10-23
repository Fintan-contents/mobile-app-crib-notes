import {setHandleError} from 'bases/core/errors/handleError';
import {setHandleErrorWithAlert} from 'bases/core/errors/handleErrorWithAlert';
import {setHandleErrorWithSnackbar} from 'bases/core/errors/handleErrorWithSnackbar';
import {firebaseConfig} from 'bases/firebase/FirebaseConfig';
import {FirebaseCrashlyticsWorkaround} from 'bases/firebase/crashlytics/FirebaseCrashlyticsWorkaround';
import {createLogger, setLogger} from 'bases/logging';
import {FirebaseCrashlyticsTransport} from 'bases/logging/FirebaseCrashlyticsTransport';
import {LoadingOverlay} from 'bases/ui/loading/LoadingOverlay';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {AppThemeProvider} from 'bases/ui/theme/AppThemeProvider';
import 'expo-dev-client'; // エラー処理の改善: https://docs.expo.dev/develop/development-builds/use-development-builds/
import React, {useEffect} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppWithInitialization} from './AppWithInitialization';
import {handleError} from './errors/handleError';
import {handleErrorWithAlert} from './errors/handleErrorWithAlert';
import {handleErrorWithSnackbar} from './errors/handleErrorWithSnackbar';
import {addDeepLinkListener} from './services/deep-link/addDeepLinkListener';
import {setWarmStartDeepLink} from './services/deep-link/warmStartDeepLink';

type AppProperties = {
  [key: string]: unknown;
};

setLogger(
  __DEV__ || firebaseConfig.isDummy
    ? createLogger({level: 'trace'})
    : createLogger({level: 'error', transports: [new FirebaseCrashlyticsTransport()]}),
);

setHandleError(handleError);
setHandleErrorWithSnackbar(handleErrorWithSnackbar);
setHandleErrorWithAlert(handleErrorWithAlert);

/**
 *
 * Androidは、android:launchModeによってActivityの起動方法が変わります。
 * android:launchModeのsingleTaskは、ウォームスタート時にActivityのインスタンスが作成されません。
 * この場合、ディープリンクのURLはExpo LinkingのaddEventListenerで取得できます。
 *
 * 一方、android:launchModeのstandardなどは、ウォームスタート時にActivityのインスタンスが作成されます。
 * この場合、ディープリンクのURLはExpo LinkingのgetInitialURLで取得できます。
 *
 * このアプリでは、Expoのexpo-template-bare-minimumに合わせて、android:launchModeをsingleTaskに設定しています。
 * android:launchModeをstandard変更することで、コールドスタートやiOSのウォームスタートと挙動を合わせることもできます。
 * しかし、Activityの起動変更がアプリに及ぼす影響を完全に把握できていません。
 * そのため、android:launchModeはsingleTaskにして、Expo LinkingのaddEventListenerで取得する方法としています。
 *
 * また、ウォームスタート時は、Appコンポーネントは再マウントされます。
 * Appコンポーネント内で以下のように実装すると、アンマウントされた時にsubscription.removeが呼ばれ、ディープリンクのリスナーが削除されます。
 *
 * useEffect(() => {
 *    const subscription = Linking.addEventListener('url', event => {});
 *    return () => subscription.remove();
 *  }, []);
 *
 * リスナーが削除されると、ウォームスタート時のディープリンクを受け取ることができません。
 * そのため、ウォームスタート時でもディープリンクをlistenし続けるために、App.tsxのtop levelでディープリンクをlistenしています。
 *
 * @see https://developer.android.com/guide/topics/manifest/activity-element?hl=ja#lmode
 */
if (Platform.OS === 'android') {
  addDeepLinkListener(url => {
    // Appのマウントが完了する前までをウォームスタートとしています。
    // ホットスタート時のディープリンクは、DeepLinkHandler.tsx内でナビゲーション定義が完了した後に受け取るようにしています。
    //（ここでディープリンクを受け取っても、画面遷移に必要なナビゲーション定義などが完了していない可能性があるため。）
    if (!isHotStart) {
      // ここで設定したディープリンクURLは、アプリの初期化処理（useAppInitialize.ts）で取得されます。
      // 取得された後はundefinedが設定され、再度ディープリンクタップによるウォームスタートが発生するまで、undefinedのままです。
      setWarmStartDeepLink(url);
    }
  });
}

let isHotStart = false;

export const App = ({isHeadless}: AppProperties) => {
  useEffect(() => {
    isHotStart = true;
    return () => {
      isHotStart = false;
    };
  }, []);
  // isHeadlessを取得するためにはAppDelegate.mに変更が必要
  // https://rnfirebase.io/messaging/usage#background-application-state
  if (Platform.OS === 'ios' && isHeadless) {
    // iOSでバックグラウンド時にリモート通知を受信するとアプリケーションがサイレントに起動される
    // この時にはReact Componentを返さないようにし、useEffectなどの処理がバックグラウンドで走ることを防止する
    // Androidの場合はApp自体が読み込まれないので追加対応は必要ない
    return null;
  }

  return (
    <FirebaseCrashlyticsWorkaround>
      <GestureHandlerRootView style={StyleSheet.absoluteFill}>
        <SafeAreaProvider>
          <AppThemeProvider>
            <AppWithInitialization />
            <LoadingOverlay.Component />
            <Snackbar.Component />
          </AppThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </FirebaseCrashlyticsWorkaround>
  );
};
