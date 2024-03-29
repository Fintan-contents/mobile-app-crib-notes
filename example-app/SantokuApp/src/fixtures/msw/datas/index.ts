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

import {accountData} from './accountData';
import {accountMaxData} from './accountMaxData';
import {accountMinData} from './accountMinData';
import {accountTermsData} from './accountTermsData';
import {accountTermsMaxData} from './accountTermsMaxData';
import {accountTermsMinData} from './accountTermsMinData';
import {answerCommentData} from './answerCommentData';
import {answerCommentLikeData} from './answerCommentLikeData';
import {answerCommentLikeMaxData} from './answerCommentLikeMaxData';
import {answerCommentMaxData} from './answerCommentMaxData';
import {answerData} from './answerData';
import {answerLikeData} from './answerLikeData';
import {answerLikeMaxData} from './answerLikeMaxData';
import {answerMaxData} from './answerMaxData';
import {appSupportedVersionData} from './appSupportedVersionData';
import {avatarData} from './avatarData';
import {eventData} from './eventData';
import {eventLikeData} from './eventLikeData';
import {eventLikeMaxData} from './eventLikeMaxData';
import {eventMaxData} from './eventMaxData';
import {notificationData} from './notificationData';
import {notificationMaxData} from './notificationMaxData';
import {questionCommentData} from './questionCommentData';
import {questionCommentLikeData} from './questionCommentLikeData';
import {questionCommentLikeMaxData} from './questionCommentLikeMaxData';
import {questionCommentMaxData} from './questionCommentMaxData';
import {questionData} from './questionData';
import {questionLikeData} from './questionLikeData';
import {questionLikeMaxData} from './questionLikeMaxData';
import {questionMaxData} from './questionMaxData';
import {tagData} from './tagData';
import {tagMaxData} from './tagMaxData';
import {templateData} from './templateData';
import {templateMaxData} from './templateMaxData';
import {termsData} from './termsData';

export const initialData = async () => {
  accountData();
  accountMaxData();
  accountMinData();
  accountTermsData();
  accountTermsMaxData();
  accountTermsMinData();
  appSupportedVersionData();
  eventData();
  eventMaxData();
  notificationData();
  notificationMaxData();
  questionData();
  questionMaxData();
  questionCommentData();
  questionCommentMaxData();
  tagData();
  tagMaxData();
  templateData();
  templateMaxData();
  termsData();
  answerData();
  answerMaxData();
  answerCommentData();
  answerCommentMaxData();
  questionLikeData();
  questionLikeMaxData();
  questionCommentLikeData();
  questionCommentLikeMaxData();
  answerLikeData();
  answerLikeMaxData();
  answerCommentLikeData();
  answerCommentLikeMaxData();
  eventLikeData();
  eventLikeMaxData();
  await avatarData();
};
