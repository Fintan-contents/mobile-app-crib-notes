import messaging from '@react-native-firebase/messaging';

import {deleteFcmToken, DeleteFcmTokenError} from './deleteFcmToken';

describe('deleteFcmToken', () => {
  test('エラーが発生した場合は、DeleteFcmTokenErrorがthrowされること', async () => {
    jest.spyOn(messaging(), 'deleteToken').mockImplementation(() => {
      throw new Error();
    });
    await expect(deleteFcmToken()).rejects.toThrow(DeleteFcmTokenError);
  });
});
