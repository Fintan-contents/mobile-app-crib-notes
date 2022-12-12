import {isApplicationError} from 'bases/core/errors/ApplicationError';
import {ActiveAccountIdNotFoundError} from 'features/account/errors/ActiveAccountIdNotFoundError';
import {PasswordNotFoundError} from 'features/account/errors/PasswordNotFoundError';

export const handleError = (e: unknown) => {
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
};
