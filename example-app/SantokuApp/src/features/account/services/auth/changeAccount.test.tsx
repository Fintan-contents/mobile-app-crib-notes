import * as accountApi from 'features/backend/apis/account/account';
import {AccountLoginResponseStatus} from 'features/backend/apis/model';
import * as csrfToken from 'features/backend/utils/refreshCsrfToken';
import * as loadPassword from 'features/secure-storage/services/loadPassword';

import {PasswordNotFoundError} from '../../errors/PasswordNotFoundError';
import * as getAccountData from '../account/getAccountData';
import {changeAccount} from './changeAccount';

describe('changeAccount', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyGetAccountData = jest.spyOn(getAccountData, 'getAccountData').mockResolvedValue({
    account: {accountId: '123456789', deviceTokens: []},
    terms: {termsAgreementStatus: {hasAgreed: true, agreedVersion: '1.0.0'}, termsOfService: undefined},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
  });

  test('セキュアストレージからパスワードを取得してログインAPIを呼び出しているかの検証', async () => {
    const spySecureStorageAdapter = jest.spyOn(loadPassword, 'loadPassword').mockResolvedValue('password123');
    const res = await changeAccount('123456789');
    expect(res).toEqual({
      account: {accountId: '123456789', deviceTokens: []},
      terms: {termsAgreementStatus: {hasAgreed: true, agreedVersion: '1.0.0'}, termsOfService: undefined},
    });
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spyRefreshCsrfToken).toHaveBeenCalled();
    expect(spySecureStorageAdapter).toHaveBeenCalledWith('123456789');
    expect(spyGetAccountData).toHaveBeenCalled();
  });

  test('セキュアストレージからパスワードを取得できなかった場合の検証', async () => {
    jest.spyOn(loadPassword, 'loadPassword').mockResolvedValue(null);
    const changeAccountPromise = changeAccount('123456789');
    await expect(changeAccountPromise).rejects.toThrowError(PasswordNotFoundError);
  });
});
