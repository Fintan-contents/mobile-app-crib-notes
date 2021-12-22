import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useInitializeContext} from 'components/initialize';
import React from 'react';

import {HomeStackNav} from './HomeStackNav';
import {TeamStackNav} from './TeamStackNav';

const nav = createBottomTabNavigator();

const name = 'MainTabNav';
const Screen: React.FC = () => {
  const {navigatorOptions} = useInitializeContext();
  return (
    <nav.Navigator {...navigatorOptions[name]}>
      <nav.Screen
        {...HomeStackNav}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color}) => <Ionicons name="md-home" size={30} color={color} />,
        }}
      />
      <nav.Screen
        {...TeamStackNav}
        options={{
          tabBarAccessibilityLabel: 'Team',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color}) => <MaterialIcons name="groups" size={30} color={color} />,
        }}
      />
    </nav.Navigator>
  );
};

export const MainTabNav = {
  component: Screen,
  name,
  options: {
    headerShown: false,
  },
};
