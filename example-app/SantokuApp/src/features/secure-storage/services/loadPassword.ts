import {sha256} from 'bases/crypto/crypto';
import * as SecureStore from 'expo-secure-store';

import {STORED_ITEM_KEYS} from '../constants/storedItemKeys';

/**
 * セキュアストレージから指定されたアカウントIDに該当するパスワードを取得します。
 * @param accountId アカウントID
 * @returns セキュアストレージに存在する場合はパスワードの文字列、存在しない場合はnull
 */
export async function loadPassword(accountId: string): Promise<string | null> {
  // ログインに利用するような項目は平文で保存しないでハッシュ化します。
  const hash = await sha256(accountId);
  return SecureStore.getItemAsync(`${hash}_${STORED_ITEM_KEYS.PASSWORD}`);
}
