import {act, renderHook} from '@testing-library/react-native';
import {AxiosError} from 'axios';
import {useSnackbar, WithSnackbar} from 'components/overlay';
import {WithAccountContext} from 'context/WithAccountContext';
import {AccountData, loadBundledMessagesAsync} from 'framework/initialize/helpers';
import React from 'react';
import {Alert} from 'react-native';

import {useAccountContextOperation} from '../../context/useAccountContextOperation';
import {AuthenticationService} from '../authentication';
import {useDefaultGlobalErrorHandler} from './useDefaultGlobalErrorHandler';

jest.mock('components/overlay/snackbar/WithSnackbar');
jest.mock('context/useAccountContextOperation');
jest.mock('framework/logging');

jest.useFakeTimers();

const wrapper = (value: AccountData) => {
  return ({children}: {children: React.ReactNode}) => {
    return <WithAccountContext accountData={value}>{children}</WithAccountContext>;
  };
};

describe('useDefaultGlobalErrorHandler', () => {
  const mockSnackbarShow = jest.fn();

  beforeAll(() => {
    (useSnackbar as jest.Mock).mockImplementation(() => ({
      show: mockSnackbarShow,
    }));
    (WithSnackbar as jest.Mock).mockReturnValue(<></>);
  });

  beforeEach(() => {
    mockSnackbarShow.mockClear();
    (useSnackbar as jest.Mock).mockClear();
    (WithSnackbar as jest.Mock).mockClear();
  });

  test('400 Bad Requestの場合に何も行われない', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 400,
        statusText: 'Bad Request',
        data: {},
        headers: {},
        config: {},
      },
    );
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError);
    expect(mockSnackbarShow).not.toBeCalled();
  });

  test('401 Unauthorizedの場合に再ログインを促すアラートを表示', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 401,
        statusText: 'Unauthorized',
        data: {},
        headers: {},
        config: {},
      },
    );
    const spyClientLogout = jest.spyOn(AuthenticationService, 'clientLogout').mockImplementation(() => {
      return Promise.resolve();
    });
    const logout = jest.fn();
    (useAccountContextOperation as jest.Mock).mockImplementation(() => {
      return {logout};
    });
    const spyAlert = jest.spyOn(Alert, 'alert');
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    await act(async () => {
      await new Promise(resolve => {
        resolve(errorHandler.current(axiosError));
      });
    });
    expect(mockSnackbarShow).not.toBeCalled();
    expect(spyClientLogout).toHaveBeenCalled();
    expect(logout).toHaveBeenCalled();
    expect(spyAlert).toBeCalledWith(
      '再ログインが必要です',
      'セッションの有効期限が切れました。再度ログインしてください。',
    );
  });

  test('403 Forbiddenの場合に最新の利用規約への同意が必要なことを伝えるアラートを表示', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 403,
        statusText: 'Forbidden',
        data: {},
        headers: {},
        config: {},
      },
    );
    const spyAlert = jest.spyOn(Alert, 'alert');
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError);
    expect(mockSnackbarShow).not.toBeCalled();
    expect(spyAlert).toBeCalledWith(
      '新しい利用規約への同意',
      'この機能を利用するためには最新の利用規約への同意が必要です。',
    );
  });

  test('404 Not Foundの場合に何も行われない', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 404,
        statusText: 'Not Found',
        data: {},
        headers: {},
        config: {},
      },
    );
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError);
    expect(mockSnackbarShow).not.toBeCalled();
  });

  test('412 Precondition Failedの場合にアプリを新しいバージョンにアップデートするように促すダイアログを表示', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 412,
        statusText: 'Precondition Failed',
        data: {},
        headers: {},
        config: {},
      },
    );
    const spyAlert = jest.spyOn(Alert, 'alert');
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError);
    expect(mockSnackbarShow).not.toBeCalled();
    expect(spyAlert).toBeCalledWith(
      'アプリの更新が必要です',
      'アプリのバージョンが古いためこの機能を利用できません。ストアからアップデートを実施してください。',
    );
  });

  test('429 Too Many Requestsの場合に時間をおいてから再操作をするように促すスナックバーを表示', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 429,
        statusText: 'Too Many Requests',
        data: {},
        headers: {},
        config: {},
      },
    );
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError);
    expect(mockSnackbarShow).toBeCalledWith(
      'ただいまリクエストが集中しており混雑しております。時間をおいてから再度お試しください。',
    );
  });

  test('503 Service Unavailableの場合にシステムメンテナンス中であることを伝えるスナックバーを表示', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 503,
        statusText: 'Service Unavailable',
        data: {},
        headers: {},
        config: {},
      },
    );
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError);
    expect(mockSnackbarShow).toBeCalledWith(
      'ただいまシステムメンテナンスを実施しております。時間をおいてから再度お試しください。',
    );
  });

  test('504 SGateway Timeoutの場合に時間をおいてから再操作をするように促すスナックバーを表示', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 504,
        statusText: 'Gateway Timeout',
        data: {},
        headers: {},
        config: {},
      },
    );
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError);
    expect(mockSnackbarShow).toBeCalledWith(
      'サーバへの接続がタイムアウトしました。時間をおいてから再度お試しください。',
    );
  });

  test('500 Internal Server Errorの場合に予期せぬエラーのスナックバーを表示', async () => {
    const axiosError = new AxiosError(
      'error',
      '',
      {},
      {},
      {
        status: 500,
        statusText: 'Internal Server Error',
        data: {message: 'message', code: 'errorCode'},
        headers: {},
        config: {},
      },
    );
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError);
    expect(mockSnackbarShow).toBeCalledWith(
      '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
    );
  });

  test('nullの場合に予期せぬエラーのスナックバーを表示', async () => {
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalErrorHandler(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(null);
    expect(mockSnackbarShow).toBeCalledWith(
      '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
    );
  });
});
