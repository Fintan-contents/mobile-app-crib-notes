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
import {setStatusBarStyle} from 'expo-status-bar';
import {ProfileDetailPage} from 'features/account/pages/ProfileDetailPage';
import React, {useCallback, useEffect} from 'react';

import {RootStackParamList, AccountStackParamList} from '../../navigators/types';

export const ProfileDetailScreen: React.FC<
  CompositeScreenProps<
    NativeStackScreenProps<AccountStackParamList, 'ProfileDetail'>,
    NativeStackScreenProps<RootStackParamList, 'DemoStackNav'>
  >
> = ({navigation}) => {
  const navigateToDemo = useCallback(() => navigation.navigate('DemoStackNav', {screen: 'DemoMenu'}), [navigation]);
  useEffect(() => {
    return navigation.addListener('focus', () => {
      setStatusBarStyle('dark');
    });
  }, [navigation]);
  return <ProfileDetailPage navigateToDemo={navigateToDemo} />;
};
