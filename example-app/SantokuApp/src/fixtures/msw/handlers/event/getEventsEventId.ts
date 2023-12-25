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

export const getEventsEventId = rest.get(`${backendUrl}/events/:eventId`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const eventId = String(req.params.eventId);
    const db = getDb(accountId);
    const event = db.event.findFirst({where: {eventId: {equals: eventId}}});
    if (event) {
      return delayedResponse(ctx.json(event));
    }
    return delayedResponse(ctx.status(404));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
