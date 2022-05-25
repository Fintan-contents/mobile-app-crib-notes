import {createUseContextAndProvider} from 'framework/utilities';
import {Account, TermsOfService, TermsOfServiceAgreementStatus} from 'generated/backend/model';

export type Terms = {
  termsAgreementStatus?: TermsOfServiceAgreementStatus;
  termsOfService?: TermsOfService;
};

export type AccountContext = {
  account?: Account;
  terms?: Terms;
  isLoggedIn: boolean;
};
export const [useAccountContext, AccountContextProvider] = createUseContextAndProvider<AccountContext>();
