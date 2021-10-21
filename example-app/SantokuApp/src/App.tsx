import {NavigationContainer} from '@react-navigation/native';
import {activateKeepAwake} from 'expo-keep-awake';
import {RootStackNav} from 'navigation';
import React from 'react';

import {BundledMessagesLoader, loadMessages} from './framework';
import {firebaseConfig} from './framework/firebase';
import {log} from './framework/logging';
import {launchedId} from './framework/utilities/id';
import crashlytics from '@react-native-firebase/crashlytics';

export const App = () => {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }

  if (!firebaseConfig.isDummy) {
    // Firebase Crashlyticsの初期化
    // アプリの起動IDを設定
    launchedId()
      .then((value) => crashlytics().setAttribute('launchedId', value))
      .catch(() => {
        log.error('Failed to get launchedId.', 'LaunchedIdGettingFailure');
      });
  }
  // アプリ内で使用するメッセージのロード
  loadMessages(new BundledMessagesLoader()).catch(() => {
    // アプリにバンドルしているメッセージのロードは失敗しない想定
    log.error('Failed to load message.', 'BundledMessagesLoadingFailure');
  });

  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};
