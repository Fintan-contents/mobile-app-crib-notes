import {RestContext} from 'msw';

import {isLoggedInAccountIdNotFound} from '../handlers/account/getLoggedInAccountId';
import {delayedResponse} from './delayedResponse';

export const errorResponse = (e: unknown, ctx: RestContext) => {
  console.error(e);
  if (isLoggedInAccountIdNotFound(e)) {
    return delayedResponse(ctx.status(404), ctx.delay(100));
  }
  return delayedResponse(ctx.status(500), ctx.delay(100));
};
