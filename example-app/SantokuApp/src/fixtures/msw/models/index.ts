import {accountModel} from './accountModel';
import {accountTermsModel} from './accountTermsModel';
import {answerCommentLikeModel} from './answerCommentLikeModel';
import {answerCommentModel} from './answerCommentModel';
import {answerLikeModel} from './answerLikeModel';
import {answerModel} from './answerModel';
import {appSupportedVersionModel} from './appSupportedVersionModel';
import {eventLikeModel} from './eventLikeModel';
import {eventModel} from './eventModel';
import {loggedInAccountModel} from './loggedInAccountModel';
import {notificationModel} from './notificationModel';
import {questionCommentLikeModel} from './questionCommentLikeModel';
import {questionCommentModel} from './questionCommentModel';
import {questionLikeModel} from './questionLikeModel';
import {questionModel} from './questionModel';
import {tagModel} from './tagModel';
import {templateModel} from './templateModel';
import {termsModel} from './termsModel';

export const models = {
  ...loggedInAccountModel,
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
