import {maxDb} from '../db';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';

export const questionLikeMaxData = () => {
  maxDb.questionLike.create({questionId: '1', accountId: partnerAccount.accountId});
  maxDb.questionLike.create({questionId: '1', accountId: adminAccount.accountId});
};
