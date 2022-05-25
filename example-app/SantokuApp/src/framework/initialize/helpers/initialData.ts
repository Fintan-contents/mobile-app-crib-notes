import {Account, TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';
import {getAccountsMe, getAccountsMeTerms, getTerms} from 'service';

import {InitialDataError} from './initialDataError';

type Terms = {
  termsAgreementStatus?: TermsOfServiceAgreementStatus;
  termsOfService?: TermsOfService;
};

export type AccountData = {
  account?: Account;
  terms?: Terms;
};

const loadInitialAccountDataAsync = async (): Promise<AccountData> => {
  try {
    const account = (await getAccountsMe()).data;
    const termsAgreementStatus = (await getAccountsMeTerms()).data;
    let termsOfService;
    if (!termsAgreementStatus.hasAgreed) {
      termsOfService = (await getTerms()).data;
    }
    return {
      account,
      terms: {termsAgreementStatus, termsOfService},
    };
  } catch (e) {
    throw new InitialDataError('Failed to load initial account data.', e);
  }
};

export {loadInitialAccountDataAsync};
