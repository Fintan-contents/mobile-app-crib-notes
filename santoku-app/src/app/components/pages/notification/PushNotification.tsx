import React, {useEffect, useState} from 'react';
import {Container, Description, KeyboardAvoidingView} from '../../basics';
import DeviseTokenNotificationForm from '../../parts/notification/DeviseTokenNotificationForm';
import TopicNotificationForm from '../../parts/notification/TopicNotificationForm';
import {useIsMounted} from '../../../../framework/hooks/useIsMounted';
import {pushNotificationService} from '../../../backend/notification/PushNotificationService';

const PushNotification: React.FC = () => {
  const [deviseToken, setDeviseToken] = useState<string>();
  const isMounted = useIsMounted();
  useEffect(() => {
    if (!deviseToken) {
      pushNotificationService.getToken().then((token) => {
        if (isMounted()) {
          setDeviseToken(token);
        }
      });
    }
  }, [isMounted, deviseToken]);

  return (
    <Container refreshing={false}>
      <KeyboardAvoidingView>
        <Description>指定した端末へプッシュ通知を送信する例と、指定したトピックを購読している端末へプッシュ通知を送信する例を示します。</Description>
        <DeviseTokenNotificationForm deviseToken={deviseToken} />
        <TopicNotificationForm deviseToken={deviseToken} />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default PushNotification;
