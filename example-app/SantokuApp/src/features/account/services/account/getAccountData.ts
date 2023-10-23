import {getAccountsMe, getAccountsMeTerms} from 'features/backend/apis/account/account';
import {getTerms} from 'features/backend/apis/terms/terms';

export const getAccountData = async (signal?: AbortSignal) => {
  const account = (await getAccountsMe(signal)).data;
  const termsAgreementStatus = (await getAccountsMeTerms(signal)).data;
  let termsOfService;
  if (!termsAgreementStatus.hasAgreed) {
    termsOfService = (await getTerms(signal)).data;
  }
  return {
    account,
    terms: {termsAgreementStatus, termsOfService},
  };
};
