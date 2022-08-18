import {Account} from 'features/backend/apis/model';

import {maxDb} from '../db';

export const accountMaxData = () => {
  maxDb.account.create(adminAccount);
};

export const adminAccount: Account = {
  accountId: 'admin',
  profile: {
    nickname: 'santoku.administrator.techlead.1234567890123456789',
    type: ['administrator', 'techlead'],
    points: 99999999,
    totalPoints: 99999999,
  },
  deviceTokens: ['999999999-123467890', '999999999-0987654321'],
};
