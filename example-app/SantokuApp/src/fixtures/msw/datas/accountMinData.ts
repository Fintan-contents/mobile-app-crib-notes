import {Account} from 'features/backend/apis/model';

import {minDb} from '../db';

export const accountMinData = () => {
  minDb.account.create(partnerAccount);
};

export const partnerAccount: Account = {
  accountId: 'partner',
  profile: {
    nickname: 'p',
    type: ['partner'],
    points: 0,
    totalPoints: 0,
  },
  deviceTokens: [],
};
