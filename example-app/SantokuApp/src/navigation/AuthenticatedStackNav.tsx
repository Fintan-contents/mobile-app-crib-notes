import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {MainTabNav} from './MainTabNav';

const nav = createNativeStackNavigator();

const name = 'AuthenticatedStackNav';
const Screen: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={MainTabNav.name}>
      <nav.Screen {...MainTabNav} />
    </nav.Navigator>
  );
};

export const AuthenticatedStackNav = {
  component: Screen,
  name,
};
