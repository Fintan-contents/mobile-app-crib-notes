import * as FileSystem from 'expo-file-system';
import {Account} from 'features/backend/apis/model';

import {db} from '../db';

export const accountData = () => {
  db.account.create(santokuAccount);
};

export const santokuAccount: Account = {
  accountId: 'santoku',
  profile: {
    nickname: 'santoku',
    type: [],
    points: 1000,
    totalPoints: 3000,
    avatarImageUrl: `${FileSystem.documentDirectory!}santoku-avatar.png`,
  },
  deviceTokens: [],
};
