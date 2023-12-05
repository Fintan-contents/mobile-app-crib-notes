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

import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@shopify/restyle';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React from 'react';

import {HomeStackParamList} from './types';
import {HomeScreen} from '../screens/qa-home/HomeScreen';

// FIXME: Bottom Tabs + Native Stackでは、Androidで画面がチカチカする事象が発生したため、Stackを使用しています。
// （以下のissueではiOSでも発生すると記載されているので、確認できていないだけでiOSでも発生する可能性があります。）
// https://github.com/react-navigation/react-navigation/issues/10175
// https://github.com/software-mansion/react-native-screens/issues/1276
// https://github.com/software-mansion/react-native-screens/issues/1251
const nav = createStackNavigator<HomeStackParamList>();

export const HomeStackNav: React.FC = () => {
  const theme = useTheme<RestyleTheme>();
  return (
    <nav.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.colors.orange1},
        cardStyle: {backgroundColor: theme.colors.orange2},
      }}>
      <nav.Screen component={HomeScreen} name="Home" options={{headerTitle: ''}} />
    </nav.Navigator>
  );
};
