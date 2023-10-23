import {useQuery} from '@tanstack/react-query';
import * as Application from 'expo-application';
import {Platform} from 'react-native';

import {requestAppUpdates} from './requestAppUpdates';

export const useAppUpdates = () => {
  const query = useQuery(
    ['app-updates#requestAppUpdates'],
    ({signal}) => requestAppUpdates(Platform.OS, Application.nativeApplicationVersion, signal),
    {staleTime: Infinity},
  );
  return {...query, appUpdates: query.data};
};
