import {primaryKey, nullable} from '@mswjs/data';

import {generateId} from '../utils/id';

export const eventModel = {
  event: {
    eventId: primaryKey(generateId),
    title: String,
    content: String,
    endDate: String,
    likes: () => 0,
    accountId: String,
    profile: {
      nickname: String,
      type: Array,
      points: Number,
      totalPoints: Number,
      avatarImageUrl: nullable(String),
    },
  },
};
