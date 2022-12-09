import messaging from '@react-native-firebase/messaging';
import {ApplicationError} from 'bases/core/errors/ApplicationError';

export const requestPushPermission = async () => {
  try {
    return await messaging().requestPermission();
  } catch (e) {
    throw new RequestPushPermissionError('Failed to request push permission.', e, 'RequestPushPermissionError');
  }
};

export class RequestPushPermissionError extends ApplicationError {}

export function isRequestPushPermissionError(error: unknown): error is RequestPushPermissionError {
  return error instanceof RequestPushPermissionError;
}
