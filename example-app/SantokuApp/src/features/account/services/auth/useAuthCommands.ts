import {Query, useMutation, useQueryClient, hashQueryKey} from 'react-query';
import {QueryFilters} from 'react-query/types/core/utils';

import {useIsLoggedIn} from '../../client-states/useIsLoggedIn';
import {AccountData} from '../../types/AccountData';
import {autoLogin} from './autoLogin';
import {changeAccount} from './changeAccount';
import {login} from './login';
import {logout} from './logout';
import {signup} from './signup';

const defaultQueryFilters = {predicate: (query: Query) => query.queryHash !== hashQueryKey(['account', 'isLoggedIn'])};

export const useAuthCommands = () => {
  const queryClient = useQueryClient();
  const [, setIsLoggedIn] = useIsLoggedIn();

  /**
   * ログインします。
   */
  const loginMutation = useMutation(
    async (arg: {accountId: string; password: string}) => login(arg.accountId, arg.password),
    {
      onSuccess: accountData => {
        queryClient.setQueryData<AccountData>(['account', 'accountData'], accountData);
        setIsLoggedIn(true);
      },
    },
  );

  /**
   * 自動ログインします。
   */
  const autoLoginMutation = useMutation(autoLogin, {
    onSuccess: accountData => {
      if (accountData) {
        queryClient.setQueryData<AccountData>(['account', 'accountData'], accountData);
      }
      setIsLoggedIn(!!accountData);
    },
  });

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
  const signupMutation = useMutation(async (arg: {nickname: string}) => signup(arg.nickname), {
    onSuccess: accountData => {
      queryClient.setQueryData<AccountData>(['account', 'accountData'], accountData);
      setIsLoggedIn(true);
    },
  });

  /**
   * アカウントを切り替えます。
   */
  const changeAccountMutation = useMutation((arg: {accountId: string}) => changeAccount(arg.accountId));

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
