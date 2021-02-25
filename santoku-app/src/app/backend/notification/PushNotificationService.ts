import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import messaging from '@react-native-firebase/messaging';

export interface PushNotificationService {
  getToken: () => Promise<string | undefined>;
  subscribeToTopic: (topic: string) => Promise<void>;
  sendMessage: (message: FirebaseMessagingTypes.RemoteMessage) => Promise<void>;
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

function subscribeToTopic(topic: string) {
  return messaging().subscribeToTopic(topic);
}

function sendMessage(message: FirebaseMessagingTypes.RemoteMessage) {
  return messaging().sendMessage(message);
}

export const pushNotificationService: PushNotificationService = {
  getToken,
  subscribeToTopic,
  sendMessage,
};
