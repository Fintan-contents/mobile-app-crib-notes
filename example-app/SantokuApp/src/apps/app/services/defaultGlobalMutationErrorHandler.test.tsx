import {AxiosError} from 'axios';
import {setHandleError} from 'bases/core/errors/handleError';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Mutation, QueryClient} from 'react-query';

import {defaultGlobalMutationErrorHandler} from './defaultGlobalMutationErrorHandler';
import {loadBundledMessagesAsync} from './loadBundledMessagesAsync';

setHandleError(jest.fn());

jest.mock('bases/logging');
afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe('defaultGlobalMutationErrorHandler', () => {
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
    const mutation = {} as unknown as Mutation<unknown, unknown, unknown, unknown>;
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalMutationErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError, jest.fn(), jest.fn(), mutation);
    expect(spySnackbar).toHaveBeenCalledWith(
      '予期せぬ通信エラーが発生しました。時間をおいてから再度お試しいただき、解決しない場合はお問い合わせください。',
    );
  });

  test('disableGlobalErrorHandlerが設定されている場合に何も行わない', async () => {
    const mutation = {meta: {disableGlobalErrorHandler: true}} as unknown as Mutation<
      unknown,
      unknown,
      unknown,
      unknown
    >;
    const spySnackbar = jest.spyOn(Snackbar, 'show').mockImplementation(() => {});
    await loadBundledMessagesAsync();
    const errorHandler = defaultGlobalMutationErrorHandler(new QueryClient());
    expect(errorHandler).not.toBeUndefined();
    errorHandler(axiosError, jest.fn(), jest.fn(), mutation);
    expect(spySnackbar).not.toHaveBeenCalled();
  });
});
