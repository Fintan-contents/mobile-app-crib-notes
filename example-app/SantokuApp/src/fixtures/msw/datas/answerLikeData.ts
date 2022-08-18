import {db} from '../db';
import {santokuAccount} from './accountData';
import {partnerAccount} from './accountMinData';

export const answerLikeData = () => {
  db.answerLike.create({questionId: '1', answerId: '1', accountId: santokuAccount.accountId});
  db.answerLike.create({questionId: '1', answerId: '1', accountId: partnerAccount.accountId});
  db.answerLike.create({questionId: '2', answerId: '2', accountId: santokuAccount.accountId});
  db.answerLike.create({questionId: '3', answerId: '3', accountId: partnerAccount.accountId});
  db.answerLike.create({questionId: '3', answerId: '3', accountId: partnerAccount.accountId});
  db.answerLike.create({questionId: '4', answerId: '5', accountId: partnerAccount.accountId});
};
