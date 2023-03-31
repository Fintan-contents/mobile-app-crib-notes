import * as accountApi from 'features/backend/apis/account/account';
import {AccountLoginResponseStatus} from 'features/backend/apis/model';
import * as csrfToken from 'features/backend/utils/refreshCsrfToken';
import * as loadActiveAccountId from 'features/secure-storage/services/loadActiveAccountId';
import * as loadPassword from 'features/secure-storage/services/loadPassword';

import {autoLogin} from './autoLogin';
import {BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION} from '../../../backend/utils/customInstance';

jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'get').mockResolvedValue({
  status: 200,
  data: {
    csrfTokenHeaderName: 'X-CSRF-TOKEN',
    csrfTokenValue: 'dummy',
  },
});

describe('autoLogin', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(loadActiveAccountId, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(loadPassword, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const res = await autoLogin();
    expect(res).toEqual({
      status: 'COMPLETE',
    });
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spyRefreshCsrfToken).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
    expect(__mocks.crashlytics.setUserId).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const res = await autoLogin();
    expect(res).toBeUndefined();
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const res = await autoLogin();
    expect(res).toBeUndefined();
  });
});
