import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const eventLikeData = () => {
  db.eventLike.create({eventLikeId: '1', eventId: '1', accountId: partnerAccount.accountId});
  db.eventLike.create({eventLikeId: '2', eventId: '2', accountId: adminAccount.accountId});
  db.eventLike.create({eventLikeId: '3', eventId: '3', accountId: santokuAccount.accountId});
  db.eventLike.create({eventLikeId: '4', eventId: '5', accountId: adminAccount.accountId});
  db.eventLike.create({eventLikeId: '5', eventId: '6', accountId: santokuAccount.accountId});
};
