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

import {EventContent, EventRegistration} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const postEvents = rest.post(`${backendUrl}/events`, async (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const {title, content, endDate} = await req.json<EventRegistration>();
    const db = getDb(accountId);
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    if (!account) {
      return delayedResponse(ctx.status(401));
    }
    const event = {title, content, endDate, likes: 0, ...account};
    const savedEvent = db.event.create(event);
    return delayedResponse(
      ctx.status(201),
      ctx.json<EventContent>({
        eventId: savedEvent.eventId,
        title: savedEvent.title,
        content: savedEvent.content,
        endDate: savedEvent.endDate,
        likes: savedEvent.likes,
      }),
    );
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
