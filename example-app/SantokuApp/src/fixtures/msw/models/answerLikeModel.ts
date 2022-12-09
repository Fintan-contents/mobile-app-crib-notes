import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const answerLikeModel = {
  answerLike: {
    answerLikeId: primaryKey(generateId),
    accountId: String,
    questionId: String,
    answerId: String,
  },
};
