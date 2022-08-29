import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from './getLoggedInAccountId';

export const putAccountsMeQuestionLikes = rest.put(
  `${backendUrl}/accounts/me/likes/questions/:questionId`,
  async (req, res, ctx) => {
    try {
      const accountId = getLoggedInAccountId();
      const questionId = String(req.params.questionId);
      const db = getDb(accountId);
      const questionLike = db.questionLike.findFirst({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}},
      });
      if (!questionLike) {
        db.questionLike.create({questionId, accountId});
      }

      return delayedResponse(ctx.status(204));
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);