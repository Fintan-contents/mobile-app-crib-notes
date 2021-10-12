import {NavigationContainer} from '@react-navigation/native';
import {activateKeepAwake} from 'expo-keep-awake';
import {RootStackNav} from 'navigation';
import React from 'react';

import {firebaseConfig} from './framework/firebase';

export const App = () => {
  // 開発中は画面がスリープしないようにしておきます。
  if (__DEV__) {
    activateKeepAwake();
  }

  if (!firebaseConfig.isDummy) {
    // Firebase Crashlyticsの初期化
    require('@react-native-firebase/crashlytics');
  }

  return (
    <NavigationContainer>
      <RootStackNav />
    </NavigationContainer>
  );
};
