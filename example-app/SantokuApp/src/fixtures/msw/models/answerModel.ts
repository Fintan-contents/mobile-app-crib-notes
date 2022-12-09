import {primaryKey, nullable} from '@mswjs/data';

import {generateId} from '../utils/id';

export const answerModel = {
  answer: {
    answerId: primaryKey(generateId),
    questionId: String,
    content: String,
    datetime: String,
    likes: Number,
    comments: Number,
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
