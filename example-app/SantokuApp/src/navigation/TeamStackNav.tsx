import {MaterialIcons} from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TeamDetailScreen} from 'screens';

import {MainTabParamList, TeamStackParamList} from './types';
import {useLogoutButton} from './useLogoutButton';

const nav = createNativeStackNavigator<TeamStackParamList>();

const ScreenName = 'TeamStackNav';
const Screen: React.FC = () => {
  const {LogoutButton} = useLogoutButton();
  return (
    <nav.Navigator screenOptions={{headerRight: LogoutButton}}>
      <nav.Screen {...TeamDetailScreen} />
    </nav.Navigator>
  );
};

export const TeamStackNav: TabScreenConfig<MainTabParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    tabBarAccessibilityLabel: 'Team',
    tabBarShowLabel: false,
    headerShown: false,
    tabBarIcon: ({color}) => <MaterialIcons name="groups" size={30} color={color} />,
  },
};
