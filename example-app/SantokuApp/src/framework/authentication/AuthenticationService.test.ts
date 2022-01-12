import {AuthenticationService} from '.';
import {AccountLoginResponseStatusEnum} from '../../generated/api';
import {accountApi} from '../backend';
import {ActiveAccountIdNotFoundError, PasswordNotFoundError} from './AuthenticationService';
import {SecureStorageAdapter} from './SecureStorageAdapter';

describe('AuthenticationService signup', () => {
  test('サインアップAPIを呼び出して、クレデシャルをセキュアストレージに格納しているかの検証', async () => {
    const spySignupApi = jest.spyOn(accountApi, 'postSignup').mockResolvedValue({
      data: {accountId: '123456789', profile: {nickname: 'testNickName'}},
      status: 200,
      statusText: 'ok',
      headers: {},
      config: {},
    });
    const spySecureStorageAdapterSavePassword = jest.spyOn(SecureStorageAdapter, 'savePassword');
    const res = await AuthenticationService.signup('testNickName', 'password123');
    expect(res).toEqual({accountId: '123456789', profile: {nickname: 'testNickName'}});
    expect(spySignupApi).toHaveBeenCalledWith({nickname: 'testNickName', password: 'password123'});
    expect(spySecureStorageAdapterSavePassword).toHaveBeenCalledWith('123456789', 'password123');
  });
});

describe('AuthenticationService changeAccount', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatusEnum.Complete},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });

  beforeEach(() => {
    spyLoginApi.mockClear();
  });

  test('セキュアストレージからパスワードを取得してログインAPIを呼び出しているかの検証', async () => {
    const spySecureStorageAdapter = jest.spyOn(SecureStorageAdapter, 'loadPassword').mockResolvedValue('password123');
    const res = await AuthenticationService.changeAccount('123456789');
    expect(res).toEqual({status: AccountLoginResponseStatusEnum.Complete});
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spySecureStorageAdapter).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからパスワードを取得できなかった場合の検証', async () => {
    jest.spyOn(SecureStorageAdapter, 'loadPassword').mockResolvedValue(null);
    const changeAccount = AuthenticationService.changeAccount('123456789');
    await expect(changeAccount).rejects.toThrowError(PasswordNotFoundError);
  });
});

describe('AuthenticationService autoLogin', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatusEnum.Complete},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const res = await AuthenticationService.autoLogin();
    expect(res).toEqual({status: AccountLoginResponseStatusEnum.Complete});
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const autoLogin = AuthenticationService.autoLogin();
    await expect(autoLogin).rejects.toThrowError(ActiveAccountIdNotFoundError);
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const autoLogin = AuthenticationService.autoLogin();
    await expect(autoLogin).rejects.toThrowError(PasswordNotFoundError);
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
    const res = await AuthenticationService.canAutoLogin();
    expect(res).toBeTruthy();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できない場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const res = await AuthenticationService.canAutoLogin();
    expect(res).toBeFalsy();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).not.toHaveBeenCalled();
  });

  test('セキュアストレージからパスワードを取得できない場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const res = await AuthenticationService.canAutoLogin();
    expect(res).toBeFalsy();
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });
});

describe('AuthenticationService refresh', () => {
  const spyLoginApi = jest.spyOn(accountApi, 'postLogin').mockResolvedValue({
    data: {status: AccountLoginResponseStatusEnum.Complete},
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterLoadPassword = jest.spyOn(SecureStorageAdapter, 'loadPassword');

  beforeEach(() => {
    spyLoginApi.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterLoadPassword.mockClear();
  });

  test('セキュアストレージからクレデンシャルを取得してログインAPIを呼び出しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue('password123');
    const res = await AuthenticationService.refresh();
    expect(res).toEqual({status: AccountLoginResponseStatusEnum.Complete});
    expect(spyLoginApi).toHaveBeenCalledWith({accountId: '123456789', password: 'password123'});
    expect(spySecureStorageAdapterLoadActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterLoadPassword).toHaveBeenCalledWith('123456789');
  });

  test('セキュアストレージからアクティブなアカウントIDを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    const refresh = AuthenticationService.refresh();
    await expect(refresh).rejects.toThrowError(ActiveAccountIdNotFoundError);
  });

  test('セキュアストレージかパスワードを取得できなかった場合の検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    spySecureStorageAdapterLoadPassword.mockResolvedValue(null);
    const refresh = AuthenticationService.refresh();
    await expect(refresh).rejects.toThrowError(PasswordNotFoundError);
  });
});

describe('AuthenticationService logout', () => {
  const spyLogoutApi = jest.spyOn(accountApi, 'postLogout').mockResolvedValue({
    data: undefined,
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {},
  });
  const spySecureStorageAdapterLoadActiveAccountId = jest.spyOn(SecureStorageAdapter, 'loadActiveAccountId');
  const spySecureStorageAdapterDeleteActiveAccountId = jest.spyOn(SecureStorageAdapter, 'deleteActiveAccountId');
  const spySecureStorageAdapterDeletePassword = jest.spyOn(SecureStorageAdapter, 'deletePassword');

  beforeEach(() => {
    spyLogoutApi.mockClear();
    spySecureStorageAdapterLoadActiveAccountId.mockClear();
    spySecureStorageAdapterDeleteActiveAccountId.mockClear();
    spySecureStorageAdapterDeletePassword.mockClear();
  });
  test('ログアウトAPIを呼び出して、セキュアストレージからアクティブアカウントを削除しているかの検証', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue('123456789');
    await AuthenticationService.logout();
    expect(spyLogoutApi).toHaveBeenCalled();
    expect(spySecureStorageAdapterDeleteActiveAccountId).toHaveBeenCalled();
    expect(spySecureStorageAdapterDeletePassword).toHaveBeenCalledWith('123456789');
  });
  test('ログインしたアカウントIDがnullの場合はセキュアストレージの削除が呼ばれないことを確認', async () => {
    spySecureStorageAdapterLoadActiveAccountId.mockResolvedValue(null);
    await AuthenticationService.logout();
    expect(spyLogoutApi).toHaveBeenCalled();
    expect(spySecureStorageAdapterDeleteActiveAccountId).not.toHaveBeenCalled();
    expect(spySecureStorageAdapterDeletePassword).not.toHaveBeenCalled();
  });
});
