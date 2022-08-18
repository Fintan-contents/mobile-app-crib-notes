import {db} from '../db';
import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';

export const questionCommentLikeData = () => {
  db.questionCommentLike.create({questionId: '1', commentId: '1', accountId: adminAccount.accountId});
  db.questionCommentLike.create({questionId: '4', commentId: '2', accountId: santokuAccount.accountId});
};
