import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import messaging from '@react-native-firebase/messaging';
import axios, {AxiosError} from 'axios';
import {log} from 'bases/logging';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import {ErrorResponse} from 'features/sandbox/apis/model';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-elements';

import {getFcmToken} from '../services/getFcmToken';
import {notifyMessageToAll as callNotifyMessageToAll} from '../services/notifyMessageToAll';
import {notifyMessageToMe as callNotifyMessageToMe} from '../services/notifyMessageToMe';
import {openSettings} from '../services/openSettings';
import {requestUserPermission as requestUserPermissionService} from '../services/requestUserPermission';

type PermissionAuthStatusType = 'NOT_DETERMINED' | 'DENIED' | 'AUTHORIZED' | 'PROVISIONAL';

const channels = [
  {value: undefined, label: 'No channel'},
  {value: 'emergencyChannel', label: 'Emergency notification'},
  {value: 'highChannel', label: 'High notification'},
  {value: 'middleChannel', label: 'Middle notification'},
  {value: 'lowChannel', label: 'Low notification'},
];

export const PushNotificationPage: React.FC = () => {
  const [permissionAuthStatus, setPermissionAuthStatus] = useState<PermissionAuthStatusType>();
  const [token, setToken] = useState<string>();

  const [channelKey, setChannelKey] = useState<string>();
  const onSelectedChannelChange = useCallback((selectedItem?: Item<string | undefined>) => {
    setChannelKey(selectedItem?.value);
  }, []);

  const getPermissionAuthStatusForDisplay = useCallback(
    (permissionAuthStatus: FirebaseMessagingTypes.AuthorizationStatus) => {
      switch (permissionAuthStatus) {
        case messaging.AuthorizationStatus.NOT_DETERMINED:
          return 'NOT_DETERMINED';
        case messaging.AuthorizationStatus.DENIED:
          return 'DENIED';
        case messaging.AuthorizationStatus.AUTHORIZED:
          return 'AUTHORIZED';
        case messaging.AuthorizationStatus.PROVISIONAL:
          return 'PROVISIONAL';
      }
    },
    [],
  );

  const getPermissionAuthStatus = useCallback(async () => {
    const permissionAuthStatus = await messaging().hasPermission();
    setPermissionAuthStatus(getPermissionAuthStatusForDisplay(permissionAuthStatus));
  }, [getPermissionAuthStatusForDisplay]);

  const requestUserPermission = useCallback(
    async (options?: FirebaseMessagingTypes.IOSPermissions) => {
      const permissionAuthStatus = await requestUserPermissionService(options);
      setPermissionAuthStatus(getPermissionAuthStatusForDisplay(permissionAuthStatus));
    },
    [getPermissionAuthStatusForDisplay],
  );

  const requestUserPermissionWithoutOptions = useCallback(async () => {
    await requestUserPermission();
  }, [requestUserPermission]);

  const requestUserPermissionWithProvisional = useCallback(async () => {
    await requestUserPermission({provisional: true});
  }, [requestUserPermission]);

  const getToken = useCallback(async () => {
    const fcmToken = await getFcmToken();
    setToken(fcmToken);
  }, []);

  const notifyMessageToAll = useCallback(async () => {
    try {
      await callNotifyMessageToAll(channelKey);
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
  }, [channelKey]);

  const notifyMessageToMe = useCallback(async () => {
    if (token) {
      try {
        await callNotifyMessageToMe(token, channelKey);
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
  }, [channelKey, token]);

  useEffect(() => {
    getPermissionAuthStatus().catch(e => log.trace(`Failed to get permission status. cause=[${String(e)}]`));
    getToken().catch(e => log.trace(`Failed to get token. cause=[${String(e)}]`));
  }, [getPermissionAuthStatus, getToken]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SpecAndSourceCodeLink feature="push-notification" />
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【現在のPermissionのステータス】</Text>
          <Text>{permissionAuthStatus ?? 'Permissionのステータスが表示されます'}</Text>
        </View>
        <View style={styles.elementContainer}>
          <Button onPress={requestUserPermissionWithoutOptions} title="Permissionの許可" />
        </View>
        <Text>
          一度でも許可ダイアログで許可もしくは拒否すると、それ以降はステータスを`PROVISIONAL`に変更できなくなります
        </Text>
        <View style={styles.elementContainer}>
          <Button onPress={requestUserPermissionWithProvisional} title="Permissionの仮許可" />
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【FCM登録トークン】</Text>
          <Text selectable>{token ?? ''}</Text>
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View>
          <Text>【通知メッセージ】</Text>
          <View style={styles.elementContainer}>
            <SelectPicker
              items={channels}
              selectedItemKey={channelKey}
              onSelectedItemChange={onSelectedChannelChange}
              placeholder="チャンネルを選択してください"
              textInputProps={{style: {borderBottomWidth: 1, borderBottomColor: 'gray'}}}
            />
          </View>
          <View style={styles.elementContainer}>
            <Button onPress={notifyMessageToAll} title="Pushメッセージ一斉送信" />
          </View>
          <View style={styles.elementContainer}>
            <Button onPress={notifyMessageToMe} title="Pushメッセージを自分に送信" />
          </View>
        </View>
        <View>
          <Text>【通知設定】</Text>
          <Text>OSのアプリ設定画面に遷移します</Text>
          <View style={styles.elementContainer}>
            <Button onPress={openSettings} title="アプリの設定画面を開く" />
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
  elementContainer: {
    padding: 20,
  },
});
