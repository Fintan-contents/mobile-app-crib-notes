import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
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
  LogScreen,
  MessageScreen,
  ButtonScreen,
  SnackbarScreen,
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
      <nav.Screen {...LogScreen} />
      <nav.Screen {...MessageScreen} />
      <nav.Screen {...ButtonScreen} />
      <nav.Screen {...SnackbarScreen} />
    </nav.Navigator>
  );
};

export const DemoStackNav = {
  component: Screen,
  name,
  options: {
    presentation: 'formSheet' as const,
  },
};
