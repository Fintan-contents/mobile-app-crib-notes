import {ApplicationError} from 'bases/core/error/ApplicationError';

/** アクティブなアカウントIDがセキュアストレージに存在しない場合に送出するエラー */
export class ActiveAccountIdNotFoundError extends ApplicationError {}
