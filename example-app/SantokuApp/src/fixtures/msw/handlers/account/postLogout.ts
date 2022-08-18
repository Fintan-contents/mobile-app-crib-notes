import {rest} from 'msw';

import {db} from '../../db';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getLoggedInAccountId} from './getLoggedInAccountId';

export const postLogout = rest.post(`${backendUrl}/logout`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    db.loggedInAccount.delete({where: {accountId: {equals: accountId}}});

    return delayedResponse(ctx.status(204));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
