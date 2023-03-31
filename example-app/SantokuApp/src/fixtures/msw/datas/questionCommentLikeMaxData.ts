import {adminAccount} from './accountMaxData';
import {maxDb} from '../db';

export const questionCommentLikeMaxData = () => {
  maxDb.questionCommentLike.create({questionId: '1', commentId: '1', accountId: adminAccount.accountId});
};
