import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';

export type TermsOfServiceAgreementStatusWithCreatedAt = TermsOfServiceAgreementStatus & {
  createdAt: string;
};
