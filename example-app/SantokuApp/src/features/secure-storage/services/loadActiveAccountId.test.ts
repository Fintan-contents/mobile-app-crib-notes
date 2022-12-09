import * as SecureStore from 'expo-secure-store';

import {loadActiveAccountId} from './loadActiveAccountId';

describe('loadActiveAccountId', () => {
  test('SecureStore.getItemAsyncに正しく引数を渡しているかと戻り値の確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'getItemAsync').mockResolvedValue('1234567890');
    const result = await loadActiveAccountId();

    expect(spySecureStore).toHaveBeenCalledWith('activeAccountId');
    expect(result).toEqual('1234567890');
  });
});
