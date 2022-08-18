import {maxDb} from '../db';
import {adminAccount} from './accountMaxData';

export const questionCommentLikeMaxData = () => {
  maxDb.questionCommentLike.create({questionId: '1', commentId: '1', accountId: adminAccount.accountId});
};
