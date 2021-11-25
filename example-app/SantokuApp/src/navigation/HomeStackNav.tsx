import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useInitializeContext} from 'components/initialize';
import React from 'react';
import {HomeScreen} from 'screens';

const nav = createNativeStackNavigator();

const name = 'HomeStackNav';
const Screen: React.FC = () => {
  const {navigatorOptions} = useInitializeContext();
  return (
    <nav.Navigator {...navigatorOptions[name]}>
      <nav.Screen {...HomeScreen} />
    </nav.Navigator>
  );
};

export const HomeStackNav = {
  component: Screen,
  name,
};
