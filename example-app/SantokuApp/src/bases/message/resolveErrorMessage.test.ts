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

import {AxiosError, AxiosHeaders} from 'axios';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';

import {resolveErrorMessage} from './resolveErrorMessage';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('resolveApiErrorMessage', () => {
  test('AxiosErrorの場合は通信エラーが返ってくること', () => {
    const {title, message} = resolveErrorMessage(
      new AxiosError(
        'error',
        '',
        {headers: new AxiosHeaders()},
        {},
        {
          status: 500,
          statusText: 'Internal Server Error',
          data: {},
          headers: {},
          config: {headers: new AxiosHeaders()},
        },
      ),
    );
    expect(title).toEqual('システムエラー');
    expect(message).toEqual('通信中にエラーが発生しました。\n500');
  });
  test('想定外のエラーの場合はシステムエラーが返ってくること', () => {
    const {title, message} = resolveErrorMessage({});
    expect(title).toEqual('システムエラー');
    expect(message).toEqual('しばらく経ってからもう1度お試しください。');
  });
});
