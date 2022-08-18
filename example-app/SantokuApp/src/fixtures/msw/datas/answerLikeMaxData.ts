import {maxDb} from '../db';
import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';

export const answerLikeMaxData = () => {
  maxDb.answerLike.create({questionId: '1', answerId: '1', accountId: santokuAccount.accountId});
  maxDb.answerLike.create({questionId: '1', answerId: '1', accountId: adminAccount.accountId});
};
