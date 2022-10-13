import {maxDb} from '../db';
import {santokuAccount} from './accountData';
import {partnerAccount} from './accountMinData';

export const eventLikeMaxData = () => {
  maxDb.eventLike.create({eventLikeId: '1', eventId: '1', accountId: partnerAccount.accountId});
  maxDb.eventLike.create({eventLikeId: '2', eventId: '2', accountId: santokuAccount.accountId});
};
