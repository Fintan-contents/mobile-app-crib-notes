import {LikedEventResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const getAccountsMeEventLikes = rest.get(`${backendUrl}/accounts/me/likes/events/:eventId`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const eventId = String(req.params.eventId);
    const db = getDb(accountId);

    const event = db.eventLike.findFirst({
      where: {accountId: {equals: accountId}, eventId: {equals: eventId}},
    });

    return delayedResponse(ctx.json<LikedEventResponse>({eventId: event?.eventId}));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
