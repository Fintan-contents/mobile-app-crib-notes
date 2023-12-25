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
import {adminAccount} from './accountMaxData';
import {partnerAccount} from './accountMinData';
import {db} from '../db';

export const questionData = () => {
  db.question.create({
    questionId: '1',
    title: 'React Nativeでヘッダを非表示にする方法',
    content: `【問い合わせ内容】
React Navigationを使用していますが、ヘッダを非表示にする方法がありますか？
【環境】
React Native 0.66
【目的】
ヘッダを表示しないで画面全体にコンテンツを表示したいページがあるため
【その他】
なし
`,
    tags: ['1', '2', '9'],
    datetime: '2022-06-01T10:00:00Z',
    beginner: true,
    resolved: true,
    views: 1,
    answers: 1,
    likes: 11,
    comments: 1,
    lastUpdatedAt: '2022-06-05T10:00:00Z',
    ...santokuAccount,
  });
  db.question.create({
    questionId: '2',
    title: 'JavaScriptのビックリマーク二つ（！！）はどういう意味でしょうか？',
    content: `現在携わっているPJで、ビックリマークが二つ連続で並んでいる構文がありました。
この構文を理解できずに困っています。ご存知の方いらっしゃいますか？
`,
    tags: ['4'],
    datetime: '2022-06-28T10:00:00Z',
    beginner: false,
    resolved: false,
    views: 1,
    answers: 1,
    likes: 3,
    comments: 0,
    lastUpdatedAt: '2022-07-05T10:00:00Z',
    ...santokuAccount,
  });
  db.question.create({
    questionId: '3',
    title: 'Nablarchを使用したWebアプリケーションからS3に接続する方法について',
    content: `【問い合わせ内容】
Nablarchを使用したWebアプリケーションからS3にファイルをアップロードする方法を模索しています。
ご存知の方、いらっしゃいますでしょうか？

【環境】
Nablarch 5u21
`,
    tags: ['5', '6'],
    datetime: '2022-07-03T10:00:00Z',
    beginner: false,
    resolved: true,
    views: 1,
    answers: 1,
    likes: 5,
    comments: 0,
    lastUpdatedAt: '2022-07-09T10:00:00Z',
    ...santokuAccount,
  });
  db.question.create({
    questionId: '4',
    title: 'Flutterでオートコンプリートする方法',
    content: `【問い合わせ内容】
テキストインプットの入力値に応じて、オートコンプリートを出したいと考えています。
Flutterでどのように実装すれば良いのかわからないため、ご教授頂きたいです。

【環境】
Flutter 3.0.5 stable
`,
    tags: ['7'],
    datetime: '2022-07-03T10:00:00Z',
    beginner: false,
    resolved: false,
    views: 1,
    answers: 2,
    likes: 1,
    comments: 1,
    lastUpdatedAt: '2022-07-04T10:00:00Z',
    ...partnerAccount,
  });
  db.question.create({
    questionId: '5',
    title: 'TypeScriptを使った方が良いのでしょうか？',
    content: `新規に作成するWebアプリケーションをTypeScriptにするか、JavaScriptにするか悩んでいます。
何か指針などはありますか？`,
    tags: ['3'],
    datetime: '2022-07-21T10:00:00Z',
    beginner: true,
    resolved: false,
    views: 1,
    answers: 1,
    likes: 2,
    comments: 0,
    lastUpdatedAt: '2022-08-04T10:00:00Z',
    ...santokuAccount,
  });
  db.question.create({
    questionId: '6',
    title: 'アプリ全体で保持するデータの実装方法について',
    content: `アプリ全体でデータを保持したい場合は、どのように実装するのでしょうか？`,
    tags: ['8'],
    datetime: '2022-07-28T10:00:00Z',
    beginner: true,
    resolved: false,
    views: 0,
    answers: 0,
    likes: 9,
    comments: 0,
    lastUpdatedAt: '2022-07-28T10:00:00Z',
    ...santokuAccount,
  });
  db.question.create({
    questionId: '7',
    title: 'C言語のchar型は何ビットでしょうか',
    content: `C言語のchar型は8ビット固定ではないのでしょうか？`,
    tags: ['10'],
    datetime: '2022-08-01T10:00:00Z',
    beginner: false,
    resolved: false,
    views: 0,
    answers: 0,
    likes: 0,
    comments: 0,
    lastUpdatedAt: '2022-08-15T10:00:00Z',
    ...adminAccount,
  });
};
