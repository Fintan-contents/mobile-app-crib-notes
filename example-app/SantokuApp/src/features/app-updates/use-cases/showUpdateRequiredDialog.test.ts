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

import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Alert} from 'react-native';

import {showUpdateRequiredDialog} from './showUpdateRequiredDialog';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});
beforeEach(() => {
  jest.resetAllMocks();
});

describe('showUpdateRequiredDialog', () => {
  it('showUpdateRequiredDialog', () => {
    const spyAlert = jest.spyOn(Alert, 'alert');
    showUpdateRequiredDialog('0.0.1');
    expect(spyAlert).toHaveBeenCalledWith(
      'アプリアップデート',
      '現在のバージョン(0.0.1)ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
      expect.anything(),
    );
  });
});
