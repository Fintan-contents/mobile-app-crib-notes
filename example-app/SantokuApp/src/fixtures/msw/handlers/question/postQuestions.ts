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

import {QuestionContent, QuestionRegistration} from 'features/backend/apis/model';
import {rest} from 'msw';

import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';
import {getDb} from '../../utils/getDb';
import {getLoggedInAccountId} from '../account/getLoggedInAccountId';

export const postQuestions = rest.post(`${backendUrl}/questions`, async (req, res, ctx) => {
  try {
    const accountId = getLoggedInAccountId();
    const {title, content, tags: tagIds, beginner} = await req.json<QuestionRegistration>();
    const db = getDb(accountId);
    const account = db.account.findFirst({where: {accountId: {equals: accountId}}});
    if (!account) {
      return delayedResponse(ctx.status(401));
    }
    const question = {title, content, tags: tagIds ?? [], beginner, ...account};
    const savedQuestion = db.question.create(question);
    const tags = db.tag.getAll();
    return delayedResponse(
      ctx.status(201),
      ctx.json<QuestionContent>({
        questionId: savedQuestion.questionId,
        title: savedQuestion.title,
        content: savedQuestion.content,
        tags: tagIds?.map(tagId => tags.find(tag => tag.tagId === tagId)!) ?? [],
        datetime: savedQuestion.datetime,
        beginner: savedQuestion.beginner,
        resolved: savedQuestion.resolved,
        views: savedQuestion.views,
        answers: savedQuestion.answers,
        likes: savedQuestion.likes,
        comments: savedQuestion.comments,
        lastUpdatedAt: savedQuestion.lastUpdatedAt,
      }),
    );
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
