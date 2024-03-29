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

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList} from 'apps/app/navigators/types';
import {ReactQueryDemoPage} from 'features/demo-react-query/pages/ReactQueryDemoPage';
import React, {useCallback} from 'react';

export const ReactQueryDemoScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'ReactQueryDemo'>> = ({
  navigation,
}) => {
  const navigateToGetAccountsMeDemo = useCallback(() => navigation.navigate('GetAccountsMeDemo'), [navigation]);
  const navigateToSearchFormTodoDemo = useCallback(() => navigation.navigate('SearchFormTodoDemo'), [navigation]);
  const navigateToSearchBarTodoDemo = useCallback(() => navigation.navigate('SearchBarTodoDemo'), [navigation]);
  const navigateToDependentQueryDemo1 = useCallback(() => navigation.navigate('DependentQueryDemo1'), [navigation]);
  const navigateToDependentQueryDemo2 = useCallback(() => navigation.navigate('DependentQueryDemo2'), [navigation]);
  const navigateToDependentQueryDemo3 = useCallback(() => navigation.navigate('DependentQueryDemo3'), [navigation]);
  const navigateToListTodoDemo = useCallback(() => navigation.navigate('ListTodoDemo'), [navigation]);
  const navigateToDisabledQueryDemo = useCallback(() => navigation.navigate('DisabledQueryDemo'), [navigation]);
  const navigateToDisableErrorHandlerDemo = useCallback(
    () => navigation.navigate('DisableErrorHandlerDemo'),
    [navigation],
  );
  return (
    <ReactQueryDemoPage
      navigateToGetAccountsMeDemo={navigateToGetAccountsMeDemo}
      navigateToSearchFormTodoDemo={navigateToSearchFormTodoDemo}
      navigateToSearchBarTodoDemo={navigateToSearchBarTodoDemo}
      navigateToDependentQueryDemo1={navigateToDependentQueryDemo1}
      navigateToDependentQueryDemo2={navigateToDependentQueryDemo2}
      navigateToDependentQueryDemo3={navigateToDependentQueryDemo3}
      navigateToListTodoDemo={navigateToListTodoDemo}
      navigateToDisabledQueryDemo={navigateToDisabledQueryDemo}
      navigateToDisableErrorHandlerDemo={navigateToDisableErrorHandlerDemo}
    />
  );
};
