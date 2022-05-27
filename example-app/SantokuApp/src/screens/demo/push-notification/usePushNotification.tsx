import messaging from '@react-native-firebase/messaging';
import axios, {AxiosError} from 'axios';
import {AppConfig} from 'framework/config';
import {ErrorResponse} from 'generated/backend/model';
import {useCallback, useState} from 'react';
import {Linking, Platform} from 'react-native';

type AuthStatusType = 'NOT_DETERMINED' | 'DENIED' | 'AUTHORIZED' | 'PROVISIONAL';

const openSettings = async () => {
  if (Platform.OS === 'ios') {
    // アプリの設定画面を開きます。
    await Linking.openSettings();
  } else if (Platform.OS === 'android') {
    // 以下のようにLinking.sendIntentを使用することで、アプリの通知設定画面を表示できる想定でした。
    // https://reactnative.dev/docs/linking#send-intents-android
    // しかし、React Nativeの0.67未満では、Linking.sendIntentの不具合により、インテントを実行できないようです。
    // https://github.com/facebook/react-native/pull/29000
    // そのため、アプリの設定画面を開きます。
    await Linking.openSettings();
  }
};

export const usePushNotification = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatusType>();
  const [token, setToken] = useState<string>();

  const requestUserPermission = useCallback(async () => {
    const authStatus = await messaging().requestPermission();
    switch (authStatus) {
      case messaging.AuthorizationStatus.NOT_DETERMINED:
        setAuthStatus('NOT_DETERMINED');
        break;
      case messaging.AuthorizationStatus.DENIED:
        setAuthStatus('DENIED');
        break;
      case messaging.AuthorizationStatus.AUTHORIZED:
        setAuthStatus('AUTHORIZED');
        break;
      case messaging.AuthorizationStatus.PROVISIONAL:
        setAuthStatus('PROVISIONAL');
        break;
    }
  }, []);

  const getToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    setToken(fcmToken);
  }, []);

  const notifyMessageToAll = useCallback(async () => {
    try {
      await axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/all`);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          alert(axiosError.response.data.message);
          return;
        }
        alert(e);
      }
    }
  }, []);

  const notifyMessageToMe = useCallback(async () => {
    if (token) {
      try {
        await axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/single/${token}`);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const axiosError = e as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            alert(axiosError.response.data.message);
            return;
          }
          alert(e);
        }
      }
      return;
    }
    alert('FCM登録トークンを取得してください');
  }, [token]);

  return {
    authStatus,
    token,
    requestUserPermission,
    getToken,
    notifyMessageToAll,
    notifyMessageToMe,
    openSettings,
  };
};
