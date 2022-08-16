import * as accountApi from 'features/backend/apis/account/account';
import * as csrfToken from 'features/backend/utils/refreshCsrfToken';
import * as deleteActiveAccountId from 'features/secure-storage/services/deleteActiveAccountId';
import * as deletePassword from 'features/secure-storage/services/deletePassword';
import * as loadActiveAccountId from 'features/secure-storage/services/loadActiveAccountId';

import {logout} from './logout';

describe('AuthenticationService logout', () => {
  const spyAccountsMeDeviceTokenApi = jest.spyOn(accountApi, 'postAccountsMeDeviceToken').mockImplementation();
  const spyLogoutApi = jest.spyOn(accountApi, 'postLogout').mockResolvedValue({
    data: undefined,
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(loadActiveAccountId, 'loadActiveAccountId');
  const spySecureStorageAdapterDeleteActiveAccountId = jest.spyOn(deleteActiveAccountId, 'deleteActiveAccountId');
  const spySecureStorageAdapterDeletePassword = jest.spyOn(deletePassword, 'deletePassword');

  beforeEach(() => {
    spyLogoutApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterDeleteActiveAccountId.mockClear();
    spySecureStorageAdapterDeletePassword.mockClear();
  });
  test('ログアウトAPIを呼び出して、セキュアストレージからアクティブアカウントを削除しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    // const {result} = renderHook(() => useLogout(), {wrapper});
    await logout();
    expect(spyAccountsMeDeviceTokenApi).toHaveBeenCalled();
    expect(spyLogoutApi).toHaveBeenCalled();
    expect(spyRefreshCsrfToken).toHaveBeenCalled();
    expect(spySecureStorageAdapterDeleteActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterDeletePassword).toHaveBeenCalledWith('123456789');
    expect(__mocks.crashlytics.setUserId).toHaveBeenCalledWith('');
  });
  test('ログインしたアカウントIDがnullの場合はセキュアストレージの削除が呼ばれないことを確認', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    await logout();
    expect(spyAccountsMeDeviceTokenApi).toHaveBeenCalled();
    expect(spyLogoutApi).toHaveBeenCalled();
    expect(spyRefreshCsrfToken).toHaveBeenCalled();
    expect(spySecureStorageAdapterDeleteActiveAccountId).not.toHaveBeenCalled();
    expect(spySecureStorageAdapterDeletePassword).not.toHaveBeenCalled();
  });
});
