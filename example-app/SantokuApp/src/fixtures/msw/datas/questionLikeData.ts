import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const questionLikeData = () => {
  db.questionLike.create({questionLikeId: '1', questionId: '1', accountId: partnerAccount.accountId});
  db.questionLike.create({questionLikeId: '2', questionId: '1', accountId: adminAccount.accountId});
  db.questionLike.create({questionLikeId: '3', questionId: '2', accountId: partnerAccount.accountId});
  db.questionLike.create({questionLikeId: '4', questionId: '2', accountId: adminAccount.accountId});
  db.questionLike.create({questionLikeId: '5', questionId: '3', accountId: adminAccount.accountId});
  db.questionLike.create({questionLikeId: '6', questionId: '4', accountId: santokuAccount.accountId});
  db.questionLike.create({questionLikeId: '7', questionId: '6', accountId: adminAccount.accountId});
};
