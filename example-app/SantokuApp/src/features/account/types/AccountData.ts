import {Account, TermsOfService, TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

type Terms = {
  termsAgreementStatus?: TermsOfServiceAgreementStatus;
  termsOfService?: TermsOfService;
};

export type AccountData = {
  account: Account;
  terms: Terms;
};
