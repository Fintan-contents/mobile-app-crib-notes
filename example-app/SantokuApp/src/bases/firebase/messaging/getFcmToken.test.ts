import messaging from '@react-native-firebase/messaging';

import {getFcmToken, GetFcmTokenError} from './getFcmToken';

describe('getFcmToken', () => {
  test('エラーが発生した場合は、GetFcmTokenErrorがthrowされること', async () => {
    jest.spyOn(messaging(), 'getToken').mockImplementation(() => {
      throw new Error();
    });
    await expect(getFcmToken()).rejects.toThrow(GetFcmTokenError);
  });
});
