import {db} from '../db';
import {santokuAccount} from './accountData';

export const accountTermsData = () => {
  db.accountTerms.create({accountId: santokuAccount.accountId, hasAgreed: true, agreedVersion: '0.1.0'});
};
