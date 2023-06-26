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
