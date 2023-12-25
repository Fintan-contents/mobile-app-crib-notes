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

import messaging from '@react-native-firebase/messaging';
import {ApplicationError} from 'bases/core/errors/ApplicationError';

import {firebaseConfig} from '../FirebaseConfig';

export const deleteFcmToken = async () => {
  if (!firebaseConfig.isDummy) {
    try {
      return await messaging().deleteToken();
    } catch (e) {
      throw new DeleteFcmTokenError('Failed to delete fcm token.', e, 'DeleteFcmTokenError');
    }
  }
};

export class DeleteFcmTokenError extends ApplicationError {}

export function isDeleteFcmTokenError(error: unknown): error is DeleteFcmTokenError {
  return error instanceof DeleteFcmTokenError;
}
