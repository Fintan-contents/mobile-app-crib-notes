/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Query, QueryClient, QueryKey} from '@tanstack/react-query';
import {AxiosError, AxiosHeaders} from 'axios';
import {setHandleError} from 'bases/core/errors/handleError';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';

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
    {headers: new AxiosHeaders()},
    {},
    {
      status: 500,
      statusText: 'Internal Server Error',
      data: {message: 'message', code: 'errorCode'},
      headers: {},
      config: {headers: new AxiosHeaders()},
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
