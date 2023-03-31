import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@shopify/restyle';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React from 'react';

import {QuestionAndEventPostStackParamList} from './types';
import {useCloseThisNavigatorButton} from './useCloseThisNavigatorButton';
import {QuestionAndEventPostScreen} from '../screens/qa-post/QuestionAndEventPostScreen';

const nav = createNativeStackNavigator<QuestionAndEventPostStackParamList>();

export const QuestionAndEventPostStackNav: React.FC = () => {
  const {CloseThisNavigatorButton} = useCloseThisNavigatorButton();
  const theme = useTheme<RestyleTheme>();
  return (
    <nav.Navigator>
      <nav.Screen
        name="QuestionAndEventPost"
        component={QuestionAndEventPostScreen}
        options={{
          headerTitle: '',
          headerLeft: CloseThisNavigatorButton,
          headerShadowVisible: false,
          contentStyle: {backgroundColor: theme.colors.white},
        }}
      />
    </nav.Navigator>
  );
};
