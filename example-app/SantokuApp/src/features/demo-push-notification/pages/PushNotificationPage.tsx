import messaging from '@react-native-firebase/messaging';
import axios, {AxiosError} from 'axios';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';

import {ErrorResponse} from '../../sandbox/apis/model';
import {getFcmToken} from '../services/getFcmToken';
import {notifyMessageToAll as callNotifyMessageToAll} from '../services/notifyMessageToAll';
import {notifyMessageToMe as callNotifyMessageToMe} from '../services/notifyMessageToMe';
import {openSettings} from '../services/openSettings';
import {requestUserPermission} from '../services/requestUserPermission';
import {AuthStatusType} from '../types/AuthStatusType';

export const PushNotificationPage: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatusType>();

  const [token, setToken] = useState<string>();

  const getToken = useCallback(async () => {
    const token = await getFcmToken();
    setToken(token);
  }, []);

  const notifyMessageToAll = useCallback(async () => {
    try {
      await callNotifyMessageToAll();
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          alert(axiosError.response.data.message);
          return;
        }
        alert(e);
      }
    }
  }, []);

  const notifyMessageToMe = useCallback(async () => {
    if (token) {
      try {
        await callNotifyMessageToMe(token);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const axiosError = e as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            alert(axiosError.response.data.message);
            return;
          }
          alert(e);
        }
      }
      return;
    }
    alert('FCM登録トークンを取得してください');
  }, [token]);

  const requestPermission = useCallback(async () => {
    const authStatus = await requestUserPermission();
    switch (authStatus) {
      case messaging.AuthorizationStatus.NOT_DETERMINED:
        setAuthStatus('NOT_DETERMINED');
        break;
      case messaging.AuthorizationStatus.DENIED:
        setAuthStatus('DENIED');
        break;
      case messaging.AuthorizationStatus.AUTHORIZED:
        setAuthStatus('AUTHORIZED');
        break;
      case messaging.AuthorizationStatus.PROVISIONAL:
        setAuthStatus('PROVISIONAL');
        break;
    }
  }, [setAuthStatus]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>【Permissionのステータス】</Text>
          <Text>{authStatus ?? 'Permissionのステータスが表示されます'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={requestPermission} title="Permissionの許可" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【FCM登録トークン】</Text>
          <Text selectable>{token ?? 'FCM登録トークンが表示されます'}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={getToken} title="FCM登録トークンの取得" />
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
        <View>
          <Text>【通知設定】</Text>
          <View style={styles.buttonContainer}>
            <Button onPress={openSettings} title="Push通知の設定" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
