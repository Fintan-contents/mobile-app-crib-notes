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

import {useQuery} from '@tanstack/react-query';
import {firebaseConfig} from 'bases/firebase/FirebaseConfig';
import {getFcmToken} from 'bases/firebase/messaging/getFcmToken';

export const useGetFcmToken = () => {
  const query = useQuery(['demo', 'push-notification', 'getFcmToken'], () => {
    if (!firebaseConfig.isDummy) {
      return getFcmToken();
    } else {
      // useQueryのqueryFnからundefinedを返却するとエラーがthrowされてしまうため、nullを返却する
      return null;
    }
  });
  return {...query, fcmToken: query.data};
};
