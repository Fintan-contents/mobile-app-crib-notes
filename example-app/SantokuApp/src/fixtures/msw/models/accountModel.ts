import {nullable, primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const accountModel = {
  account: {
    accountId: primaryKey(generateId),
    profile: {
      nickname: String,
      type: Array,
      points: Number,
      totalPoints: Number,
      avatarImageUrl: nullable(String),
    },
    deviceTokens: Array,
  },
};
