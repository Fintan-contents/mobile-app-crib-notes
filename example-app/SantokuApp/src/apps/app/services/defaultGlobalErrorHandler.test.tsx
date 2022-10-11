import {act} from '@testing-library/react-native';
import {AxiosError} from 'axios';
import {setHandleError} from 'bases/core/errors/handleError';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import * as clientLogout from 'features/account/services/auth/clientLogout';
import {Alert} from 'react-native';
import {QueryClient} from 'react-query';

import {defaultGlobalErrorHandler} from './defaultGlobalErrorHandler';
import {loadBundledMessagesAsync} from './loadBundledMessagesAsync';

jest.mock('bases/logging');

jest.useFakeTimers();

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

setHandleError(jest.fn());

describe('defaultGlobalErrorHandler', () => {
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
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    expect(spySnackbar).not.toHaveBeenCalled();
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
    const spyClientLogout = jest.spyOn(clientLogout, 'clientLogout').mockImplementation(() => {
      return Promise.resolve();
    });
    const spyAlert = jest.spyOn(Alert, 'alert');
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    await act(async () => {
      await new Promise(resolve => {
        resolve(errorHandler(axiosError));
      });
    });
    expect(spySnackbar).not.toHaveBeenCalled();
    expect(spyClientLogout).toHaveBeenCalled();
    expect(spyAlert).toHaveBeenCalledWith(
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
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    expect(spySnackbar).not.toHaveBeenCalled();
    expect(spyAlert).toHaveBeenCalledWith(
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
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    expect(spySnackbar).not.toHaveBeenCalled();
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
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    expect(spySnackbar).not.toHaveBeenCalled();
    expect(spyAlert).toHaveBeenCalledWith(
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
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    expect(spySnackbar).toHaveBeenCalledWith(
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
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    expect(spySnackbar).toHaveBeenCalledWith(
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
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    expect(spySnackbar).toHaveBeenCalledWith(
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
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError);
    expect(spySnackbar).toHaveBeenCalledWith(
      '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
    );
  });

  test('nullの場合に予期せぬエラーのスナックバーを表示', async () => {
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(null);
    expect(spySnackbar).toHaveBeenCalledWith(
      '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
    );
  });
});
