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

import {Query, QueryFilters, useMutation, useQueryClient, hashQueryKey} from '@tanstack/react-query';

import {autoLogin} from './autoLogin';
import {changeAccount} from './changeAccount';
import {login} from './login';
import {logout} from './logout';
import {signup} from './signup';
import {useIsLoggedIn} from '../../client-states/useIsLoggedIn';
import {useAccountCommands} from '../account/useAccountCommands';

const defaultQueryFilters = {
  predicate: (query: Query) =>
    !(
      query.queryHash === hashQueryKey(['account', 'isLoggedIn']) ||
      query.queryHash === hashQueryKey(['deep-link', 'url'])
    ),
};

export const useAuthCommands = () => {
  const queryClient = useQueryClient();
  const [, setIsLoggedIn] = useIsLoggedIn();
  const {loadAccountData} = useAccountCommands();

  /**
   * ログインします。
   */
  const loginMutation = useMutation(
    async (arg: {accountId: string; password: string}) => {
      await login(arg.accountId, arg.password);
      return loadAccountData();
    },
    {
      onSuccess: () => {
        setIsLoggedIn(true);
      },
    },
  );

  /**
   * 自動ログインします。
   */
  const autoLoginMutation = useMutation(
    async () => {
      const response = await autoLogin();
      if (response) {
        return loadAccountData();
      }
    },
    {
      onSuccess: accountData => {
        setIsLoggedIn(!!accountData);
      },
    },
  );

  /**
   * ログアウトします。
   */
  const logoutMutation = useMutation(
    async (arg: {queryRemovalFilters?: QueryFilters} = {queryRemovalFilters: defaultQueryFilters}) =>
      logout(queryClient, arg.queryRemovalFilters),
    {
      onSuccess: () => {
        setIsLoggedIn(false);
      },
    },
  );

  /**
   * サインアップします。
   */
  const signupMutation = useMutation(
    async (arg: {nickname: string}) => {
      await signup(arg.nickname);
      return loadAccountData();
    },
    {
      onSuccess: () => {
        setIsLoggedIn(true);
      },
    },
  );

  /**
   * アカウントを切り替えます。
   */
  const changeAccountMutation = useMutation(async (arg: {accountId: string}) => {
    await changeAccount(arg.accountId);
    return loadAccountData();
  });

  return {
    login: loginMutation.mutateAsync,
    autoLogin: autoLoginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    signup: signupMutation.mutateAsync,
    changeAccount: changeAccountMutation.mutateAsync,
    isLoggingIn: loginMutation.isLoading,
    isAutoLoggingIn: autoLoginMutation.isLoading,
    isLoggingOut: logoutMutation.isLoading,
    isSigningUp: signupMutation.isLoading,
    isChangingAccount: changeAccountMutation.isLoading,
    isProcessing:
      loginMutation.isLoading ||
      autoLoginMutation.isLoading ||
      logoutMutation.isLoading ||
      signupMutation.isLoading ||
      changeAccountMutation.isLoading,
    isSuccessAutoLogin: autoLoginMutation.isSuccess,
  };
};
