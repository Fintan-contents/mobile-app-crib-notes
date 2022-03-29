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
  LocalAuthenticationScreen,
  AuthenticationScreen,
  HttpApiScreen,
  NavigationScreen,
  PushNotificationScreen,
  CacheScreen,
  ListTodoDemoScreen,
  CreateTodoDemoScreen,
  EditTodoDemoScreen,
  ReactQueryDemoScreen,
  DisabledQueryDemoScreen,
  DependentQueryDemo1Screen,
  DependentQueryDemo2Screen,
  DependentQueryDemo3Screen,
  DisableErrorHandlerDemoScreen,
  GetAccountsMeDemoScreen,
  SearchFormTodoDemoScreen,
  SearchBarTodoDemoScreen,
} from 'screens';

import {DemoStackParamList, RootStackParamList} from './types';
import {useCloseThisNavigatorButton} from './useCloseThisNavigatorButton';

const nav = createNativeStackNavigator<DemoStackParamList>();

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
      <nav.Screen {...LocalAuthenticationScreen} />
      <nav.Screen {...AuthenticationScreen} />
      <nav.Screen {...HttpApiScreen} />
      <nav.Screen {...NavigationScreen} />
      <nav.Screen {...PushNotificationScreen} />
      <nav.Screen {...CacheScreen} />
      <nav.Screen {...ListTodoDemoScreen} />
      <nav.Screen {...CreateTodoDemoScreen} />
      <nav.Screen {...EditTodoDemoScreen} />
      <nav.Screen {...ReactQueryDemoScreen} />
      <nav.Screen {...DisabledQueryDemoScreen} />
      <nav.Screen {...DependentQueryDemo1Screen} />
      <nav.Screen {...DependentQueryDemo2Screen} />
      <nav.Screen {...DependentQueryDemo3Screen} />
      <nav.Screen {...DisableErrorHandlerDemoScreen} />
      <nav.Screen {...GetAccountsMeDemoScreen} />
      <nav.Screen {...SearchFormTodoDemoScreen} />
      <nav.Screen {...SearchBarTodoDemoScreen} />
    </nav.Navigator>
  );
};

export const DemoStackNav: NativeStackScreenConfig<RootStackParamList, typeof name> = {
  component: Screen,
  name,
  options: {
    presentation: 'formSheet' as const,
  },
};
