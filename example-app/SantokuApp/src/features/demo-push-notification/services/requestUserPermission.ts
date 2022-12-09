import messaging from '@react-native-firebase/messaging';
import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

export const requestUserPermission = (options?: FirebaseMessagingTypes.IOSPermissions) =>
  messaging().requestPermission(options);
