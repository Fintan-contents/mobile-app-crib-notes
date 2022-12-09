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
