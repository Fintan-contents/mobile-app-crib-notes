import {LikedQuestionResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const getAccountsMeQuestionLikes = rest.get(
  `${backendUrl}/accounts/me/likes/questions/:questionId`,
  (req, res, ctx) => {
    try {
      const accountId = getLoggedInAccountId();
      const questionId = String(req.params.questionId);
      const db = getDb(accountId);

      const questionLike = db.questionLike.findFirst({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}},
      });
      const questionCommentLike = db.questionCommentLike.findMany({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}},
      });
      const questionCommentIds = questionCommentLike.map(qc => qc.commentId);
      const answerLike = db.answerLike.findMany({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}},
      });
      const answerCommentLike = db.answerCommentLike.findMany({
        where: {accountId: {equals: accountId}, questionId: {equals: questionId}},
      });

      const al = answerLike.map(al => ({answerId: al.answerId, liked: true, commentId: []}));

      // answerCommentLikesを{questionId: string; answerId: string; liked: boolean; commentId: string[]}形式に変更
      const answerComment = answerCommentLike.reduce((acc, curr) => {
        if (curr.questionId in acc) {
          acc[curr.answerId] = {
            answerId: curr.answerId,
            liked: false,
            commentId: [...acc[curr.questionId].commentId, curr.commentId],
          };
          return acc;
        }
        acc[curr.answerId] = {
          answerId: curr.answerId,
          liked: false,
          commentId: [curr.commentId],
        };
        return acc;
      }, {} as {[key: string]: {answerId: string; liked: boolean; commentId: string[]}});
      const acl = Object.values(answerComment);

      // alとaclをマージ
      const answer = Object.values(
        [...al, ...acl].reduce((acc, curr) => {
          if (curr.answerId in acc) {
            acc[curr.answerId] = {
              answerId: curr.answerId,
              liked: acc[curr.answerId].liked || curr.liked,
              commentId: [...acc[curr.answerId].commentId, ...curr.commentId],
            };
            return acc;
          }
          acc[curr.answerId] = {
            answerId: curr.answerId,
            liked: curr.liked,
            commentId: [...curr.commentId],
          };
          return acc;
        }, {} as {[key: string]: {answerId: string; liked: boolean; commentId: string[]}}),
      );

      return delayedResponse(
        ctx.json<LikedQuestionResponse>({questionId, liked: !!questionLike, commentId: questionCommentIds, answer}),
      );
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);
