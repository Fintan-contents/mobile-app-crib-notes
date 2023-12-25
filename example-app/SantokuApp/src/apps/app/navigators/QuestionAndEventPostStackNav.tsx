/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
