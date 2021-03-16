import React, {useCallback, useEffect, useState} from 'react';
import {Container, Description, KeyboardAvoidingView} from '../../basics';
import DeviceTokenNotificationForm from '../../parts/notification/DeviceTokenNotificationForm';
import TopicNotificationForm from '../../parts/notification/TopicNotificationForm';
import {useIsMounted} from '../../../../framework/hooks/useIsMounted';
import pushNotificationService from '../../../backend/notification/PushNotificationService';
import messaging, {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

const PushNotification: React.FC = () => {
  const [deviceToken, setDeviceToken] = useState<string>();
  const isMounted = useIsMounted();
  const [recieveData, setRecieveData] = useState<string>();

  const setRemoteMessage = useCallback(
    (remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
      if (remoteMessage && isMounted()) {
        setRecieveData(JSON.stringify({...remoteMessage.notification, data: remoteMessage.data}));
      }
    },
    [isMounted],
  );

  useEffect(() => {
    if (deviceToken) {
      messaging().onNotificationOpenedApp(setRemoteMessage);
      messaging().getInitialNotification().then(setRemoteMessage);
      return messaging().onMessage((message) => {
        Alert.alert('受信', JSON.stringify({...message.notification, data: message.data}));
      });
    }
  }, [deviceToken, isMounted, setRemoteMessage]);

  useEffect(() => {
    if (recieveData) {
      Alert.alert('受信', recieveData, [
        {
          text: 'OK',
          onPress: () => {
            setRecieveData(undefined);
          },
        },
      ]);
    }
  }, [recieveData]);

  useEffect(() => {
    if (deviceToken) {
      messaging().onSendError((event) => console.warn(event));
    }
  }, [deviceToken]);

  useEffect(() => {
    if (!deviceToken) {
      pushNotificationService.getToken().then((token) => {
        if (isMounted()) {
          setDeviceToken(token);
        }
      });
    }
  }, [isMounted, deviceToken]);

  return (
    <Container refreshing={false}>
      <KeyboardAvoidingView>
        <Description>指定した端末へプッシュ通知を送信する例と、指定したトピックを購読している端末へプッシュ通知を送信する例を示します。</Description>
        <DeviceTokenNotificationForm deviceToken={deviceToken} />
        <TopicNotificationForm deviceToken={deviceToken} />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default PushNotification;
