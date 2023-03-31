import {Query, useMutation, useQueryClient, hashQueryKey} from 'react-query';
import {QueryFilters} from 'react-query/types/core/utils';

import {autoLogin} from './autoLogin';
import {changeAccount} from './changeAccount';
import {login} from './login';
import {logout} from './logout';
import {signup} from './signup';
import {useIsLoggedIn} from '../../client-states/useIsLoggedIn';
import {useAccountCommands} from '../account/useAccountCommands';

const defaultQueryFilters = {predicate: (query: Query) => query.queryHash !== hashQueryKey(['account', 'isLoggedIn'])};

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
