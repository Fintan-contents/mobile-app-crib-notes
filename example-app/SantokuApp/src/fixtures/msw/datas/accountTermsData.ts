import {santokuAccount} from './accountData';
import {db} from '../db';

export const accountTermsData = () => {
  db.accountTerms.create({accountId: santokuAccount.accountId, hasAgreed: true, agreedVersion: '0.1.0'});
};
