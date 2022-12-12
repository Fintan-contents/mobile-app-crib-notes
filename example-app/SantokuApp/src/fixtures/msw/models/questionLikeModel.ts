import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const questionLikeModel = {
  questionLike: {
    questionLikeId: primaryKey(generateId),
    accountId: String,
    questionId: String,
  },
};
