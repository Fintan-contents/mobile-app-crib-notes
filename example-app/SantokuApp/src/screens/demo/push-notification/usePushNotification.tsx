import messaging from '@react-native-firebase/messaging';
import axios, {AxiosError} from 'axios';
import {useCallback, useState} from 'react';

import {accountApi, AppConfig} from '../../../framework';
import {ApiResponseError} from '../../../framework/backend';
import {ErrorResponse} from '../../../generated/api';

type AuthStatusType = 'NOT_DETERMINED' | 'DENIED' | 'AUTHORIZED' | 'PROVISIONAL';

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

  const registerFcmToken = useCallback(async () => {
    try {
      await accountApi.postAccountsMeDeviceTokenAdd({deviceToken: token});
      alert('FCM登録トークンをバックエンドに新規登録または更新しました');
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      alert(e);
    }
  }, [token]);

  const removeFcmToken = useCallback(async () => {
    try {
      await accountApi.postAccountsMeDeviceTokenRemove({deviceToken: token});
      alert('FCM登録トークンをバックエンドから削除しました');
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      alert(e);
    }
  }, [token]);

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
    registerFcmToken,
    removeFcmToken,
    notifyMessageToAll,
    notifyMessageToMe,
  };
};
