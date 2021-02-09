import React from 'react';
import { Container, Description, KeyboardAvoidingView } from '../../basics';
import DeviseTokenNotificationForm from '../../parts/notification/DeviseTokenNotificationForm';
import TopicNotificationForm from '../../parts/notification/TopicNotificationForm';

const PushNotification: React.FC = () => {
  return (
    <Container refreshing={false}>
      <KeyboardAvoidingView>
        <Description>指定した端末へプッシュ通知を送信する例と、指定したトピックを購読している端末へプッシュ通知を送信する例を示します。</Description>
        <DeviseTokenNotificationForm />
        <TopicNotificationForm />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default PushNotification;
