import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from './getLoggedInAccountId';

export const deleteAccountsMeAnswerLikes = rest.delete(
  `${backendUrl}/accounts/me/likes/questions/:questionId/answers/:answerId`,
  async (req, res, ctx) => {
    try {
      const accountId = getLoggedInAccountId();
      const questionId = String(req.params.questionId);
      const answerId = String(req.params.answerId);
      const db = getDb(accountId);
      const answerLike = db.answerLike.findFirst({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}, answerId: {equals: answerId}},
      });
      if (answerLike) {
        db.answerLike.delete({
          where: {accountId: {equals: accountId}, questionId: {equals: questionId}, answerId: {equals: answerId}},
        });
      }

      return delayedResponse(ctx.status(204));
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);
