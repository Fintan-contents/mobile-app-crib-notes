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

import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const getEvents = rest.get(`${backendUrl}/events`, (req, res, ctx) => {
  try {
    const target = req.url.searchParams.get('target');
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);
    const events = db.event.findMany({orderBy: {endDate: 'desc'}});
    if (target === 'active') {
      const now = new Date();
      const filtered = events.filter(e => now < new Date(e.endDate));
      return delayedResponse(ctx.json(filtered));
    }
    return delayedResponse(ctx.json(events));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
