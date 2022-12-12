import * as SecureStore from 'expo-secure-store';

import {KEY_CHAIN_ACCESSIBILITY} from '../constants/keyChainAccessibility';
import {STORED_ITEM_KEYS} from '../constants/storedItemKeys';

/**
 * 指定されたアカウントIDを、アクティブなアカウントとしてセキュアストレージに格納します。
 * セキュアストレージに格納する際のオプションとして、以下を指定します。
 * ・keychainAccessible: {@link SecureStore.WHEN_UNLOCKED}
 *
 * @param accountId アカウントID
 * @see {@link https://docs.expo.dev/versions/latest/sdk/securestore/#constants}
 */
export function saveActiveAccountId(accountId: string): Promise<void> {
  return SecureStore.setItemAsync(STORED_ITEM_KEYS.ACTIVE_ACCOUNT_ID, accountId, {
    keychainAccessible: KEY_CHAIN_ACCESSIBILITY,
  });
}
