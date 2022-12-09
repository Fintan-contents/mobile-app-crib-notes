import {maxDb} from '../db';
import {santokuAccount} from './accountData';

export const answerCommentLikeMaxData = () => {
  maxDb.answerCommentLike.create({questionId: '1', answerId: '1', commentId: '1', accountId: santokuAccount.accountId});
};
