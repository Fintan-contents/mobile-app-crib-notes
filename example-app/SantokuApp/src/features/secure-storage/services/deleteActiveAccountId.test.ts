import * as SecureStore from 'expo-secure-store';

import {deleteActiveAccountId} from './deleteActiveAccountId';

describe('deleteActiveAccountId', () => {
  test('SecureStore.deleteItemAsyncに正しく引数を渡しているかの確認', async () => {
    const spy = jest.spyOn(SecureStore, 'deleteItemAsync');
    await deleteActiveAccountId();

    expect(spy).toHaveBeenCalledWith('activeAccountId');
  });
});
