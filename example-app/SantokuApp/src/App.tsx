import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppWithInitialization} from './AppWithInitialization';
import {WithOverlay} from './components/overlay';
import {WithAppTheme} from './components/theme';

type AppProperties = {
  [key: string]: any;
};

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
        <WithAppTheme>
          <WithOverlay>
            <AppWithInitialization />
          </WithOverlay>
        </WithAppTheme>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
