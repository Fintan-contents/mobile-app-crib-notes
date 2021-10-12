import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {
  DemoScreen,
  AppStateScreen,
  ConfigScreen,
  ErrorCaseScreen,
  ErrorInEventHandlerScreen,
  ErrorInUseEffectScreen,
  ErrorInUseEffectSyncProcessScreen,
  ErrorInUseEffectAsyncProcessScreen,
  ErrorInReactComponentScreen,
  ErrorInNativeModuleScreen,
  InstructionsScreen,
  AppInfoScreen,
} from 'screens';

import {useCloseThisNavigatorButton} from './useCloseThisNavigatorButton';

const nav = createNativeStackNavigator();

const name = 'DemoStackNav';
export const Screen: React.FC = () => {
  const {CloseThisNavigatorButton} = useCloseThisNavigatorButton();

  return (
    <nav.Navigator
      initialRouteName={DemoScreen.name}
      screenOptions={{
        headerRight: CloseThisNavigatorButton,
        // このナビゲータはネストして使う想定なので、Insetは取らない。（親のナビゲータですでにInsetを取ってある。）
        // cf.) https://github.com/software-mansion/react-native-screens/pull/545
        //      https://github.com/software-mansion/react-native-screens/tree/master/native-stack#headertopinsetenabled-android-only
        headerTopInsetEnabled: false,
      }}>
      <nav.Screen {...AppInfoScreen} />
      <nav.Screen {...AppStateScreen} />
      <nav.Screen {...ConfigScreen} />
      <nav.Screen {...DemoScreen} />
      <nav.Screen {...ErrorCaseScreen} />
      <nav.Screen {...ErrorInEventHandlerScreen} />
      <nav.Screen {...ErrorInNativeModuleScreen} />
      <nav.Screen {...ErrorInReactComponentScreen} />
      <nav.Screen {...ErrorInUseEffectAsyncProcessScreen} />
      <nav.Screen {...ErrorInUseEffectScreen} />
      <nav.Screen {...ErrorInUseEffectSyncProcessScreen} />
      <nav.Screen {...InstructionsScreen} />
    </nav.Navigator>
  );
};

export const DemoStackNav = {
  component: Screen,
  name,
  options: {
    stackPresentation: 'formSheet' as const,
  },
};
