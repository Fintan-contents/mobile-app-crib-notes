import {db} from '../db';
import {santokuAccount} from './accountData';
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';

export const eventLikeData = () => {
  db.eventLike.create({eventId: '1', accountId: partnerAccount.accountId});
  db.eventLike.create({eventId: '2', accountId: adminAccount.accountId});
  db.eventLike.create({eventId: '3', accountId: santokuAccount.accountId});
  db.eventLike.create({eventId: '5', accountId: adminAccount.accountId});
  db.eventLike.create({eventId: '6', accountId: santokuAccount.accountId});
};
