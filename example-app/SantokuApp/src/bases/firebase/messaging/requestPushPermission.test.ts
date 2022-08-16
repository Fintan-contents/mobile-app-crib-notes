import messaging from '@react-native-firebase/messaging';

import {requestPushPermission, RequestPushPermissionError} from './requestPushPermission';

describe('requestPushPermission', () => {
  test('エラーが発生した場合は、RequestPushPermissionErrorがthrowされること', async () => {
    jest.spyOn(messaging(), 'requestPermission').mockImplementation(() => {
      throw new Error();
    });
    await expect(requestPushPermission()).rejects.toThrow(RequestPushPermissionError);
  });
});
