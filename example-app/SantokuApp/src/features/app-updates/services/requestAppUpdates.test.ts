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
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {getAppUpdates} from 'features/backend/apis/system/system';

import {requestAppUpdates} from './requestAppUpdates';

jest.mock('features/backend/apis/system/system');

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});
beforeEach(() => {
  jest.resetAllMocks();
});

describe('checkAppUpdates', () => {
  it('Platformがwebの場合はApplicationErrorがスローされること', async () => {
    await expect(() => requestAppUpdates('web', '0.0.1')).rejects.toThrow(
      new ApplicationError('Not supported type. type=[web]'),
    );
  });
  it('nativeApplicationVersionがnullの場合はApplicationErrorがスローされること', async () => {
    await expect(() => requestAppUpdates('android', null)).rejects.toThrow(
      new ApplicationError('Invalid version. version=[null]'),
    );
  });
  it('getAppUpdatesがエラーをスローした場合はそのエラーがスローされること', async () => {
    (getAppUpdates as jest.Mock).mockImplementation(() => {
      throw new Error('dummy');
    });

    await expect(() => requestAppUpdates('android', '0.1.1')).rejects.toThrow(new Error('dummy'));
  });
});
