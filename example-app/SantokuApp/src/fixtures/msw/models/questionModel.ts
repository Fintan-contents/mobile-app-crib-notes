import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const questionModel = {
  question: {
    questionId: primaryKey(generateId),
    title: String,
    content: String,
    tags: Array,
    datetime: String,
    beginner: Boolean,
    resolved: Boolean,
    views: Number,
    answers: Number,
    likes: Number,
    comments: Number,
    lastUpdatedAt: String,
    accountId: String,
    profile: {
      nickname: String,
      type: Array,
      points: Number,
      totalPoints: Number,
    },
  },
};
