import messaging from '@react-native-firebase/messaging';
import {useSnackbar} from 'components/overlay';
import {useAccountContext} from 'context/useAccountContext';
import {getFcmToken, isGetFcmTokenError, isRequestPushPermissionError, requestPushPermission} from 'framework/firebase';
import {log} from 'framework/logging';
import {m} from 'framework/message';
import {useCallback} from 'react';
import {usePostAccountsMeDeviceToken} from 'service';

export const useRequestPermissionAndRegisterToken = () => {
  const {mutateAsync: callPostAccountsMeDeviceToken} = usePostAccountsMeDeviceToken();
  const snackbar = useSnackbar();
  const accountContext = useAccountContext();

  const requestPermissionAndRegisterToken = useCallback(async () => {
    try {
      const authStatus = await requestPushPermission();
      if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        const fcmToken = await getFcmToken();
        // ログイン後は必ずアカウント情報が存在している
        // アカウント情報にFCM登録トークンが含まれていない場合は、FCM登録トークンを登録する
        if (fcmToken && !accountContext.account!.deviceTokens.includes(fcmToken)) {
          await callPostAccountsMeDeviceToken({data: {newDeviceToken: fcmToken}});
        }
      }
    } catch (e) {
      // Push通知のパーミッションリクエストに失敗した場合、Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isRequestPushPermissionError(e)) {
        log.error(
          m('app.push.notification.requestPushPermissionError', String(e)),
          'app.push.notification.requestPushPermissionError',
        );
        snackbar.show(m('app.push.notification.プッシュ通知の設定エラー'));
      }
      // FCMの登録トークンの取得に失敗した場合、Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isGetFcmTokenError(e)) {
        log.error(m('app.push.notification.getFcmTokenError', String(e)), 'app.push.notification.getFcmTokenError');
        snackbar.show(m('app.push.notification.プッシュ通知の設定エラー'));
      }
    }
  }, [accountContext.account, callPostAccountsMeDeviceToken, snackbar]);

  return {
    requestPermissionAndRegisterToken,
  };
};
