/**
 * アクティブなアカウントIDとそれに該当するパスワードがセキュアストアに存在するかをチェックします。
 * @returns 自動ログイン可能な場合はtrue、そうでない場合はfalse
 */
import {loadActiveAccountId} from 'features/secure-storage/services/loadActiveAccountId';
import {loadPassword} from 'features/secure-storage/services/loadPassword';

export const canAutoLogin = async (): Promise<boolean> => {
  try {
    const accountId = await loadActiveAccountId();
    if (!accountId) {
      return false;
    }
    const password = await loadPassword(accountId);
    return !!password;
  } catch {
    return false;
  }
};
