import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const putAccountsMeEventLikes = rest.put(
  `${backendUrl}/accounts/me/likes/events/:eventId`,
  async (req, res, ctx) => {
    try {
      const accountId = getLoggedInAccountId();
      const eventId = String(req.params.eventId);
      const db = getDb(accountId);
      const eventLike = db.eventLike.findFirst({where: {accountId: {equals: accountId}, eventId: {equals: eventId}}});
      if (!eventLike) {
        db.eventLike.create({eventId, accountId});
        db.event.update({
          where: {accountId: {equals: accountId}, eventId: {equals: eventId}},
          data: {likes: likes => likes + 1},
        });
      }

      return delayedResponse(ctx.status(204));
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);
