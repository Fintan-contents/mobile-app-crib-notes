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

import messaging from '@react-native-firebase/messaging';
import {getFcmToken} from 'bases/firebase/messaging/getFcmToken';
import {requestPushPermission} from 'bases/firebase/messaging/requestPushPermission';
import {useAccountCommands} from 'features/account/services/account/useAccountCommands';
import {useAccountData} from 'features/account/services/account/useAccountData';
import {useCallback} from 'react';

export const useRequestPermissionAndRegisterToken = () => {
  const {accountData} = useAccountData();
  const {updateDeviceToken} = useAccountCommands();
  const requestPermissionAndRegisterToken = useCallback(async () => {
    const authStatus = await requestPushPermission();
    if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      const fcmToken = await getFcmToken();
      // ログイン後は必ずアカウント情報が存在している
      // アカウント情報にFCM登録トークンが含まれていない場合は、FCM登録トークンを登録する
      if (fcmToken && !accountData!.account.deviceTokens.includes(fcmToken)) {
        await updateDeviceToken({newDeviceToken: fcmToken});
      }
    }
  }, [accountData, updateDeviceToken]);
  return {requestPermissionAndRegisterToken};
};
