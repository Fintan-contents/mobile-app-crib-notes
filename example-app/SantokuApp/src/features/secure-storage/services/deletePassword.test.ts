import * as Crypto from 'bases/crypto/crypto';
import * as SecureStore from 'expo-secure-store';

import {deletePassword} from './deletePassword';

describe('deletePassword', () => {
  test('アカウントIDをハッシュ化してSecureStore.deleteItemAsyncに正しく引数を渡しているかの確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'deleteItemAsync');
    const spyCrypto = jest.spyOn(Crypto, 'sha256').mockReturnValue(Promise.resolve('abcdef'));
    await deletePassword('1234567890');

    expect(spySecureStore).toHaveBeenCalledWith('abcdef_password');
    expect(spyCrypto).toHaveBeenCalledWith('1234567890');
  });
});
