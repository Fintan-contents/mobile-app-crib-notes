import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from 'screens';

const nav = createNativeStackNavigator();

const name = 'HomeStackNav';
const Screen: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={HomeScreen.name}>
      <nav.Screen {...HomeScreen} />
    </nav.Navigator>
  );
};

export const HomeStackNav = {
  component: Screen,
  name,
};
