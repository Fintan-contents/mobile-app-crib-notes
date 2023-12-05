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
import {PushNotificationSenderPage} from 'features/demo-push-notification/pages/PushNotificationSenderPage';
import React, {useCallback} from 'react';

import {DemoStackParamList} from '../../navigators/types';

export const PushNotificationSenderScreen: React.FC<
  NativeStackScreenProps<DemoStackParamList, 'PushNotificationSender'>
> = ({navigation}) => {
  const navigateToPushNotificationStatus = useCallback(
    () => navigation.navigate('PushNotificationStatus'),
    [navigation],
  );
  return <PushNotificationSenderPage navigateToPushNotificationStatus={navigateToPushNotificationStatus} />;
};
