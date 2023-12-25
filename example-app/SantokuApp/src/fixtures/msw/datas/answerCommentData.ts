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

import {santokuAccount} from './accountData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const answerCommentData = () => {
  db.answerComment.create({
    commentId: '1',
    answerId: '1',
    questionId: '1',
    content: 'ありがとうございます。headerShown: falseを指定してできました〜',
    datetime: '2022-06-05T12:00:00Z',
    likes: 1,
    ...santokuAccount,
  });
  db.answerComment.create({
    commentId: '2',
    answerId: '2',
    questionId: '2',
    content: 'なるほど、スッキリしました。ありがとうございます。',
    datetime: '2022-07-05T12:00:00Z',
    likes: 1,
    ...santokuAccount,
  });
  db.answerComment.create({
    commentId: '3',
    answerId: '3',
    questionId: '3',
    content: '了解しました。AWS SDKを使用してやってみます。',
    datetime: '2022-07-07T12:00:00Z',
    likes: 1,
    ...santokuAccount,
  });
  db.answerComment.create({
    commentId: '4',
    answerId: '4',
    questionId: '4',
    content: 'AutocompleteっていうWidgetがあるんですね。知りませんでした。ありがとうございます。',
    datetime: '2022-07-04T11:00:00Z',
    likes: 1,
    ...partnerAccount,
  });
  db.answerComment.create({
    commentId: '5',
    answerId: '5',
    questionId: '4',
    content: 'Autocompleteを使ってみて、ちょうどその点で困ってました。ご連携ありがとうございます。',
    datetime: '2022-07-04T12:00:00Z',
    likes: 1,
    ...partnerAccount,
  });
  db.answerComment.create({
    commentId: '6',
    answerId: '6',
    questionId: '5',
    content: 'なるほど、TypeScriptを使ってみようかと思います。',
    datetime: '2022-07-04T12:00:00Z',
    likes: 1,
    ...partnerAccount,
  });
};
