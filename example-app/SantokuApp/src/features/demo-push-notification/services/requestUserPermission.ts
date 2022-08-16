import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = () => messaging().requestPermission();
