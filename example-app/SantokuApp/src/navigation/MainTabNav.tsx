import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {HomeStackNav} from './HomeStackNav';
import {TeamStackNav} from './TeamStackNav';

const nav = createBottomTabNavigator();

const name = 'MainTabNav';
const Screen: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={HomeStackNav.name}>
      <nav.Screen
        {...HomeStackNav}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({color}) => <Ionicons name="md-home" size={30} color={color} />,
        }}
      />
      <nav.Screen
        {...TeamStackNav}
        options={{
          title: 'Team',
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
