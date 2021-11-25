import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useInitializeContext} from 'components/initialize';
import React from 'react';

import {MainTabNav} from './MainTabNav';

const nav = createNativeStackNavigator();

const name = 'AuthenticatedStackNav';
const Screen: React.FC = () => {
  const {navigatorOptions} = useInitializeContext();

  return (
    <nav.Navigator {...navigatorOptions[name]}>
      <nav.Screen {...MainTabNav} />
    </nav.Navigator>
  );
};

export const AuthenticatedStackNav = {
  component: Screen,
  name,
};
