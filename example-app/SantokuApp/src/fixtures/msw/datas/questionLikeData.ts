import {db} from '../db';
import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';

export const questionLikeData = () => {
  db.questionLike.create({questionId: '1', accountId: partnerAccount.accountId});
  db.questionLike.create({questionId: '1', accountId: adminAccount.accountId});
  db.questionLike.create({questionId: '2', accountId: partnerAccount.accountId});
  db.questionLike.create({questionId: '2', accountId: adminAccount.accountId});
  db.questionLike.create({questionId: '3', accountId: adminAccount.accountId});
  db.questionLike.create({questionId: '4', accountId: santokuAccount.accountId});
  db.questionLike.create({questionId: '6', accountId: adminAccount.accountId});
};
