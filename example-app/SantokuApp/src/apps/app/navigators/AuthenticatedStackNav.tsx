import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import React, {useMemo} from 'react';

import {withInitialData} from '../components/withInitialData';
import {MainTabNav} from './MainTabNav';
import {AuthenticatedStackParamList} from './types';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const getInitialRouteName = (initialData: AppInitialData): keyof AuthenticatedStackParamList => {
  return 'MainTabNav';
};

type Props = {
  initialData: AppInitialData;
};
const Component: React.FC<Props> = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen
        name="MainTabNav"
        component={MainTabNav}
        options={{
          headerShown: false,
        }}
      />
    </nav.Navigator>
  );
};

export const useAuthenticatedStackNav = (initialData: AppInitialData) => {
  return withInitialData(initialData, Component);
};
