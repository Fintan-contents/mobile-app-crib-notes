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

import {NativeStackNavigationOptions, NativeStackScreenProps} from '@react-navigation/native-stack';
import {setStatusBarStyle} from 'expo-status-bar';
import {QuestionAndEventPostPage} from 'features/qa-post/pages/QuestionAndEventPostPage';
import React, {useCallback, useEffect} from 'react';
import {Platform} from 'react-native';

import {QuestionAndEventPostStackParamList} from '../../navigators/types';

export const QuestionAndEventPostScreen: React.FC<
  NativeStackScreenProps<QuestionAndEventPostStackParamList, 'QuestionAndEventPost'>
> = ({navigation}) => {
  const setNavigationOptions = useCallback(
    (options: NativeStackNavigationOptions) => navigation.setOptions(options),
    [navigation],
  );
  useEffect(() => {
    return navigation.addListener('focus', () => {
      if (Platform.OS === 'android') {
        setStatusBarStyle('dark');
      }
    });
  }, [navigation]);
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  return <QuestionAndEventPostPage setNavigationOptions={setNavigationOptions} goBack={goBack} />;
};
