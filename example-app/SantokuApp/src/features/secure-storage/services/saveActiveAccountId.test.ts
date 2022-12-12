import * as SecureStore from 'expo-secure-store';

import {saveActiveAccountId} from './saveActiveAccountId';

describe('saveActiveAccountId', () => {
  test('SecureStore.setItemAsyncに正しく引数を渡しているかの確認', async () => {
    const spy = jest.spyOn(SecureStore, 'setItemAsync');
    await saveActiveAccountId('1234567890');

    expect(spy).toHaveBeenCalledWith('activeAccountId', '1234567890', {
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
    });
  });
});
