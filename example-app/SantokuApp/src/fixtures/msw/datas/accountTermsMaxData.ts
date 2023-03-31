import {adminAccount} from './accountMaxData';
import {maxDb} from '../db';

export const accountTermsMaxData = () => {
  maxDb.accountTerms.create({accountId: adminAccount.accountId, hasAgreed: true, agreedVersion: '0.1.0'});
};
