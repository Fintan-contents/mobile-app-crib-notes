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

import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {m} from 'bases/message/Message';

export const messages = [
  {
    name: 'ホーム',
    value: m('ホーム'),
  },
  {
    name: 'app.account.signupError',
    value: m('app.account.signupError', String(new ApplicationError('Failed to sign up.'))),
  },
  {
    name: 'fw.error.通信エラー',
    value: m('fw.error.通信エラー'),
  },
];
