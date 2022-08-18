import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const getTags = rest.get(`${backendUrl}/tags`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);
    const tags = db.tag.getAll();
    return delayedResponse(ctx.json(tags));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
