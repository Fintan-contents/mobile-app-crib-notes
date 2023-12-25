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

import {accountModel} from './accountModel';
import {accountTermsModel} from './accountTermsModel';
import {answerCommentLikeModel} from './answerCommentLikeModel';
import {answerCommentModel} from './answerCommentModel';
import {answerLikeModel} from './answerLikeModel';
import {answerModel} from './answerModel';
import {appSupportedVersionModel} from './appSupportedVersionModel';
import {eventLikeModel} from './eventLikeModel';
import {eventModel} from './eventModel';
import {notificationModel} from './notificationModel';
import {questionCommentLikeModel} from './questionCommentLikeModel';
import {questionCommentModel} from './questionCommentModel';
import {questionLikeModel} from './questionLikeModel';
import {questionModel} from './questionModel';
import {tagModel} from './tagModel';
import {templateModel} from './templateModel';
import {termsModel} from './termsModel';

export const models = {
  ...accountModel,
  ...accountTermsModel,
  ...termsModel,
  ...appSupportedVersionModel,
  ...templateModel,
  ...tagModel,
  ...notificationModel,
  ...eventModel,
  ...questionModel,
  ...questionCommentModel,
  ...answerModel,
  ...answerCommentModel,
  ...questionLikeModel,
  ...questionCommentLikeModel,
  ...answerLikeModel,
  ...answerCommentLikeModel,
  ...eventLikeModel,
};
