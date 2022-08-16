import {firebaseConfig} from 'bases/firebase/FirebaseConfig';
import {createLogger, setLogger} from 'bases/logging';
import {FirebaseCrashlyticsTransport} from 'bases/logging/FirebaseCrashlyticsTransport';
import {setErrorSender} from 'bases/logging/sendErrorLog';
import {LoadingOverlay} from 'bases/ui/loading/LoadingOverlay';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {AppThemeProvider} from 'bases/ui/theme/AppThemeProvider';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppWithInitialization} from './AppWithInitialization';
import {sendErrorLog} from './utils/sendErrorLog';

type AppProperties = {
  [key: string]: any;
};

setLogger(
  __DEV__ || firebaseConfig.isDummy
    ? createLogger({level: 'trace'})
    : createLogger({level: 'error', transports: [new FirebaseCrashlyticsTransport()]}),
);

setErrorSender(sendErrorLog);

export const App = ({isHeadless}: AppProperties) => {
  // isHeadlessを取得するためにはAppDelegate.mに変更が必要
  // https://rnfirebase.io/messaging/usage#background-application-state
  if (Platform.OS === 'ios' && isHeadless) {
    // iOSでバックグラウンド時にリモート通知を受信するとアプリケーションがサイレントに起動される
    // この時にはReact Componentを返さないようにし、useEffectなどの処理がバックグラウンドで走ることを防止する
    // Androidの場合はApp自体が読み込まれないので追加対応は必要ない
    return null;
  }

  return (
    <GestureHandlerRootView style={StyleSheet.absoluteFill}>
      <SafeAreaProvider>
        <AppThemeProvider>
          <AppWithInitialization />
          <LoadingOverlay.Component />
          <Snackbar.Component />
        </AppThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
