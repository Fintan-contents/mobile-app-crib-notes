import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@shopify/restyle';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import {m} from 'bases/message/Message';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React, {useMemo} from 'react';

import {useMainTabNav} from './MainTabNav';
import {QuestionAndEventPostStackNav} from './QuestionAndEventPostStackNav';
import {AuthenticatedStackParamList} from './types';
import {withInitialData} from '../components/withInitialData';
import {QuestionDetailScreen} from '../screens/qa-question/QuestionDetailScreen';

const nav = createNativeStackNavigator<AuthenticatedStackParamList>();

const getInitialRouteName = (initialData: AppInitialData): keyof AuthenticatedStackParamList => {
  return 'MainTabNav';
};

type Props = {
  initialData: AppInitialData;
};
const Component: React.FC<Props> = ({initialData}) => {
  const initialRouteName = useMemo(() => getInitialRouteName(initialData), [initialData]);
  const mainTabNav = useMainTabNav(initialData);
  const theme = useTheme<RestyleTheme>();

  return (
    <nav.Navigator initialRouteName={initialRouteName}>
      <nav.Screen
        name="MainTabNav"
        component={mainTabNav}
        options={{
          headerShown: false,
        }}
      />
      <nav.Screen
        component={QuestionDetailScreen}
        name="QuestionDetail"
        options={{
          title: m('質問詳細'),
          headerStyle: {backgroundColor: theme.colors.orange1},
          contentStyle: {backgroundColor: theme.colors.orange2},
          headerTitleStyle: {fontSize: 20, fontWeight: '500'},
          headerTintColor: theme.colors.white,
          headerBackTitleVisible: false,
        }}
      />
      <nav.Screen
        name="QuestionAndEventStackNav"
        component={QuestionAndEventPostStackNav}
        options={{presentation: 'modal', headerShown: false}}
      />
    </nav.Navigator>
  );
};

export const useAuthenticatedStackNav = (initialData: AppInitialData) => {
  return useMemo(() => withInitialData(initialData, Component), [initialData]);
};
