import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {HomeScreen} from 'screens';

import {DemoStackNav} from './DemoStackNav';

const nav = createNativeStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator
      initialRouteName={HomeScreen.name}
      screenOptions={{
        headerShown: false,
      }}>
      <nav.Screen {...HomeScreen} />
      <nav.Screen {...DemoStackNav} />
    </nav.Navigator>
  );
};
