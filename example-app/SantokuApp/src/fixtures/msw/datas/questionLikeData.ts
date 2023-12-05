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

export const questionLikeData = () => {
  db.questionLike.create({questionLikeId: '1', questionId: '1', accountId: partnerAccount.accountId});
  db.questionLike.create({questionLikeId: '2', questionId: '1', accountId: adminAccount.accountId});
  db.questionLike.create({questionLikeId: '3', questionId: '2', accountId: partnerAccount.accountId});
  db.questionLike.create({questionLikeId: '4', questionId: '2', accountId: adminAccount.accountId});
  db.questionLike.create({questionLikeId: '5', questionId: '3', accountId: adminAccount.accountId});
  db.questionLike.create({questionLikeId: '6', questionId: '4', accountId: santokuAccount.accountId});
  db.questionLike.create({questionLikeId: '7', questionId: '6', accountId: adminAccount.accountId});
};
