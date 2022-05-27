import crashlytics from '@react-native-firebase/crashlytics';
import axios from 'axios';
import {postAccountsMeDeviceToken, postLogin, postLogout, postSignup} from 'generated/backend/account/account';
import {Account, AccountLoginResponse} from 'generated/backend/model';
import {useMutation} from 'react-query';

import {refreshCsrfToken} from '../backend';
import {ApplicationError} from '../error/ApplicationError';
import {getFcmToken} from '../firebase';
import {deleteFcmToken} from '../firebase/messaging/deleteFcmToken';
import {log} from '../logging';
import {m} from '../message';
import {SecureStorageAdapter} from './SecureStorageAdapter';
import {UnauthorizedError} from './UnauthorizedError';

/** アクティブなアカウントIDがセキュアストレージに存在しない場合に送出するエラー */
export class ActiveAccountIdNotFoundError extends ApplicationError {}
/** パスワードがセキュアストレージに存在しない場合に送出するエラー */
export class PasswordNotFoundError extends ApplicationError {}

/**
 * サインアップします。
 * @param nickname ニックネーム
 * @param password パスワード
 * @returns アカウント
 */
async function signup(nickname: string, password: string): Promise<Account> {
  const res = await postSignup({nickname, password});
  const accountId = res.data.accountId;
  await SecureStorageAdapter.savePassword(accountId, password);
  return res.data;
}

/**
 * サインアップします。
 * @returns アカウント
 */
function useSignup() {
  return useMutation((arg: {nickname: string; password: string}) => signup(arg.nickname, arg.password));
}

/**
 * アカウントを切り替えます。
 * @param accountId アカウントID
 * @returns アカウントの切り替え結果
 */
async function changeAccount(accountId: string): Promise<AccountLoginResponse> {
  const password = await SecureStorageAdapter.loadPassword(accountId);
  if (!password) {
    throw new PasswordNotFoundError('The password for the account ID does not exist.');
  }
  return login(accountId, password);
}

/**
 * アカウントを切り替えます。
 * @returns アカウントの切り替え結果
 */
function useChangeAccount() {
  return useMutation((arg: {accountId: string}) => changeAccount(arg.accountId));
}

/**
 * ログインします。
 * @param accountId アカウントID
 * @param password パスワード
 * @returns アカウントの切り替え結果
 */
async function login(accountId: string, password: string): Promise<AccountLoginResponse> {
  try {
    const res = await postLogin({accountId, password});
    await refreshCsrfToken();
    await SecureStorageAdapter.saveActiveAccountId(accountId);
    await crashlytics().setUserId(accountId);

    return res.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      if (e.response?.status === 401) {
        throw new UnauthorizedError(e);
      }
    }
    throw e;
  }
}

/**
 * ログインします。
 * @returns アカウントの切り替え結果
 */
function useLogin() {
  return useMutation(async (arg: {accountId: string; password: string}) => login(arg.accountId, arg.password));
}

/**
 * 自動ログインします。
 * @returns アカウントのログイン結果
 */
async function autoLogin(): Promise<AccountLoginResponse> {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    throw new ActiveAccountIdNotFoundError('There is no auto-login enabled account.');
  }
  return changeAccount(accountId);
}

/**
 * 自動ログインします。
 * @returns アカウントのログイン結果
 */
function useAutoLogin() {
  return useMutation(() => autoLogin());
}

/**
 * アクティブなアカウントIDとそれに該当するパスワードがセキュアストアに存在するかをチェックします。
 * @returns 自動ログイン可能な場合はtrue、そうでない場合はfalse
 */
async function canAutoLogin(): Promise<boolean> {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (!accountId) {
    return false;
  }
  const password = await SecureStorageAdapter.loadPassword(accountId);
  return !!password;
}

/**
 * ログイン資格情報を再取得します。
 * @returns アカウントのログイン結果
 */
function refresh(): Promise<AccountLoginResponse> {
  return autoLogin();
}

/**
 * ログイン資格情報を再取得します。
 * @returns アカウントのログイン結果
 */
function useRefresh() {
  return useMutation(() => refresh());
}

/**
 * ログアウトします。
 */
async function logout(): Promise<void> {
  const fcmToken = await getFcmToken();
  await postAccountsMeDeviceToken({oldDeviceToken: fcmToken});
  await postLogout();
  await refreshCsrfToken();
  await clientLogout();
}

/**
 * クライアント側のログアウト処理を実施します。
 */
async function clientLogout(): Promise<void> {
  const accountId = await SecureStorageAdapter.loadActiveAccountId();
  if (accountId) {
    await SecureStorageAdapter.deleteActiveAccountId();
    await SecureStorageAdapter.deletePassword(accountId);
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
    log.error(m('app.push.notification.deleteFcmTokenError', String(e)), 'app.push.notification.deleteFcmTokenError');
  }
}

/**
 * ログアウトします。
 */
function useLogout() {
  return useMutation(() => logout());
}

export const AuthenticationService = {
  autoLogin,
  canAutoLogin,
  clientLogout,
  useSignup,
  useChangeAccount,
  useAutoLogin,
  useRefresh,
  useLogin,
  useLogout,
};
