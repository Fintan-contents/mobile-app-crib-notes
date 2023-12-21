/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {rest} from 'msw';

import {getLoggedInAccountId} from './getLoggedInAccountId';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';

export const deleteAccountsMeAnswerCommentLikes = rest.delete(
  `${backendUrl}/accounts/me/likes/questions/:questionId/answers/:answerId/comments/:commentId`,
  async (req, res, ctx) => {
    try {
      const accountId = getLoggedInAccountId();
      const questionId = String(req.params.questionId);
      const answerId = String(req.params.answerId);
      const commentId = String(req.params.commentId);
      const db = getDb(accountId);
      const answerCommentLike = db.answerCommentLike.findFirst({
        where: {
          accountId: {equals: accountId},
          questionId: {equals: questionId},
          answerId: {equals: answerId},
          commentId: {equals: commentId},
        },
      });
      if (answerCommentLike) {
        db.answerCommentLike.delete({
          where: {
            accountId: {equals: accountId},
            questionId: {equals: questionId},
            answerId: {equals: answerId},
            commentId: {equals: commentId},
          },
        });
        db.answerComment.update({
          where: {
            questionId: {equals: questionId},
            answerId: {equals: answerId},
            commentId: {equals: commentId},
          },
          data: {likes: likes => likes - 1},
        });
      }

      return delayedResponse(ctx.status(204));
    } catch (e) {
      return errorResponse(e, ctx);
    }
  },
);
