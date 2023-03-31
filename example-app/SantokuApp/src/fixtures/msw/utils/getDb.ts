import {isAdminAccount, isPartnerAccount} from './accounts';
import {db, maxDb, minDb} from '../db';

export const getDb = (accountId: string) => {
  if (isAdminAccount(accountId)) {
    return maxDb;
  } else if (isPartnerAccount(accountId)) {
    return minDb;
  } else {
    return db;
  }
};
