import * as Crypto from 'bases/crypto/crypto';
import * as SecureStore from 'expo-secure-store';

import {savePassword} from './savePassword';

describe('savePassword', () => {
  test('アカウントIDをハッシュ化してSecureStore.setItemAsyncに正しく引数を渡しているかの確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'setItemAsync');
    const spyCrypto = jest.spyOn(Crypto, 'sha256').mockReturnValue(Promise.resolve('abcdef'));
    await savePassword('1234567890', 'password');

    expect(spySecureStore).toHaveBeenCalledWith('abcdef_password', 'password', {
      keychainAccessible: SecureStore.WHEN_UNLOCKED,
    });
    expect(spyCrypto).toHaveBeenCalledWith('1234567890');
  });
});
