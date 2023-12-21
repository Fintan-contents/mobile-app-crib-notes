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

/**
 * クライアント側のログアウト処理を実施します。
 */
import crashlytics from '@react-native-firebase/crashlytics';
import {hashQueryKey, Query, QueryClient, QueryFilters} from '@tanstack/react-query';
import {handleError} from 'bases/core/errors/handleError';
import {deleteFcmToken} from 'bases/firebase/messaging/deleteFcmToken';
import {deleteActiveAccountId} from 'features/secure-storage/services/deleteActiveAccountId';
import {deletePassword} from 'features/secure-storage/services/deletePassword';
import {loadActiveAccountId} from 'features/secure-storage/services/loadActiveAccountId';

const defaultQueryFilters = {
  predicate: (query: Query) =>
    !(
      query.queryHash === hashQueryKey(['account', 'isLoggedIn']) ||
      query.queryHash === hashQueryKey(['deep-link', 'url'])
    ),
};

export const clientLogout = async (queryClient?: QueryClient, queryRemovalFilters?: QueryFilters): Promise<void> => {
  const accountId = await loadActiveAccountId();
  if (accountId) {
    await deleteActiveAccountId();
    await deletePassword(accountId);
  }
  if (queryClient) {
    queryClient.setQueryData(['account', 'isLoggedIn'], false);
    queryClient.removeQueries(queryRemovalFilters ?? defaultQueryFilters);
  }
  await crashlytics().setUserId('');
  try {
    // FCMに登録されている登録トークンを削除します。
    // FCMから登録トークンを削除することで、SantokuApp Backend以外からPush通知を送信した場合も、通知を受信しなくなります。
    // もし、Firebase Consoleからキャンペーン送信するなど、SantokuApp Backendを経由しないPush通知をログアウト後も受け取りたい場合は、
    // FCMに登録されている登録トークンは削除しないでください。
    await deleteFcmToken();
  } catch (e) {
    // 基本的にはFCM登録トークンの削除は失敗しない想定ですが、もし失敗した場合はログアウト後もSantokuApp Backendを経由しないPush通知は受信できてしまいます。
    handleError(e);
  }
};
