import * as SecureStore from 'expo-secure-store';

import {STORED_ITEM_KEYS} from '../constants/storedItemKeys';

/**
 * セキュアストレージからアクティブなアカウントのIDを削除します。
 */
export function deleteActiveAccountId(): Promise<void> {
  return SecureStore.deleteItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID);
}
