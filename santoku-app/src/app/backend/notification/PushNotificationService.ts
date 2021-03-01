import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import {Alert} from 'react-native';
import {AppConfig} from '../../AppConfig';

export interface PushNotificationService {
  getToken: () => Promise<string | undefined>;
  subscribeToTopic: (topic: string, token: string) => Promise<any>;
  unsubscribeFromTopic: (topic: string, token: string) => Promise<any>;
  sendMessage: (message: Message) => Promise<any>;
  sendTopic: (message: Publish) => Promise<any>;
}

async function getToken(): Promise<string | undefined> {
  const permission = await messaging().hasPermission();
  if (canNotify(permission)) {
    return messaging().getToken();
  }
  if (permission === messaging.AuthorizationStatus.DENIED) {
    return undefined;
  }
  const newPermission = await messaging().requestPermission();
  if (canNotify(newPermission)) {
    return messaging().getToken();
  }
  return undefined;
}

function canNotify(permission: number) {
  return permission === messaging.AuthorizationStatus.AUTHORIZED || permission === messaging.AuthorizationStatus.PROVISIONAL;
}

function subscribeToTopic(topic: string, token: string) {
  return post('/subscribe', {topic, token});
}

function unsubscribeFromTopic(topic: string, token: string) {
  return post('/unsubscribe', {topic, token});
}

function sendMessage(message: Message) {
  return post('/messages', message);
}

function sendTopic(message: Publish) {
  return post('/publish', message);
}

function post(path: string, message: any) {
  if (!AppConfig.BACKEND_API_URI || !AppConfig.BACKEND_API_KEY) {
    Alert.alert('設定に不備があります', 'SANROKU_BACKEND_APIのURI & KEY は必須です。');
    return Promise.reject('BACKEND_API_URI or BACKEND_API_KEY is not set');
  }
  return axios.post(`${AppConfig.BACKEND_API_URI}/${path}`, JSON.stringify(message), {
    headers: {
      'x-functions-key': AppConfig.BACKEND_API_KEY,
      'Content-Type': 'application/json',
    },
  });
}

type Notification = {
  title: string;
  body: string;
};

type Data = {
  text: string;
};

type BaseMessage = {
  notification: Notification;
  data: Data;
  delay?: number;
};

export type Publish = {
  topic: string;
} & BaseMessage;

export type Message = {
  token: string;
} & BaseMessage;

/**
 * Backendにsantoku-app-backendを利用する場合のサービス
 */
export const santokuNotificationService: PushNotificationService = {
  getToken,
  subscribeToTopic,
  unsubscribeFromTopic,
  sendMessage,
  sendTopic,
};

/**
 * BackendにFCMだけがいる場合のサービス.
 */
export const FCMNotificationService: PushNotificationService = {
  getToken,
  subscribeToTopic: (topic, _) => messaging().subscribeToTopic(topic),
  unsubscribeFromTopic: (topic, _) => messaging().unsubscribeFromTopic(topic),
  sendMessage: (message) => messaging().sendMessage({notification: message.notification, to: message.token, data: message.data}),
  sendTopic: (message) => messaging().sendMessage({notification: message.notification, from: message.topic, data: message.data}),
};
export default santokuNotificationService;

/* FCMサービスを離床する場合は以下に切り替えると利用側のimportの変更は不要 */
// export default FCMNotificationService
