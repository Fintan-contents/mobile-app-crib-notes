import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, Instructions, ApplicationInfo, AppStateScreen, Demo} from 'screens';

import {ErrorCase} from '../screens/demo/error/ErrorCase';
import {ErrorInEventHandler} from '../screens/demo/error/ErrorInEventHandler';
import {ErrorInNativeModule} from '../screens/demo/error/ErrorInNativeModules';
import {ErrorInReactComponent} from '../screens/demo/error/ErrorInReactComponent';
import {ErrorInUseEffect} from '../screens/demo/error/ErrorInUseEffect';
import {ErrorInUseEffectAsyncProcess} from '../screens/demo/error/ErrorInUseEffectAsyncProcess';
import {ErrorInUseEffectSyncProcess} from '../screens/demo/error/ErrorInUseEffectSyncProcess';

const nav = createStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={Home.name}>
      <nav.Screen name="Home" component={Home} options={{headerShown: false}} />
      <nav.Screen name="Instructions" component={Instructions} />
      <nav.Screen name="AppInfo" component={ApplicationInfo} options={{title: 'Application Information'}} />
      <nav.Screen name="Demo" component={Demo} options={{title: 'Demo Screens'}} />
      <nav.Screen name="AppState" component={AppStateScreen} options={{title: 'AppState Test'}} />
      <nav.Screen name={ErrorCase.ScreenName} component={ErrorCase.Screen} />
      <nav.Screen name={ErrorInEventHandler.ScreenName} component={ErrorInEventHandler.Screen} />
      <nav.Screen name={ErrorInUseEffect.ScreenName} component={ErrorInUseEffect.Screen} />
      <nav.Screen name={ErrorInUseEffectSyncProcess.ScreenName} component={ErrorInUseEffectSyncProcess.Screen} />
      <nav.Screen name={ErrorInUseEffectAsyncProcess.ScreenName} component={ErrorInUseEffectAsyncProcess.Screen} />
      <nav.Screen name={ErrorInReactComponent.ScreenName} component={ErrorInReactComponent.Screen} />
      <nav.Screen name={ErrorInNativeModule.ScreenName} component={ErrorInNativeModule.Screen} />
    </nav.Navigator>
  );
};
