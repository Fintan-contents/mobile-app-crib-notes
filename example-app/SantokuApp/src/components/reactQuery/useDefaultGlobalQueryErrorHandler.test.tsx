import {renderHook} from '@testing-library/react-hooks';
import {AxiosError} from 'axios';
import {useSnackbar, WithSnackbar} from 'components/overlay';
import {loadBundledMessagesAsync} from 'framework/initialize/helpers';
import React from 'react';
import {Query, QueryKey} from 'react-query';

import {useDefaultGlobalQueryErrorHandler} from './useDefaultGlobalQueryErrorHandler';

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
