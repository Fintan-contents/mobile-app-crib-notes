import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';

import {usePushNotification} from './usePushNotification';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const ScreenName = 'PushNotification';
const Screen: React.FC<Props> = ({navigation}) => {
  const {
    authStatus,
    token,
    requestUserPermission,
    getToken,
    registerFcmToken,
    removeFcmToken,
    notifyMessageToAll,
    notifyMessageToMe,
  } = usePushNotification();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>【Permissionのステータス】</Text>
          <Text>{authStatus ?? 'Permissionのステータスが表示されます'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={requestUserPermission} title="Permissionの許可" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【FCM登録トークン】</Text>
          <Text selectable>{token ?? 'FCM登録トークンが表示されます'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={getToken} title="FCM登録トークンの取得" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={registerFcmToken} title="FCM登録トークンをバックエンドに登録" />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={removeFcmToken} title="FCM登録トークンをバックエンドから削除" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【通知メッセージ】</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={notifyMessageToAll} title="Pushメッセージ一斉送信" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={notifyMessageToMe} title="Pushメッセージを自分に送信" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const PushNotificationScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  notificationMessageContainer: {},
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});
