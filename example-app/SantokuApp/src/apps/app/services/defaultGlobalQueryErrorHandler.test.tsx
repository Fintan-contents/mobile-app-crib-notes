import {AxiosError} from 'axios';
import {setHandleError} from 'bases/core/errors/handleError';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Query, QueryClient, QueryKey} from 'react-query';

import {defaultGlobalQueryErrorHandler} from './defaultGlobalQueryErrorHandler';
import {loadBundledMessagesAsync} from './loadBundledMessagesAsync';

setHandleError(jest.fn());

jest.mock('bases/logging');

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe('defaultGlobalQueryErrorHandler', () => {
  const query = {} as unknown as Query<unknown, unknown, unknown, QueryKey>;
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

  test('500 Internal Server Errorの場合に予期せぬエラーのスナックバーを表示', async () => {
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalQueryErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError, query);
    expect(spySnackbar).toHaveBeenCalledWith(
      '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
    );
  });

  test('disableGlobalErrorHandlerが設定されている場合に何も行わない', async () => {
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    const query = {meta: {disableGlobalErrorHandler: true}} as unknown as Query<unknown, unknown, unknown, QueryKey>;
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalQueryErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError, query);
    expect(spySnackbar).not.toHaveBeenCalled();
  });
});
