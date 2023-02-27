import {UpdateDeviceToken} from 'features/backend/apis/model';
import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const postAccountsMeDeviceToken = rest.post(`${backendUrl}/accounts/me/device-token`, async (req, res, ctx) => {
  try {
    const {oldDeviceToken, newDeviceToken} = await req.json<UpdateDeviceToken>();
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);

    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    const savedDeviceTokens = account!.deviceTokens;
    const deviceTokens = savedDeviceTokens.filter(d => d === oldDeviceToken);
    const existed = deviceTokens.some(d => d === newDeviceToken);
    if (!existed) {
      deviceTokens.push(newDeviceToken);
    }
    db.account.update({where: {accountId: {equals: accountId}}, data: {deviceTokens}});
    return delayedResponse(ctx.status(204));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
