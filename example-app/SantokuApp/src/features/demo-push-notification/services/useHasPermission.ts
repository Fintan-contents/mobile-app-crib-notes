import messaging from '@react-native-firebase/messaging';
import {useQuery} from '@tanstack/react-query';

const hasPermission = () => {
  return messaging().hasPermission();
};
export const useHasPermission = () => {
  const query = useQuery(['demo', 'push-notification', 'hasPermission'], hasPermission);
  return {...query, permission: query.data};
};
