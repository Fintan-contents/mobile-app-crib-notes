import {sha256} from 'bases/crypto/crypto';
import * as SecureStore from 'expo-secure-store';

import {STORED_ITEM_KEYS} from '../constants/storedItemKeys';

/**
 * セキュアストレージから指定されたアカウントIDに該当するパスワードを削除します。
 * @param accountId アカウントID
 * @returns セキュアストレージに存在する場合はパスワードの文字列、存在しない場合はnull
 */
export async function deletePassword(accountId: string): Promise<void> {
  // ログインに利用するような項目は平文で保存しないでハッシュ化します。
  const hash = await sha256(accountId);
  return SecureStore.deleteItemAsync(`${hash}_${STORED_ITEM_KEYS.PASSWORD}`);
}
