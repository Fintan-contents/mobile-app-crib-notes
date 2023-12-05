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

import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const eventLikeData = () => {
  db.eventLike.create({eventLikeId: '1', eventId: '1', accountId: partnerAccount.accountId});
  db.eventLike.create({eventLikeId: '2', eventId: '2', accountId: adminAccount.accountId});
  db.eventLike.create({eventLikeId: '3', eventId: '3', accountId: santokuAccount.accountId});
  db.eventLike.create({eventLikeId: '4', eventId: '5', accountId: adminAccount.accountId});
  db.eventLike.create({eventLikeId: '5', eventId: '6', accountId: santokuAccount.accountId});
};
