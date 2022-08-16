import * as SecureStore from 'expo-secure-store';

import {STORED_ITEM_KEYS} from '../constants/storedItemKeys';

/**
 * セキュアストレージからアクティブなアカウントのIDを取得します。
 * @returns セキュアストレージに存在する場合はアクティブなアカウントIDの文字列、存在しない場合はnull
 */
export function loadActiveAccountId(): Promise<string | null> {
  return SecureStore.getItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID);
}
