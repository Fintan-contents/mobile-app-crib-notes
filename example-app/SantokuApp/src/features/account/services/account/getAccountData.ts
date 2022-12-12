import {getAccountsMe, getAccountsMeTerms} from 'features/backend/apis/account/account';
import {getTerms} from 'features/backend/apis/terms/terms';

export const getAccountData = async () => {
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
};
