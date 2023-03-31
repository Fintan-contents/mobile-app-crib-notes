import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {db} from '../db';

export const answerCommentLikeData = () => {
  db.answerCommentLike.create({
    answerCommentLikeId: '1',
    questionId: '1',
    answerId: '1',
    commentId: '1',
    accountId: adminAccount.accountId,
  });
  db.answerCommentLike.create({
    answerCommentLikeId: '2',
    questionId: '4',
    answerId: '4',
    commentId: '4',
    accountId: santokuAccount.accountId,
  });
};
