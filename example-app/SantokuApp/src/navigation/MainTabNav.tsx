import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {InitialDataDependingComponent, withInitialData} from 'framework/initialize';
import {AppInitialData} from 'framework/initialize/types';
import React, {useMemo} from 'react';

import {HomeStackNav} from './HomeStackNav';
import {TeamStackNav} from './TeamStackNav';
import {AuthenticatedStackParamList, MainTabParamList} from './types';

const nav = createBottomTabNavigator<MainTabParamList>();

const ScreenName = 'MainTabNav';
export const MainTabNav = {
  name: ScreenName as typeof ScreenName,
};
const getInitialRouteName = (initialData: AppInitialData) => {
  return HomeStackNav.name;
};
const Component: InitialDataDependingComponent = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen {...HomeStackNav} />
      <nav.Screen {...TeamStackNav} />
    </nav.Navigator>
  );
};

export const useMainTabNav: (
  initialData: AppInitialData,
) => NativeStackScreenConfig<AuthenticatedStackParamList, typeof ScreenName> = initialData => {
  return useMemo(
    () => ({
      component: withInitialData(initialData, Component),
      name: MainTabNav.name,
      options: {
        headerShown: false,
      },
    }),
    [initialData],
  );
};
