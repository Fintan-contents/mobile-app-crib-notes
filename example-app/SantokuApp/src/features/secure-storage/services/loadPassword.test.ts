import * as Crypto from 'bases/crypto/crypto';
import * as SecureStore from 'expo-secure-store';

import {loadPassword} from './loadPassword';

describe('loadPassword', () => {
  test('アカウントIDをハッシュ化してSecureStore.getItemAsyncに正しく引数を渡しているかと戻り値の確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'getItemAsync').mockResolvedValue('password');
    const spyCrypto = jest.spyOn(Crypto, 'sha256').mockReturnValue(Promise.resolve('abcdef'));
    const result = await loadPassword('1234567890');

    expect(spySecureStore).toHaveBeenCalledWith('abcdef_password');
    expect(result).toEqual('password');
    expect(spyCrypto).toHaveBeenCalledWith('1234567890');
  });
});
