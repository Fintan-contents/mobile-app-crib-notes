import {act, renderHook, WrapperComponent} from '@testing-library/react-hooks';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {AuthenticationService} from '.';
import * as accountApi from '../../generated/backend/account/account';
import {AccountLoginResponseStatus} from '../../generated/backend/model';
import * as csrfToken from '../backend/refreshCsrfToken';
import {ActiveAccountIdNotFoundError, PasswordNotFoundError} from './AuthenticationService';
import {SecureStorageAdapter} from './SecureStorageAdapter';

const wrapper: WrapperComponent<React.ProviderProps<void>> = ({children}) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('AuthenticationService signup', () => {
  test('サインアップAPIを呼び出して、クレデシャルをセキュアストレージに格納しているかの検証', async () => {
    jest.mock('../../generated/backend/account/account');
    const spySignupApi = jest.spyOn(accountApi, 'postSignup').mockResolvedValue({
      data: {accountId: '123456789', profile: {nickname: 'testNickName'}, deviceTokens: []},
      status: 200,
      statusText: 'ok',
      headers: {},
      config: {},
    });
    const spySecureStorageAdapterSavePassword = jest.spyOn(SecureStorageAdapter, 'savePassword');
    const {result} = renderHook(() => AuthenticationService.useSignup(), {wrapper});
    await act(async () => {
      await result.current.mutateAsync({nickname: 'testNickName', password: 'password123'});
      expect(result.current.data).toEqual({
        accountId: '123456789',
        profile: {nickname: 'testNickName'},
        deviceTokens: [],
      });
      expect(spySignupApi).toHaveBeenCalledWith({nickname: 'testNickName', password: 'password123'});
      expect(spySecureStorageAdapterSavePassword).toHaveBeenCalledWith('123456789', 'password123');
    });
  });
});

describe('AuthenticationService changeAccount', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
  });

  test('セキュアストレージからパスワードを取得してログインAPIを呼び出しているかの検証', async () => {
    const spySecureStorageAdapter = jest.spyOn(SecureStorageAdapter, 'loadPassword').mockResolvedValue('password123');
    const {result} = renderHook(() => AuthenticationService.useChangeAccount(), {wrapper});
    await act(async () => {
      const res = await result.current.mutateAsync({accountId: '123456789'});
      expect(res).toEqual({status: AccountLoginResponseStatus.COMPLETE});
      expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapter).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからパスワードを取得できなかった場合の検証', async () => {
    jest.spyOn(SecureStorageAdapter, 'loadPassword').mockResolvedValue(null);
    const {result} = renderHook(() => AuthenticationService.useChangeAccount(), {wrapper});
    await act(async () => {
      const changeAccount = result.current.mutateAsync({accountId: '123456789'});
      await expect(changeAccount).rejects.toThrowError(PasswordNotFoundError);
    });
  });
});

describe('AuthenticationService autoLogin', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const {result} = renderHook(() => AuthenticationService.useAutoLogin(), {wrapper});
    await act(async () => {
      const res = await result.current.mutateAsync();
      expect(res).toEqual({status: AccountLoginResponseStatus.COMPLETE});
      expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
      expect(__mocks.crashlytics.setUserId).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const {result} = renderHook(() => AuthenticationService.useAutoLogin(), {wrapper});
    await act(async () => {
      const autoLogin = result.current.mutateAsync();
      await expect(autoLogin).rejects.toThrowError(ActiveAccountIdNotFoundError);
    });
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const {result} = renderHook(() => AuthenticationService.useAutoLogin(), {wrapper});
    await act(async () => {
      const autoLogin = result.current.mutateAsync();
      await expect(autoLogin).rejects.toThrowError(PasswordNotFoundError);
    });
  });
});

describe('AuthenticationService canAutoLogin', () => {
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得できる場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    await act(async () => {
      const res = await AuthenticationService.canAutoLogin();
      expect(res).toBeTruthy();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できない場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    await act(async () => {
      const res = await AuthenticationService.canAutoLogin();
      expect(res).toBeFalsy();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).not.toHaveBeenCalled();
    });
  });

  test('セキュアストレージからパスワードを取得できない場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    await act(async () => {
      const res = await AuthenticationService.canAutoLogin();
      expect(res).toBeFalsy();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
    });
  });
});

describe('AuthenticationService refresh', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatus.COMPLETE},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spyRefreshCsrfToken = jest.spyOn(csrfToken, 'refreshCsrfToken').mockImplementation();
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const {result} = renderHook(() => AuthenticationService.useRefresh(), {wrapper});
    await act(async () => {
      const res = await result.current.mutateAsync();
      expect(res).toEqual({status: AccountLoginResponseStatus.COMPLETE});
      expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
    });
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const {result} = renderHook(() => AuthenticationService.useRefresh(), {wrapper});
    await act(async () => {
      const refresh = result.current.mutateAsync();
      await expect(refresh).rejects.toThrowError(ActiveAccountIdNotFoundError);
    });
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const {result} = renderHook(() => AuthenticationService.useRefresh(), {wrapper});
    await act(async () => {
      const refresh = result.current.mutateAsync();
      await expect(refresh).rejects.toThrowError(PasswordNotFoundError);
    });
  });
});

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
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterDeleteActiveAccountId = jest.spyOn(SecureStorageAdapter, 'deleteActiveAccountId');
  const spySecureStorageAdapterDeletePassword = jest.spyOn(SecureStorageAdapter, 'deletePassword');

  beforeEach(() => {
    spyLogoutApi.mockClear();
    spyRefreshCsrfToken.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterDeleteActiveAccountId.mockClear();
    spySecureStorageAdapterDeletePassword.mockClear();
  });
  test('ログアウトAPIを呼び出して、セキュアストレージからアクティブアカウントを削除しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    const {result} = renderHook(() => AuthenticationService.useLogout(), {wrapper});
    await act(async () => {
      await result.current.mutateAsync();
      expect(spyAccountsMeDeviceTokenApi).toHaveBeenCalled();
      expect(spyLogoutApi).toHaveBeenCalled();
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterDeleteActiveAccountId).toHaveBeenCalled();
      expect(spySecureStorageAdapterDeletePassword).toHaveBeenCalledWith('123456789');
      expect(__mocks.crashlytics.setUserId).toHaveBeenCalledWith('');
    });
  });
  test('ログインしたアカウントIDがnullの場合はセキュアストレージの削除が呼ばれないことを確認', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const {result} = renderHook(() => AuthenticationService.useLogout(), {wrapper});
    await act(async () => {
      await result.current.mutateAsync();
      expect(spyAccountsMeDeviceTokenApi).toHaveBeenCalled();
      expect(spyLogoutApi).toHaveBeenCalled();
      expect(spyRefreshCsrfToken).toHaveBeenCalled();
      expect(spySecureStorageAdapterDeleteActiveAccountId).not.toHaveBeenCalled();
      expect(spySecureStorageAdapterDeletePassword).not.toHaveBeenCalled();
    });
  });
});
