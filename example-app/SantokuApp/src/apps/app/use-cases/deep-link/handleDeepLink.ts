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

import {NavigationContainerRef} from '@react-navigation/native';
import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {log} from 'bases/logging';

import {deepLinks} from './deepLinks';
import {RootStackParamList} from '../../navigators/types';
import {parseDeepLinkUrl} from '../../services/deep-link/parseDeepLinkUrl';

export const handleDeepLink = (url: string, navigationRef: NavigationContainerRef<RootStackParamList>) => {
  const parsedURL = parseDeepLinkUrl(url);
  if (!parsedURL) {
    return;
  }
  deepLinks
    .filter(deepLink => deepLink.matchUrl(parsedURL))
    .forEach(deepLink => {
      try {
        deepLink.handle(navigationRef, parsedURL);
      } catch (e) {
        // ログを出力して何もしない
        const error = new ApplicationError('Failed to handle deep link.', e);
        log.warn(`${error.message} cause=${String(error.stack)}`);
      }
    });
};
