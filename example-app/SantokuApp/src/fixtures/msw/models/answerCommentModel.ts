import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const answerCommentModel = {
  answerComment: {
    commentId: primaryKey(generateId),
    answerId: String,
    content: String,
    datetime: String,
    likes: Number,
    accountId: String,
    profile: {
      nickname: String,
      type: Array,
      points: Number,
      totalPoints: Number,
    },
  },
};
