import {useQuery} from '@tanstack/react-query';
import {firebaseConfig} from 'bases/firebase/FirebaseConfig';
import {getFcmToken} from 'bases/firebase/messaging/getFcmToken';

export const useGetFcmToken = () => {
  const query = useQuery(['demo', 'push-notification', 'getFcmToken'], () => {
    if (!firebaseConfig.isDummy) {
      return getFcmToken();
    } else {
      // useQueryのqueryFnからundefinedを返却するとエラーがthrowされてしまうため、nullを返却する
      return null;
    }
  });
  return {...query, fcmToken: query.data};
};
