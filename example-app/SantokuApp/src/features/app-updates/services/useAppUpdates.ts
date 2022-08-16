import * as Application from 'expo-application';
import {Platform} from 'react-native';
import {useQuery} from 'react-query';

import {requestAppUpdates} from './requestAppUpdates';

export const useAppUpdates = () => {
  return useQuery(['app-updates#requestAppUpdates'], () =>
    requestAppUpdates(Platform.OS, Application.nativeApplicationVersion),
  );
};
