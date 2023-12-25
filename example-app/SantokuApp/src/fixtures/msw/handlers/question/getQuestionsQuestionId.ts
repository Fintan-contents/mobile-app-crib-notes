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

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const getQuestionsQuestionId = rest.get(`${backendUrl}/questions/:questionId`, (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const questionId = String(req.params.questionId);
    const db = getDb(accountId);
    const question = db.question.findFirst({where: {questionId: {equals: questionId}}});
    const commentList = db.questionComment.findMany({where: {questionId: {equals: questionId}}});
    const tags = db.tag.getAll();
    const questionResponse = {
      question: {...question, tags: question?.tags.map(tagId => tags.find(tag => tag.tagId === tagId))},
      commentList,
    };
    const answers = db.answer.findMany({where: {questionId: {equals: questionId}}});
    const answerListResponse = answers.map(answer => {
      const commentList = db.answerComment.findMany({where: {answerId: {equals: answer.answerId}}});
      return {answer, commentList};
    });
    if (questionResponse.question) {
      return delayedResponse(ctx.json({question: questionResponse, answerList: answerListResponse}));
    }
    return delayedResponse(ctx.status(404));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
