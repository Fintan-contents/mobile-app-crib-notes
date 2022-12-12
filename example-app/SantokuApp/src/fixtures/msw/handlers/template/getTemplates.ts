import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const getTemplates = rest.get(`${backendUrl}/templates`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);
    const templates = db.template.getAll();
    return delayedResponse(ctx.json(templates));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
