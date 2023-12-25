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

import {Account} from 'features/backend/apis/model';

import {maxDb} from '../db';

export const accountMaxData = () => {
  maxDb.account.create(adminAccount);
};

export const adminAccount: Account = {
  accountId: 'admin',
  profile: {
    nickname: 'santoku.administrator.techlead.1234567890123456789',
    type: ['administrator', 'techlead'],
    points: 99999999,
    totalPoints: 99999999,
  },
  deviceTokens: ['999999999-123467890', '999999999-0987654321'],
};
