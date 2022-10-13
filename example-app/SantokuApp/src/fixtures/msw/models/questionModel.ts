import {primaryKey, nullable} from '@mswjs/data';

import {format2Iso8601} from '../utils/format2Iso8601';
import {generateId} from '../utils/id';

export const questionModel = {
  question: {
    questionId: primaryKey(generateId),
    title: String,
    content: String,
    tags: () => [] as string[],
    datetime: () => format2Iso8601(new Date()),
    beginner: Boolean,
    resolved: () => false,
    views: () => 0,
    answers: () => 0,
    likes: () => 0,
    comments: () => 0,
    lastUpdatedAt: () => format2Iso8601(new Date()),
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
