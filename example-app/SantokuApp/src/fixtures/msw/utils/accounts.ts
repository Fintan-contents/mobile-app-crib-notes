import {adminAccount} from '../datas/accountMaxData';
import {partnerAccount} from '../datas/accountMinData';

const isPartnerAccount = (accountId: string) => {
  return accountId === partnerAccount.accountId;
};

const isAdminAccount = (accountId: string) => {
  return accountId === adminAccount.accountId;
};

export {isPartnerAccount, isAdminAccount};
