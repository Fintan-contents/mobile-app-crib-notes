import {ApplicationError} from 'bases/core/errors/ApplicationError';
import * as Application from 'expo-application';
import {getAppUpdates} from 'features/backend/apis/system/system';
import {Platform} from 'react-native';

export const requestAppUpdates = async (
  type: typeof Platform.OS,
  version: typeof Application.nativeApplicationVersion,
) => {
  if (type !== 'ios' && type !== 'android') {
    throw new ApplicationError(`Not supported type. type=[${type}]`);
  }
  if (!version) {
    throw new ApplicationError(`Invalid version. version=[${String(version)}]`);
  }

  const response = await getAppUpdates(type, version);
  return response.data;
};
