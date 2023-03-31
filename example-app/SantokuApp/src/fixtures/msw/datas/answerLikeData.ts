import {santokuAccount} from './accountData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const answerLikeData = () => {
  db.answerLike.create({answerLikeId: '1', questionId: '1', answerId: '1', accountId: santokuAccount.accountId});
  db.answerLike.create({answerLikeId: '2', questionId: '1', answerId: '1', accountId: partnerAccount.accountId});
  db.answerLike.create({answerLikeId: '3', questionId: '2', answerId: '2', accountId: santokuAccount.accountId});
  db.answerLike.create({answerLikeId: '4', questionId: '3', answerId: '3', accountId: partnerAccount.accountId});
  db.answerLike.create({answerLikeId: '5', questionId: '3', answerId: '3', accountId: partnerAccount.accountId});
  db.answerLike.create({answerLikeId: '6', questionId: '4', answerId: '5', accountId: partnerAccount.accountId});
};
