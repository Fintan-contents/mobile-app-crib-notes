import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {maxDb} from '../db';

export const answerLikeMaxData = () => {
  maxDb.answerLike.create({answerLikeId: '1', questionId: '1', answerId: '1', accountId: santokuAccount.accountId});
  maxDb.answerLike.create({answerLikeId: '2', questionId: '1', answerId: '1', accountId: adminAccount.accountId});
};
