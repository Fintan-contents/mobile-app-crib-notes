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

import {AppConfig} from 'bases/core/configs/AppConfig';
import {log} from 'bases/logging';
import {Linking} from 'react-native';

export const openStoreLink = () => {
  const link = AppConfig.storeUrl;
  if (!link) {
    log.debug(`Invalid link. link=[${String(link)}]`);
    return;
  }
  return Linking.canOpenURL(link)
    .then(() => {
      Linking.openURL(link).catch(err => {
        log.debug(`Store open error. err=[${String(err)}]`);
      });
    })
    .catch(err => {
      log.debug(`Can not store open. err=[${String(err)}]`);
    });
};
