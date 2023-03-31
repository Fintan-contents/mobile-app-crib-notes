import {AccountLogin, AccountLoginResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {setLoggedInAccountId} from './setLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const postLogin = rest.post(`${backendUrl}/login`, async (req, res, ctx) => {
  try {
    const {accountId} = await req.json<AccountLogin>();
    const db = getDb(accountId);
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    if (!account) {
      return delayedResponse(ctx.status(401), ctx.delay(100));
    }

    setLoggedInAccountId(accountId);

    return delayedResponse(ctx.json<AccountLoginResponse>({status: 'COMPLETE'}), ctx.delay(100));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
