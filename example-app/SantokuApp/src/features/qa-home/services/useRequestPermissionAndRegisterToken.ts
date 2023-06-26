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
