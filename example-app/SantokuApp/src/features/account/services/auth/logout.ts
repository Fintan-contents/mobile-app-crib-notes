/**
 * ログアウトします。
 */
import {QueryClient, QueryFilters} from '@tanstack/react-query';
import {getFcmToken} from 'bases/firebase/messaging/getFcmToken';
import {postAccountsMeDeviceToken, postLogout} from 'features/backend/apis/account/account';
import {refreshCsrfToken} from 'features/backend/utils/refreshCsrfToken';

import {clientLogout} from './clientLogout';

export const logout = async (queryClient?: QueryClient, queryRemovalFilters?: QueryFilters): Promise<void> => {
  const fcmToken = await getFcmToken();
  await postAccountsMeDeviceToken({oldDeviceToken: fcmToken});
  await postLogout();
  await refreshCsrfToken();
  await clientLogout(queryClient, queryRemovalFilters);
};
