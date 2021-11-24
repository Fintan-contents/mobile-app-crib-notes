import firebase from '@react-native-firebase/app';
import * as Application from 'expo-application';
import {Platform} from 'react-native';

const info = [
  {
    name: 'Application Name',
    value: Application.applicationName,
  },
  {
    name: Platform.select({android: 'Application ID', ios: 'Bundle Identifier'}),
    value: Application.applicationId,
  },
  {
    name: 'Application Version',
    value: Application.nativeApplicationVersion,
  },
  {
    name: 'Build Version',
    value: Application.nativeBuildVersion,
  },
  {
    name: 'Development mode',
    value: __DEV__ ? 'true' : 'false',
  },
  {
    name: 'Firebase App Name',
    value: firebase.app().name,
  },
  {
    name: 'Firebase Project ID',
    value: firebase.app().options.projectId,
  },
  {
    name: 'Firebase App ID',
    value: firebase.app().options.appId,
  },
];

const infoKeyExtractor = (_: unknown, index: number) => index.toString();

export const useAppInfo = () => {
  return {info, infoKeyExtractor};
};
