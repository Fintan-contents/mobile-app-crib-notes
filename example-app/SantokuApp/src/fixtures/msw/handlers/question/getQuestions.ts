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

export const getQuestions = rest.get(`${backendUrl}/questions`, (req, res, ctx) => {
  try {
    const keyword = req.url.searchParams.get('keyword');
    const sort = req.url.searchParams.get('sort');
    const filter = req.url.searchParams.get('filter');
    const tag = req.url.searchParams.get('tag');
    const accountId = getLoggedInAccountId();
    const db = getDb(accountId);
    let questions = db.question.findMany({orderBy: {datetime: 'desc'}});
    const tags = db.tag.getAll();
    if (keyword) {
      questions = questions.filter(q => q.title.includes(keyword) || q.content.includes(keyword));
    }
    if (filter) {
      questions = questions.filter(q => {
        if (filter === 'unanswered') {
          return q.answers === 0;
        } else if (filter === 'outstanding') {
          return !q.resolved;
        }
        return true;
      });
    }
    if (tag) {
      questions = questions.filter(q => q.tags.includes(tag));
    }
    if (sort) {
      if (sort === 'like') {
        questions = questions.sort((a, b) => b.likes - a.likes);
      } else if (sort === 'update') {
        questions = questions.sort((a, b) => (new Date(b.lastUpdatedAt) > new Date(a.lastUpdatedAt) ? 1 : -1));
      }
    }
    const response = questions.map(question => {
      return {...question, tags: question.tags.map(tagId => tags.find(tag => tag.tagId === tagId))};
    });
    return delayedResponse(ctx.json(response));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
