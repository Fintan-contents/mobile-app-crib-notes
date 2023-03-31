import {LikedQuestionResponse} from 'features/backend/apis/model';
import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const getAccountsMeLikes = rest.get(`${backendUrl}/accounts/me/likes`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);
    const eventLikes = db.eventLike.findMany({
      where: {accountId: {equals: accountId}},
    });
    const questionLikes = db.questionLike.findMany({where: {accountId: {equals: accountId}}});
    const questionCommentLikes = db.questionCommentLike.findMany({
      where: {accountId: {equals: accountId}},
    });
    const answerLikes = db.answerLike.findMany({
      where: {accountId: {equals: accountId}},
    });
    const answerCommentLikes = db.answerCommentLike.findMany({
      where: {accountId: {equals: accountId}},
    });

    // eventLikesをLikedEventResponse形式に変更
    const eventResponse = eventLikes.map(el => ({eventId: el.eventId}));

    /**
     * 以降の処理では、questionLikes,questionCommentLikes,answerLikes,answerCommentLikesの形式をLikedQuestionResponseに揃えて、
     * 最終的にマージしています。
     */

    /**
     * questionLikesをLikedQuestionResponseと同じ形式に変更
     */
    const ql = questionLikes.map(ql => ({questionId: ql.questionId, liked: true, commentId: [], answer: []}));

    /**
     * questionCommentLikesをLikedQuestionResponseと同じ形式に変更
     */
    const questionComment = questionCommentLikes.reduce((acc, curr) => {
      const accCommentId = curr.questionId in acc ? acc[curr.questionId].commentId : [];
      acc[curr.questionId] = {
        questionId: curr.questionId,
        liked: false,
        commentId: [...accCommentId, curr.commentId],
        answer: [],
      };
      return acc;
    }, {} as {[key: string]: LikedQuestionResponse});
    const qcl = Object.values(questionComment);

    /**
     * answerLikesをとanswerCommentLikesをマージしてLikedQuestionResponseと同じ形式に変更
     */
    // answerLikesを{questionId: string; answerId: string; liked: boolean; commentId: string[]}形式に変更
    const al = answerLikes.map(al => ({questionId: al.questionId, answerId: al.answerId, liked: true, commentId: []}));

    // answerCommentLikesを{questionId: string; answerId: string; liked: boolean; commentId: string[]}形式に変更
    const answerComment = answerCommentLikes.reduce((acc, curr) => {
      const accCommentId = curr.questionId in acc ? acc[curr.questionId].commentId : [];
      acc[curr.questionId] = {
        questionId: curr.questionId,
        answerId: curr.answerId,
        liked: false,
        commentId: [...accCommentId, curr.commentId],
      };
      return acc;
    }, {} as {[key: string]: {questionId: string; answerId: string; liked: boolean; commentId: string[]}});
    const acl = Object.values(answerComment);

    // alとaclをマージして、LikedQuestionResponseと同じ形式に変更
    const answer = Object.values(
      [...al, ...acl].reduce((acc, curr) => {
        const accAnswer = curr.questionId in acc ? acc[curr.questionId].answer : [];
        const found = accAnswer.find(a => a.answerId === curr.answerId);
        acc[curr.questionId] = {
          questionId: curr.questionId,
          liked: false,
          commentId: [],
          answer: [
            ...accAnswer.filter(a => a.answerId !== curr.answerId),
            {
              answerId: curr.answerId,
              liked: found?.liked ? true : curr.liked,
              commentId: [...(found?.commentId ?? []), ...curr.commentId],
            },
          ],
        };
        return acc;
      }, {} as {[key: string]: LikedQuestionResponse}),
    );

    /**
     * LikedQuestionResponseと同じ形式に変更したquestionLikes,questionCommentLikes,answerLikes,answerCommentLikesをマージして、
     * レスポンスを作成
     */
    const questionResponse = Object.values(
      [...ql, ...qcl, ...answer].reduce((acc, curr) => {
        const accLiked = curr.questionId in acc ? acc[curr.questionId].liked ?? false : false;
        const accCommentId = curr.questionId in acc ? acc[curr.questionId].commentId : [];
        const accAnswer = curr.questionId in acc ? acc[curr.questionId].answer : [];
        acc[curr.questionId] = {
          questionId: curr.questionId,
          liked: accLiked || curr.liked,
          commentId: [...accCommentId, ...curr.commentId],
          answer: [...accAnswer, ...curr.answer],
        };
        return acc;
      }, {} as {[key: string]: LikedQuestionResponse}),
    );

    return delayedResponse(ctx.json([...eventResponse, ...questionResponse]));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
