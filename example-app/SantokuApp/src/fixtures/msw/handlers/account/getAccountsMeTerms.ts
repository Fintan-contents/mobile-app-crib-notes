import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from './getLoggedInAccountId';

export const getAccountsMeTerms = rest.get(`${backendUrl}/accounts/me/terms`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);
    const terms = db.accountTerms.findFirst({where: {accountId: {equals: accountId}}});
    return delayedResponse(ctx.json(terms), ctx.delay(100));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
