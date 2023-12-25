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

import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect} from 'react';

import {NavigationParameter, RootStackParamList} from '../navigators/types';
import {AppInitialData} from '../types/AppInitialData';
import {useRegisterNotificationMessageListener} from '../use-cases/useRegisterNotificationMessageListener';
import {useRegisterNotificationOnOpenedAppListener} from '../use-cases/useRegisterNotificationOnOpenedAppListener';

type Props = {
  initialData: AppInitialData;
};

const getNavigateToScreen = (
  message: FirebaseMessagingTypes.RemoteMessage,
  initialData: AppInitialData,
): NavigationParameter<RootStackParamList, 'AuthenticatedStackNav'> => {
  return ['AuthenticatedStackNav', {screen: 'MainTabNav', params: {screen: 'HomeStackNav', params: {screen: 'Home'}}}];
};

export const FirebaseMessagingHandlers: React.FC<React.PropsWithChildren<Props>> = ({children, initialData}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigateIfRequired = useCallback(
    (message: FirebaseMessagingTypes.RemoteMessage, initialData: AppInitialData) => {
      const to = getNavigateToScreen(message, initialData);
      navigation.navigate(...to);
    },
    [navigation],
  );

  const {registerNotificationMessageListener} = useRegisterNotificationMessageListener();
  const {registerNotificationOnOpenedAppListener} = useRegisterNotificationOnOpenedAppListener(
    initialData,
    navigateIfRequired,
  );

  useEffect(() => {
    return registerNotificationMessageListener();
  }, [registerNotificationMessageListener]);

  useEffect(() => {
    return registerNotificationOnOpenedAppListener();
  }, [registerNotificationOnOpenedAppListener]);

  return <>{children}</>;
};
