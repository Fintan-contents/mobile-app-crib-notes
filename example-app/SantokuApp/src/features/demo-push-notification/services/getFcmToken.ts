import messaging from '@react-native-firebase/messaging';

export const getFcmToken = () => {
  return messaging().getToken();
};
