import * as SecureStore from 'expo-secure-store';

import * as Crypto from '../utilities/crypto';
import {SecureStorageAdapter} from './SecureStorageAdapter';

describe('SecureStorageAdapter saveActiveAccountId', () => {
  test('SecureStore.setItemAsyncに正しく引数を渡しているかの確認', async () => {
    const spy = jest.spyOn(SecureStore, 'setItemAsync');
    await SecureStorageAdapter.saveActiveAccountId('1234567890');

    expect(spy).toHaveBeenCalledWith('activeAccountId', '1234567890', {
      keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
  });
});

describe('SecureStorageAdapter savePassword', () => {
  test('アカウントIDをハッシュ化してSecureStore.setItemAsyncに正しく引数を渡しているかの確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'setItemAsync');
    const spyCrypto = jest.spyOn(Crypto, 'sha256').mockReturnValue(Promise.resolve('abcdef'));
    await SecureStorageAdapter.savePassword('1234567890', 'password');

    expect(spySecureStore).toHaveBeenCalledWith('abcdef_password', 'password', {
      keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    });
    expect(spyCrypto).toHaveBeenCalledWith('1234567890');
  });
});

describe('SecureStorageAdapter loadActiveAccountId', () => {
  test('SecureStore.getItemAsyncに正しく引数を渡しているかと戻り値の確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'getItemAsync').mockResolvedValue('1234567890');
    const result = await SecureStorageAdapter.loadActiveAccountId();

    expect(spySecureStore).toHaveBeenCalledWith('activeAccountId');
    expect(result).toEqual('1234567890');
  });
});

describe('SecureStorageAdapter loadPassword', () => {
  test('アカウントIDをハッシュ化してSecureStore.getItemAsyncに正しく引数を渡しているかと戻り値の確認', async () => {
    const spySecureStore = jest.spyOn(SecureStore, 'getItemAsync').mockResolvedValue('password');
    const spyCrypto = jest.spyOn(Crypto, 'sha256').mockReturnValue(Promise.resolve('abcdef'));
    const result = await SecureStorageAdapter.loadPassword('1234567890');

    expect(spySecureStore).toHaveBeenCalledWith('abcdef_password');
    expect(result).toEqual('password');
    expect(spyCrypto).toHaveBeenCalledWith('1234567890');
  });
});

describe('SecureStorageAdapter deleteActiveAccountId', () => {
  test('SecureStore.deleteItemAsyncに正しく引数を渡しているかの確認', async () => {
    const spy = jest.spyOn(SecureStore, 'deleteItemAsync');
    await SecureStorageAdapter.deleteActiveAccountId();

    expect(spy).toHaveBeenCalledWith('activeAccountId');
  });
});
