import messaging from '@react-native-firebase/messaging';

import {ApplicationError} from '../../error/ApplicationError';

export const requestPushPermission = async () => {
  try {
    return await messaging().requestPermission();
  } catch (e) {
    throw new RequestPushPermissionError('Failed to request push permission.', e);
  }
};

export class RequestPushPermissionError extends ApplicationError {}

export function isRequestPushPermissionError(error: unknown): error is RequestPushPermissionError {
  return error instanceof RequestPushPermissionError;
}
