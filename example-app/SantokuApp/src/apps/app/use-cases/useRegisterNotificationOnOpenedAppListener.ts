import messaging, {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {useCallback} from 'react';

import {AppInitialData} from '../types/AppInitialData';

export const useRegisterNotificationOnOpenedAppListener = (
  initialData: AppInitialData,
  navigateIfRequired: (message: FirebaseMessagingTypes.RemoteMessage, initialData: AppInitialData) => void,
) => {
  // アプリがバックグラウンド状態の時に通知を受信し、通知領域から通知をタップしてアプリが前面に移動した際に行う処理
  const listener = useCallback(
    (message: FirebaseMessagingTypes.RemoteMessage) => navigateIfRequired(message, initialData),
    [initialData, navigateIfRequired],
  );
  const registerNotificationOnOpenedAppListener = useCallback(() => {
    return messaging().onNotificationOpenedApp(listener);
  }, [listener]);
  return {registerNotificationOnOpenedAppListener};
};
