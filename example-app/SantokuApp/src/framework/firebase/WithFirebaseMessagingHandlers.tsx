import messaging from '@react-native-firebase/messaging';
import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect} from 'react';

import {useSnackbar} from '../../components/overlay';
import {AuthenticatedStackNav} from '../../navigation/AuthenticatedStackNav';
import {HomeStackNav} from '../../navigation/HomeStackNav';
import {MainTabNav} from '../../navigation/MainTabNav';
import {NavigationParameter, RootStackParamList} from '../../navigation/types';
import {HomeScreen} from '../../screens';
import {AppInitialData} from '../initialize/types';
import {InitialDataDependingComponent} from '../initialize/withInitialData';

const showMessageOnSnackbar = (
  message: FirebaseMessagingTypes.RemoteMessage,
  snackbar: ReturnType<typeof useSnackbar>,
) => {
  if (message.notification) {
    // アプリ操作中に受信した場合は通知内容をスナックバーに表示し、通知データに応じた処理は行わない
    const snackBarText = message.notification.body ?? message.notification.title;
    if (snackBarText) {
      snackbar.show(snackBarText);
    }
  }
};

const getNavigateToScreen = (
  message: FirebaseMessagingTypes.RemoteMessage,
  initialData: AppInitialData,
): NavigationParameter<RootStackParamList> => {
  return [
    AuthenticatedStackNav.name,
    {screen: MainTabNav.name, params: {screen: HomeStackNav.name, params: {screen: HomeScreen.name}}},
  ];
};

const navigateIfRequired = (
  message: FirebaseMessagingTypes.RemoteMessage,
  initialData: AppInitialData,
  navigation: NativeStackNavigationProp<RootStackParamList>,
) => {
  const to = getNavigateToScreen(message, initialData);
  navigation.navigate(...to);
};

export const WithFirebaseMessagingHandlers: InitialDataDependingComponent = ({children, initialData}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const snackbar = useSnackbar();

  // アプリを前面で操作中に通知を受信した際に行う処理
  const onMessage = useCallback(
    (message: FirebaseMessagingTypes.RemoteMessage) => showMessageOnSnackbar(message, snackbar),
    [snackbar],
  );
  useEffect(() => {
    return messaging().onMessage(onMessage);
  }, [onMessage]);

  // アプリがバックグラウンド状態の時に通知を受信し、通知領域から通知をタップしてアプリが前面に移動した際に行う処理
  const onNotificationOpenedApp = useCallback(
    (message: FirebaseMessagingTypes.RemoteMessage) => navigateIfRequired(message, initialData, navigation),
    [initialData, navigation],
  );
  useEffect(() => {
    return messaging().onNotificationOpenedApp(onNotificationOpenedApp);
  }, [onNotificationOpenedApp]);

  return <>{children}</>;
};
