import {partnerAccount} from './accountMinData';
import {minDb} from '../db';

export const accountTermsMinData = () => {
  minDb.accountTerms.create({accountId: partnerAccount.accountId, hasAgreed: false, agreedVersion: '0.0.1'});
};
