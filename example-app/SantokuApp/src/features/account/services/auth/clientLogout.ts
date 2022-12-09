/**
 * クライアント側のログアウト処理を実施します。
 */
import crashlytics from '@react-native-firebase/crashlytics';
import {handleError} from 'bases/core/errors/handleError';
import {deleteFcmToken} from 'bases/firebase/messaging/deleteFcmToken';
import {deleteActiveAccountId} from 'features/secure-storage/services/deleteActiveAccountId';
import {deletePassword} from 'features/secure-storage/services/deletePassword';
import {loadActiveAccountId} from 'features/secure-storage/services/loadActiveAccountId';
import {hashQueryKey, Query, QueryClient} from 'react-query';
import {QueryFilters} from 'react-query/types/core/utils';

const defaultQueryFilters = {predicate: (query: Query) => query.queryHash !== hashQueryKey(['account', 'isLoggedIn'])};

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
