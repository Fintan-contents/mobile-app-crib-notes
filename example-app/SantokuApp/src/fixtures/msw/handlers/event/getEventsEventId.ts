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
