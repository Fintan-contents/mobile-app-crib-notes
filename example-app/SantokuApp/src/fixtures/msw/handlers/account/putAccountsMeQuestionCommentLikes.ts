import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const putAccountsMeQuestionCommentLikes = rest.put(
  `${backendUrl}/accounts/me/likes/questions/:questionId/comments/:commentId`,
  async (req, res, ctx) => {
    try {
      const accountId = getLoggedInAccountId();
      const questionId = String(req.params.questionId);
      const commentId = String(req.params.commentId);
      const db = getDb(accountId);
      const questionCommentLike = db.questionCommentLike.findFirst({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}, commentId: {equals: commentId}},
      });
      if (!questionCommentLike) {
        db.questionCommentLike.create({questionId, accountId, commentId});
        db.questionComment.update({
          where: {questionId: {equals: questionId}, commentId: {equals: commentId}},
          data: {likes: likes => likes + 1},
        });
      }

      return delayedResponse(ctx.status(204));
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);
