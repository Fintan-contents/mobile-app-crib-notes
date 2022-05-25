import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

export interface AppInitialData {
  notification?: FirebaseMessagingTypes.RemoteMessage;
}
