import {ApplicationError} from 'bases/core/errors/ApplicationError';

/** アクティブなアカウントIDがセキュアストレージに存在しない場合に送出するエラー */
export class ActiveAccountIdNotFoundError extends ApplicationError {}
