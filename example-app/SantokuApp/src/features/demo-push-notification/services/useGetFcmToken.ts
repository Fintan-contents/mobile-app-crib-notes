import {getFcmToken} from 'bases/firebase/messaging/getFcmToken';
import {useQuery} from 'react-query';

export const useGetFcmToken = () => {
  const query = useQuery(['demo', 'push-notification', 'getFcmToken'], getFcmToken);
  return {...query, fcmToken: query.data};
};
