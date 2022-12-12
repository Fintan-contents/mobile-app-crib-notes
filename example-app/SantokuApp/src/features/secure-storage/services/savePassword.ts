import {sha256} from 'bases/crypto/crypto';
import * as SecureStore from 'expo-secure-store';

import {KEY_CHAIN_ACCESSIBILITY} from '../constants/keyChainAccessibility';
import {STORED_ITEM_KEYS} from '../constants/storedItemKeys';

/**
 * 指定されたパスワードをセキュアストレージに格納します。
 * 指定されたアカウントIDをSHA256でハッシュ化して、その値をキーとしてセキュアストレージに格納します。
 *
 * セキュアストレージに格納する際のオプションとして、以下を指定します。
 * ・keychainAccessible: {@link SecureStore.WHEN_UNLOCKED}
 *
 * @param accountId アカウントID
 * @param password パスワード
 * @see {@link https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions}
 */
export async function savePassword(accountId: string, password: string): Promise<void> {
  // ログインに利用するような項目は平文で保存しないでハッシュ化します。
  const hash = await sha256(accountId);
  return SecureStore.setItemAsync(`${hash}_${STORED_ITEM_KEYS.PASSWORD}`, password, {
    keychainAccessible: KEY_CHAIN_ACCESSIBILITY,
  });
}
