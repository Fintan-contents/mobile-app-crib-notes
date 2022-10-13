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
