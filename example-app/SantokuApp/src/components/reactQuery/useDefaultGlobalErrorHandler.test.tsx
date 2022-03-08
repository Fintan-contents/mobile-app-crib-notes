import {renderHook} from '@testing-library/react-hooks';
import {AxiosError} from 'axios';
import {useSnackbar, WithSnackbar} from 'components/overlay';
import {loadBundledMessagesAsync} from 'framework/initialize/helpers';
import React from 'react';
import {Alert} from 'react-native';
import {Mutation, Query, QueryKey} from 'react-query';

import {useDefaultGlobalMutationErrorHandler, useDefaultGlobalQueryErrorHandler} from './useDefaultGlobalErrorHandler';

jest.mock('components/overlay/snackbar/WithSnackbar');
jest.mock('framework/logging');

describe('useDefaultGlobalQueryErrorHandler', () => {
  const query = {} as unknown as Query<unknown, unknown, unknown, QueryKey>;
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
    const axiosError = {
      config: jest.fn(),
      response: {status: 400, data: {}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).not.toBeCalled();
  });

  test('401 Unauthorizedの場合に再ログインを促すアラートを表示', async () => {
    const axiosError = {
      config: jest.fn(),
      response: {status: 401, data: {}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    const spyAlert = jest.spyOn(Alert, 'alert');
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).not.toBeCalled();
    expect(spyAlert).toBeCalledWith(
      '再ログインが必要です',
      'セッションの有効期限が切れました。再度ログインしてください。',
    );
  });

  test('403 Forbiddenの場合に最新の利用規約への同意が必要なことを伝えるアラートを表示', async () => {
    const axiosError = {
      config: jest.fn(),
      response: {status: 403, data: {}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    const spyAlert = jest.spyOn(Alert, 'alert');
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).not.toBeCalled();
    expect(spyAlert).toBeCalledWith(
      '新しい利用規約への同意',
      'この機能を利用するためには最新の利用規約への同意が必要です。',
    );
  });

  test('404 Not Foundの場合に何も行われない', async () => {
    const axiosError = {
      config: jest.fn(),
      response: {status: 404, data: {}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).not.toBeCalled();
  });

  test('412 Precondition Failedの場合にアプリを新しいバージョンにアップデートするように促すダイアログを表示', async () => {
    const axiosError = {
      config: jest.fn(),
      response: {status: 412, data: {}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    const spyAlert = jest.spyOn(Alert, 'alert');
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).not.toBeCalled();
    expect(spyAlert).toBeCalledWith(
      'アプリケーションの更新が必要です',
      'アプリケーションのバージョンが古いためこの機能を利用できません。ストアからアップデートを実施してください。',
    );
  });

  test('429 Too Many Requestsの場合に時間をおいてから再操作をするように促すスナックバーを表示', async () => {
    const axiosError = {
      config: jest.fn(),
      response: {status: 429, data: {}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).toBeCalledWith(
      'ただいまリクエストが集中しており混雑しております。時間をおいてから再度お試しください。',
    );
  });

  test('503 Service Unavailableの場合にシステムメンテナンス中であることを伝えるスナックバーを表示', async () => {
    const axiosError = {
      config: jest.fn(),
      response: {status: 503, data: {}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).toBeCalledWith(
      'ただいまシステムメンテナンスを実施しております。時間をおいてから再度お試しください。',
    );
  });

  test('504 SGateway Timeoutの場合に時間をおいてから再操作をするように促すスナックバーを表示', async () => {
    const axiosError = {
      config: jest.fn(),
      response: {status: 504, data: {}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).toBeCalledWith(
      'サーバへの接続がタイムアウトしました。時間をおいてから再度お試しください。',
    );
  });

  test('500 Internal Server Errorの場合に予期せぬエラーのスナックバーを表示', async () => {
    const axiosError = {
      config: jest.fn(),
      response: {status: 500, statusText: 'Internal Server Error', data: {message: 'message', code: 'errorCode'}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).toBeCalledWith(
      '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
    );
  });

  test('disableGlobalErrorHandlerが設定されている場合に何も行わない', async () => {
    const query = {meta: {disableGlobalErrorHandler: true}} as unknown as Query<unknown, unknown, unknown, QueryKey>;
    const axiosError = {
      config: jest.fn(),
      response: {status: 500, statusText: 'Internal Server Error', data: {message: 'message', code: 'errorCode'}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalQueryErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, query);
    expect(mockSnackbarShow).not.toBeCalled();
  });
});

describe('useDefaultGlobalMutationErrorHandler', () => {
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

  test('disableGlobalErrorHandlerが設定されている場合に何も行わない', async () => {
    const mutation = {meta: {disableGlobalErrorHandler: true}} as unknown as Mutation<
      unknown,
      unknown,
      unknown,
      unknown
    >;
    const axiosError = {
      config: jest.fn(),
      response: {status: 500, statusText: 'Internal Server Error', data: {message: 'message', code: 'errorCode'}},
      isAxiosError: true,
      toJSON: () => {},
    } as unknown as AxiosError;
    await loadBundledMessagesAsync();
    const {result: errorHandler} = renderHook(() => useDefaultGlobalMutationErrorHandler());
    expect(errorHandler.current).not.toBeUndefined();
    errorHandler.current(axiosError, jest.fn(), jest.fn(), mutation);
    expect(mockSnackbarShow).not.toBeCalled();
  });
});
