import {db} from '../db';
import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';

export const answerCommentLikeData = () => {
  db.answerCommentLike.create({questionId: '1', answerId: '1', commentId: '1', accountId: adminAccount.accountId});
  db.answerCommentLike.create({questionId: '4', answerId: '4', commentId: '4', accountId: santokuAccount.accountId});
};
