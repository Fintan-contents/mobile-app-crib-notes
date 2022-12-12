import {maxDb} from '../db';
import {adminAccount} from './accountMaxData';

export const accountTermsMaxData = () => {
  maxDb.accountTerms.create({accountId: adminAccount.accountId, hasAgreed: true, agreedVersion: '0.1.0'});
};
