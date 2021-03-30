import React, {useEffect, useState} from 'react';
import {Container, Description, KeyboardAvoidingView} from '../../basics';
import DeviceTokenNotificationForm from '../../parts/notification/DeviceTokenNotificationForm';
import TopicNotificationForm from '../../parts/notification/TopicNotificationForm';
import {useIsMounted} from '../../../../framework/hooks/useIsMounted';
import pushNotificationService from '../../../backend/notification/PushNotificationService';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

const PushNotification: React.FC = () => {
  const [deviceToken, setDeviceToken] = useState<string>();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!deviceToken) {
      return;
    }
    // アプリ起動後、アプリが非アクティブな時にメッセージを受信した場合の処理を登録
    messaging().onNotificationOpenedApp((remoteMessage) => {
      Alert.alert(
        'アプリが非アクティブな間にリモート通知を受信しました',
        JSON.stringify({
          notification: remoteMessage.notification,
          data: remoteMessage.data,
        }),
      );
    });
    // アプリを起動する前に受信していたメッセージがあったか確認
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          Alert.alert(
            'アプリが起動されていない間にリモート通知を受信しました',
            JSON.stringify({
              notification: remoteMessage.notification,
              data: remoteMessage.data,
            }),
          );
        }
      });
    return messaging().onMessage((message) => {
      Alert.alert(
        'アプリの起動中にリモート通知を受信しました',
        JSON.stringify({
          notification: message.notification,
          data: message.data,
        }),
      );
    });
  }, [deviceToken]);

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
