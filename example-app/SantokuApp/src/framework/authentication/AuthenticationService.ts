import {Account, AccountLoginResponse} from '../../generated/api';
import {accountApi} from '../backend';
import {ApplicationError} from '../error/ApplicationError';
import {SecureStorageAdapter} from './SecureStorageAdapter';

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
  const res = await accountApi.postSignup({nickname, password});
  const accountId = res.data.accountId;
  await SecureStorageAdapter.savePassword(accountId, password);
  return res.data;
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
 * ログインします。
 * @param accountId アカウントID
 * @param password パスワード
 * @returns アカウントの切り替え結果
 */
async function login(accountId: string, password: string): Promise<AccountLoginResponse> {
  const res = await accountApi.postLogin({accountId, password});
  await SecureStorageAdapter.saveActiveAccountId(accountId);
  return res.data;
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
 * ログアウトします。
 */
async function logout(): Promise<void> {
  await accountApi.postLogout();
  return SecureStorageAdapter.deleteActiveAccountId();
}

export const AuthnService = {
  signup,
  changeAccount,
  canAutoLogin,
  autoLogin,
  refresh,
  logout,
};
