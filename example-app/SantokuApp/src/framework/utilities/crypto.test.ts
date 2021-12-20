import * as Crypto from 'expo-crypto';

import {sha256} from './crypto';

describe('crypto sha256', () => {
  test('Crypto digestStringAsyncに正しく引数を渡しているかの確認', async () => {
    const spy = jest.spyOn(Crypto, 'digestStringAsync').mockReturnValue(Promise.resolve('abcdef'));
    const hash = await sha256('1234567890');
    expect(spy).toHaveBeenCalledWith(Crypto.CryptoDigestAlgorithm.SHA256, '1234567890');
    expect(hash).toEqual('abcdef');
  });
});
