import * as Application from 'expo-application';
import {Platform} from 'react-native';
import {useQuery} from 'react-query';

import {requestAppUpdates} from './requestAppUpdates';

export const useAppUpdates = () => {
  const query = useQuery(
    ['app-updates#requestAppUpdates'],
    () => requestAppUpdates(Platform.OS, Application.nativeApplicationVersion),
    {staleTime: Infinity},
  );
  return {...query, appUpdates: query.data};
};
