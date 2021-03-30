import {OidcAuthenticated, OidcAuthenticationStateTranslator, OidcRefreshableAuthenticated} from './OidcAuthenticationState';
import * as SecureStore from 'expo-secure-store';
import {AuthenticationState} from '../AuthenticationState';

interface SecureStorageAdapter {
  save(state: OidcAuthenticated): Promise<void[]>;

  delete(): Promise<void[]>;

  load(): Promise<AuthenticationState>;
}

const STORED_ITEM_KEYS = {
  ACCESS_TOKEN_EXPIRATION_DATE: 'authState-accessTokenExpirationDate',
  ACCESS_TOKEN: 'authState-accessToken',
  ID_TOKEN: 'authState-idToken',
  REFRESH_TOKEN: 'authState-refreshToken',
};

class SecureStorageExpoSecureStoreAdapter implements SecureStorageAdapter {
  async save(state: OidcAuthenticated): Promise<void[]> {
    // noinspection ES6MissingAwait 配列に格納されてPromise.allに渡されているので問題ない TODO: これ本当に問題ないよね？
    return await Promise.all([
      SecureStorageExpoSecureStoreAdapter._saveItemToSecureStore(STORED_ITEM_KEYS.ACCESS_TOKEN_EXPIRATION_DATE, state.accessTokenExpirationDate),
      SecureStorageExpoSecureStoreAdapter._saveItemToSecureStore(STORED_ITEM_KEYS.ID_TOKEN, state.idToken),
      SecureStorageExpoSecureStoreAdapter._saveItemToSecureStore(STORED_ITEM_KEYS.ACCESS_TOKEN, state.accessToken),
      ...(state instanceof OidcRefreshableAuthenticated
        ? [SecureStorageExpoSecureStoreAdapter._saveItemToSecureStore(STORED_ITEM_KEYS.REFRESH_TOKEN, state.refreshToken)]
        : []),
    ]);
  }

  private static async _saveItemToSecureStore(key: string, value: string): Promise<void> {
    value && (await SecureStore.setItemAsync(key, value));
  }

  async load(): Promise<AuthenticationState> {
    const [accessTokenExpirationDate, accessToken, idToken, refreshToken] = await Promise.all([
      SecureStore.getItemAsync(STORED_ITEM_KEYS.ACCESS_TOKEN_EXPIRATION_DATE),
      SecureStore.getItemAsync(STORED_ITEM_KEYS.ACCESS_TOKEN),
      SecureStore.getItemAsync(STORED_ITEM_KEYS.ID_TOKEN),
      SecureStore.getItemAsync(STORED_ITEM_KEYS.REFRESH_TOKEN),
    ]);

    return OidcAuthenticationStateTranslator.translateFromObject({
      accessTokenExpirationDate,
      accessToken,
      idToken,
      refreshToken,
    });
  }

  async delete(): Promise<void[]> {
    return Promise.all(Object.values(STORED_ITEM_KEYS).map((k) => SecureStore.deleteItemAsync(k)));
  }
}

export {SecureStorageExpoSecureStoreAdapter as SecureStorageAdapter};
