import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TeamDetailScreen} from 'screens';

const nav = createNativeStackNavigator();

const name = 'TeamStackNav';
const Screen: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={TeamDetailScreen.name}>
      <nav.Screen {...TeamDetailScreen} />
    </nav.Navigator>
  );
};

export const TeamStackNav = {
  component: Screen,
  name,
};
