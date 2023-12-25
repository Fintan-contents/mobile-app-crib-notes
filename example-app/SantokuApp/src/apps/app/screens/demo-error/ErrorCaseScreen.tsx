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
import {ErrorCasePage} from 'features/demo-error/pages/ErrorCasePage';
import React, {useCallback} from 'react';

export const ErrorCaseScreen: React.FC<NativeStackScreenProps<DemoStackParamList, 'ErrorCase'>> = ({navigation}) => {
  const navigateToErrorInEventHandler = useCallback(() => navigation.navigate('ErrorInEventHandler'), [navigation]);
  const navigateToErrorInUseEffect = useCallback(() => navigation.navigate('ErrorInUseEffect'), [navigation]);
  const navigateToErrorInReactComponent = useCallback(() => navigation.navigate('ErrorInReactComponent'), [navigation]);
  const navigateToErrorInNativeModule = useCallback(() => navigation.navigate('ErrorInNativeModule'), [navigation]);
  return (
    <ErrorCasePage
      navigateToErrorInEventHandler={navigateToErrorInEventHandler}
      navigateToErrorInUseEffect={navigateToErrorInUseEffect}
      navigateToErrorInReactComponent={navigateToErrorInReactComponent}
      navigateToErrorInNativeModule={navigateToErrorInNativeModule}
    />
  );
};
