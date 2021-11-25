import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useInitializeContext} from 'components/initialize';
import React from 'react';
import {TeamDetailScreen} from 'screens';

const nav = createNativeStackNavigator();

const name = 'TeamStackNav';
const Screen: React.FC = () => {
  const {navigatorOptions} = useInitializeContext();
  return (
    <nav.Navigator {...navigatorOptions[name]}>
      <nav.Screen {...TeamDetailScreen} />
    </nav.Navigator>
  );
};

export const TeamStackNav = {
  component: Screen,
  name,
};
