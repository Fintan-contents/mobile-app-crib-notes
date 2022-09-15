import {ApplicationError} from 'bases/core/errors/ApplicationError';

/** パスワードがセキュアストレージに存在しない場合に送出するエラー */
export class PasswordNotFoundError extends ApplicationError {}
