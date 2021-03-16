import React, {useCallback, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import pushNotificationService from '../../../backend/notification/PushNotificationService';
import {Description, TextButton, Title} from '../../basics';
import FormInput from './FormInput';

type Props = {
  deviceToken?: string;
};

const TopicNotificationForm: React.FC<Props> = ({deviceToken}) => {
  const [topicName, setTopicName] = useState<string>();
  const [topicTitle, setTopicTitle] = useState<string>();
  const [topicText, setTopicText] = useState<string>();
  const [sendTopicName, setSendTopicName] = useState<string>();
  const [topicNameError, setTopicNameError] = useState<string>();

  const subscribeToTopic = useCallback(() => {
    setTopicNameError(undefined);
    if (!deviceToken) {
      Alert.alert('通知を許可してください');
      return;
    }
    if (topicName) {
      pushNotificationService.subscribeToTopic(topicName, deviceToken).catch((e) => {
        setTopicNameError(`トピック ${topicName} の登録に失敗しました`);
        console.warn(`fail to subscribe topic [${topicName}]`, e);
      });
    } else {
      setTopicNameError('トピック名は必須です');
    }
  }, [topicName, deviceToken]);

  const unsubscribeFromTopic = useCallback(() => {
    if (topicName && deviceToken) {
      pushNotificationService.unsubscribeFromTopic(topicName, deviceToken).catch((e) => {
        console.warn(`fail to unsubscribe topic [${topicName}]`, e);
      });
    }
  }, [topicName, deviceToken]);

  const sendTopic = useCallback(() => {
    if (sendTopicName && topicTitle && topicText) {
      pushNotificationService.sendTopic({
        topic: sendTopicName,
        notification: {title: topicTitle, body: topicText},
        data: {text: topicText},
      });
    } else {
      Alert.alert('トピック名、タイトル、本文は必須です');
    }
  }, [sendTopicName, topicTitle, topicText]);

  return (
    <>
      <Title style={styles.formHeader}>指定したトピックを購読する全ての端末へ{'\n'}プッシュ通知を送信する例</Title>
      <Description>
        指定したトピックを購読している端末へプッシュ通知を送信するためには、Firebaseに対して購読したいトピックを登録する必要があります。この購読登録は、クライアントアプリ側、バックエンドサーバー側のどちらからでもFirebaseに登録可能です。
        {'\n\n'}
        以下の「この端末で購読するトピックを追加」ボタンを押すと、指定したトピック名でFirebaseに購読登録できます。その後に、「指定したトピックにプッシュ通知を送信」ボタンを押すと、そのトピックを購読している端末全てにプッシュ通知が届きます。
      </Description>
      <FormInput
        label="購読するトピック名(英数字のみ)"
        value={topicName}
        onChangeText={(value) => setTopicName(value)}
        placeholder="購読するトピック名を英数字で入力してください"
        error={topicNameError}
      />
      <TextButton onPress={subscribeToTopic} value="この端末で購読するトピックを追加" />
      <TextButton onPress={unsubscribeFromTopic} value="この端末で購読するトピックから削除" />
      <FormInput
        label="通知メッセージの送信先トピック名(英数字)"
        value={sendTopicName}
        onChangeText={(value) => setSendTopicName(value)}
        placeholder="メッセージを送信したいトピック名を入力してください"
      />
      <FormInput
        label="通知メッセージタイトル"
        value={topicTitle}
        onChangeText={(value) => setTopicTitle(value)}
        placeholder="通知メッセージのタイトルを入力してください"
      />
      <FormInput
        label="通知メッセージ本文"
        value={topicText}
        onChangeText={(value) => setTopicText(value)}
        placeholder="通知メッセージの本文を入力してください"
      />
      <TextButton onPress={sendTopic} value="指定したトピックにプッシュ通知を送信する" />
    </>
  );
};

const styles = StyleSheet.create({
  formHeader: {
    height: 48,
  },
});

export default TopicNotificationForm;
