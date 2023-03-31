import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@shopify/restyle';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import {m} from 'bases/message/Message';
import {HomeIllustration} from 'bases/ui/illustration/HomeIllustration';
import {PeopleIllustration} from 'bases/ui/illustration/PeopleIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React, {useMemo} from 'react';

import {AccountStackNav} from './AccountStackNav';
import {HomeStackNav} from './HomeStackNav';
import {MainTabParamList} from './types';
import {withInitialData} from '../components/withInitialData';

const nav = createBottomTabNavigator<MainTabParamList>();

const getInitialRouteName = (initialData: AppInitialData): keyof MainTabParamList => {
  return 'HomeStackNav';
};
type Props = {
  initialData: AppInitialData;
};
const Component: React.FC<Props> = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const theme = useTheme<RestyleTheme>();

  return (
    <nav.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarStyle: {backgroundColor: theme.colors.orange1},
      }}>
      <nav.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          tabBarAccessibilityLabel: 'Home',
          tabBarLabel: m('ホーム'),
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.grey2,
          headerShown: false,
          tabBarIcon: ({focused}) => <HomeIllustration tintColor={focused ? undefined : 'grey2'} />,
        }}
      />
      <nav.Screen
        name="AccountStackNav"
        component={AccountStackNav}
        options={{
          tabBarAccessibilityLabel: 'User',
          tabBarLabel: m('ユーザー'),
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.grey2,
          headerShown: false,
          tabBarIcon: ({focused}) => <PeopleIllustration color={focused ? 'white' : 'grey2'} />,
        }}
      />
    </nav.Navigator>
  );
};

export const useMainTabNav = (initialData: AppInitialData) => {
  return useMemo(() => withInitialData(initialData, Component), [initialData]);
};
