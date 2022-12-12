import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

export type AppInitialData = {
  notification?: FirebaseMessagingTypes.RemoteMessage;
};
