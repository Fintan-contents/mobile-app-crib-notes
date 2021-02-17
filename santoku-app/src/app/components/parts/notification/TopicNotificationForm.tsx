import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Description, TextButton, Title} from '../../basics';
import FormInput from './FormInput';

const TopicNotificationForm: React.FC = () => {
  const [topicName, setTopicName] = useState('');
  const [topicTitle, setTopicTitle] = useState('');
  const [topicText, setTopicText] = useState('');
  const [sendTopicName, setSendTopicName] = useState('');

  return (
    <>
      <Title style={styles.formHeader}>指定したトピックを購読する全ての端末へ{'\n'}プッシュ通知を送信する例</Title>
      <Description>
        指定したトピックを購読している端末へプッシュ通知を送信するためには、Firebaseに対して購読したいトピックを登録する必要があります。この購読登録は、クライアントアプリ側、バックエンドサーバー側のどちらからでもFirebaseに登録可能です。
        {'\n\n'}
        以下の「この端末で購読するトピックを追加」ボタンを押すと、指定したトピック名でFirebaseに購読登録できます。その後に、「指定したトピックにプッシュ通知を送信」ボタンを押すと、そのトピックを購読している端末全てにプッシュ通知が届きます。
      </Description>
      <FormInput
        label="追加購読するトピック名"
        value={topicName}
        onChangeText={(value) => setTopicName(value)}
        placeholder="購読したいトピック名を入力してください"
      />
      <TextButton
        onPress={() => {
          return true;
        }}
        value="この端末で購読するトピックを追加"
      />
      <FormInput
        label="通知メッセージの送信先トピック名"
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
      <TextButton
        onPress={() => {
          return true;
        }}
        value="指定したトピックにプッシュ通知を送信する"
      />
    </>
  );
};

const styles = StyleSheet.create({
  formHeader: {
    height: 48,
  },
});

export default TopicNotificationForm;
