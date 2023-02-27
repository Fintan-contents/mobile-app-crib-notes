import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {db} from '../db';

export const questionCommentLikeData = () => {
  db.questionCommentLike.create({
    questionCommentLikeId: '1',
    questionId: '1',
    commentId: '1',
    accountId: adminAccount.accountId,
  });
  db.questionCommentLike.create({
    questionCommentLikeId: '2',
    questionId: '4',
    commentId: '2',
    accountId: santokuAccount.accountId,
  });
};
