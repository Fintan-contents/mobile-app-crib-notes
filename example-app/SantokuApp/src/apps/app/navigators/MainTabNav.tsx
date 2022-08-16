import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import React, {useMemo} from 'react';

import {HomeStackNav} from './HomeStackNav';
import {TeamStackNav} from './TeamStackNav';
import {MainTabParamList} from './types';

const nav = createBottomTabNavigator<MainTabParamList>();

const getInitialRouteName = (initialData: AppInitialData): keyof MainTabParamList => {
  return 'HomeStackNav';
};
type Props = {
  initialData: AppInitialData;
};
export const MainTabNav: React.FC<Props> = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color}) => <Ionicons name="md-home" size={30} color={color} />,
        }}
      />
      <nav.Screen
        name="TeamStackNav"
        component={TeamStackNav}
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
