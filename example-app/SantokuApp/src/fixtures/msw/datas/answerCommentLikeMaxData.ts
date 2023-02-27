import {santokuAccount} from './accountData';
import {maxDb} from '../db';

export const answerCommentLikeMaxData = () => {
  maxDb.answerCommentLike.create({questionId: '1', answerId: '1', commentId: '1', accountId: santokuAccount.accountId});
};
