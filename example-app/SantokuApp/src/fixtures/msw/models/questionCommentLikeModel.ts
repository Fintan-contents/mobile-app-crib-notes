import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const questionCommentLikeModel = {
  questionCommentLike: {
    questionCommentLikeId: primaryKey(generateId),
    accountId: String,
    questionId: String,
    commentId: String,
  },
};
