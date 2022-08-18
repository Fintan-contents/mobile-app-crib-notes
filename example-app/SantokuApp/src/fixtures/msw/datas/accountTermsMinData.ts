import {minDb} from '../db';
import {partnerAccount} from './accountMinData';

export const accountTermsMinData = () => {
  minDb.accountTerms.create({accountId: partnerAccount.accountId, hasAgreed: false, agreedVersion: '0.0.1'});
};
