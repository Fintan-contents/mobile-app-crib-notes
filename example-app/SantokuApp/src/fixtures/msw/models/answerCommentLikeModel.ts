import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const answerCommentLikeModel = {
  answerCommentLike: {
    answerCommentLikeId: primaryKey(generateId),
    accountId: String,
    questionId: String,
    answerId: String,
    commentId: String,
  },
};
