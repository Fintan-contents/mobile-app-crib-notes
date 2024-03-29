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

import {deleteAccountsMeAnswerCommentLikes} from './deleteAccountsMeAnswerCommentLikes';
import {deleteAccountsMeAnswerLikes} from './deleteAccountsMeAnswerLikes';
import {deleteAccountsMeEventLikes} from './deleteAccountsMeEventLikes';
import {deleteAccountsMeQuestionCommentLikes} from './deleteAccountsMeQuestionCommentLikes';
import {deleteAccountsMeQuestionLikes} from './deleteAccountsMeQuestionLikes';
import {getAccountsMe} from './getAccountsMe';
import {getAccountsMeEventLikes} from './getAccountsMeEventLikes';
import {getAccountsMeLikes} from './getAccountsMeLikes';
import {getAccountsMeQuestionLikes} from './getAccountsMeQuestionLikes';
import {getAccountsMeTerms} from './getAccountsMeTerms';
import {postAccountsMeDeviceToken} from './postAccountsMeDeviceToken';
import {postAccountsMeTerms} from './postAccountsMeTerms';
import {postLogin} from './postLogin';
import {postLogout} from './postLogout';
import {postSignup} from './postSignup';
import {putAccountsMeAnswerCommentLikes} from './putAccountsMeAnswerCommentLikes';
import {putAccountsMeAnswerLikes} from './putAccountsMeAnswerLikes';
import {putAccountsMeEventLikes} from './putAccountsMeEventLikes';
import {putAccountsMeQuestionCommentLikes} from './putAccountsMeQuestionCommentLikes';
import {putAccountsMeQuestionLikes} from './putAccountsMeQuestionLikes';

export const accountHandlers = [
  postSignup,
  postLogin,
  postLogout,
  postAccountsMeDeviceToken,
  getAccountsMe,
  getAccountsMeTerms,
  postAccountsMeTerms,
  getAccountsMeLikes,
  getAccountsMeEventLikes,
  getAccountsMeQuestionLikes,
  putAccountsMeEventLikes,
  deleteAccountsMeEventLikes,
  putAccountsMeQuestionLikes,
  deleteAccountsMeQuestionLikes,
  putAccountsMeQuestionCommentLikes,
  deleteAccountsMeQuestionCommentLikes,
  putAccountsMeAnswerLikes,
  deleteAccountsMeAnswerLikes,
  putAccountsMeAnswerCommentLikes,
  deleteAccountsMeAnswerCommentLikes,
];
