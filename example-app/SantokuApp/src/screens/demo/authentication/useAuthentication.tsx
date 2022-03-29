import {useLoadingOverlay} from 'components/overlay';
import {ActiveAccountIdNotFoundError, AuthenticationService, generatePassword, PasswordNotFoundError} from 'framework';
import {isApplicationError} from 'framework/error/ApplicationError';
import {useCallback, useEffect, useState} from 'react';

export const useAuthentication = () => {
  const [accountId, setAccountId] = useState<string>();
  const [accountIdInput, setAccountIdInput] = useState('');
  const loadingOverlay = useLoadingOverlay();
  const mutationSignup = AuthenticationService.useSignup();
  const mutationChangeAccount = AuthenticationService.useChangeAccount();
  const mutationAutoLogin = AuthenticationService.useAutoLogin();
  const mutationLogout = AuthenticationService.useLogout();

  const isProcessing =
    mutationSignup.isLoading ||
    mutationChangeAccount.isLoading ||
    mutationAutoLogin.isLoading ||
    mutationLogout.isLoading;

  useEffect(() => {
    loadingOverlay.setVisible(isProcessing);
  }, [isProcessing, loadingOverlay]);

  const handleError = useCallback((e: unknown) => {
    if (isApplicationError(e)) {
      if (e instanceof ActiveAccountIdNotFoundError) {
        alert('自動ログイン可能なアカウントIDが見つかりません');
        return;
      }
      if (e instanceof PasswordNotFoundError) {
        alert('アカウントIDに紐づくパスワードが見つかりません');
        return;
      }
      alert(e);
    }
  }, []);

  const signup = useCallback(async () => {
    try {
      const password = await generatePassword();
      const account = await mutationSignup.mutateAsync({nickname: 'demoNickname', password});
      setAccountId(account.accountId);
      alert(`アカウントIDは${account.accountId}です`);
    } catch (e) {
      handleError(e);
    }
  }, [mutationSignup, handleError]);

  const changeAccount = useCallback(async () => {
    try {
      const accountLoginResponse = await mutationChangeAccount.mutateAsync({accountId: accountIdInput});
      alert(`ログイン成功しました state=${accountLoginResponse.status}`);
    } catch (e) {
      handleError(e);
    }
  }, [mutationChangeAccount, accountIdInput, handleError]);

  const canAutoLogin = useCallback(async () => {
    try {
      const res = await AuthenticationService.canAutoLogin();
      alert(res ? '自動ログイン可能です' : '自動ログインできません');
    } catch (e) {
      handleError(e);
    }
  }, [handleError]);

  const autoLogin = useCallback(async () => {
    try {
      const accountLoginResponse = await mutationAutoLogin.mutateAsync();
      alert(`自動ログイン成功しました state=${accountLoginResponse.status}`);
    } catch (e) {
      handleError(e);
    }
  }, [mutationAutoLogin, handleError]);

  const logout = useCallback(async () => {
    try {
      await mutationLogout.mutateAsync();
      alert(`ログアウト成功しました`);
    } catch (e) {
      handleError(e);
    }
  }, [mutationLogout, handleError]);

  const copyAccountIdInput = useCallback(() => {
    if (accountId) {
      setAccountIdInput(accountId);
    }
  }, [accountId]);

  return {
    accountId,
    accountIdInput,
    setAccountIdInput,
    copyAccountIdInput,
    signup,
    changeAccount,
    canAutoLogin,
    autoLogin,
    logout,
  };
};
