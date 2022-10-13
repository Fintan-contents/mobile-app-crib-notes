import {maxDb} from '../db';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';

export const questionLikeMaxData = () => {
  maxDb.questionLike.create({questionLikeId: '1', questionId: '1', accountId: partnerAccount.accountId});
  maxDb.questionLike.create({questionLikeId: '2', questionId: '1', accountId: adminAccount.accountId});
};
