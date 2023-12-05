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

import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'apps/app/navigators/types';
import {NavigationPage} from 'features/demo-navigation/pages/NavigationPage';
import React, {useCallback} from 'react';

type NavigationScreenProps = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, 'Navigation'>,
  NativeStackScreenProps<RootStackParamList>
>;
export const NavigationScreen: React.FC<NavigationScreenProps> = ({navigation}) => {
  const navigateToSnackbarDemo = useCallback(() => navigation.navigate('Snackbar'), [navigation]);
  const navigateToHomeStack = useCallback(
    () => navigation.navigate('AuthenticatedStackNav', {screen: 'MainTabNav', params: {screen: 'HomeStackNav'}}),
    [navigation],
  );
  const navigateToAccountStack = useCallback(
    () => navigation.navigate('AuthenticatedStackNav', {screen: 'MainTabNav', params: {screen: 'AccountStackNav'}}),
    [navigation],
  );
  return (
    <NavigationPage
      navigateToSnackbarDemo={navigateToSnackbarDemo}
      navigateToHomeStack={navigateToHomeStack}
      navigateToAccountStack={navigateToAccountStack}
    />
  );
};
