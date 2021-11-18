import {MessageKey} from '../../generated/BundledMessages';
import {log} from '../logging';

/**
 * メッセージをロードします。
 */
interface MessagesLoader {
  load(): Promise<Record<MessageKey, string>>;
}

let cache: Record<MessageKey, string> | undefined;

/**
 * メッセージをロードします。
 * @param loader メッセージをロードするクラス
 */
async function loadMessages(loader: MessagesLoader) {
  cache = await loader.load();
}

/**
 * メッセージを取得します。
 * {@link loadMessages}を呼び出してして、メッセージをロード後に使用してください。
 * @param key メッセージのキー
 * @param options メッセージのオプション
 * @returns 指定されたメッセージキーに該当するメッセージ。指定されたメッセージキーに該当するメッセージが存在しない場合はメッセージキーを返却
 *
 * @example
 * 定義されているメッセージの例
 * ```
 * export const BundledMessages = {
 *  'validation.email': 'メールアドレスの形式が正しくありません。',
 *  'validation.required': '{0}を入力してください。',
 *  'validation.min': '{0}は{1}文字以上の値を入力してください。',
 * } as const;
 * ```
 * @example
 * メッセージを取得する例
 * ```
 * m('validation.email') // メールアドレスの形式が正しくありません。
 * m('validation.required', 'パスワード') // パスワードを入力してください。
 * m('validation.min', 'パスワード', '8') // パスワードは8文字以上の値を入力してください。
 * ```
 */
function message(key: MessageKey, ...options: string[]): string {
  if (!cache) {
    throw new Error('Messages are not loaded.');
  }
  if (cache[key] === undefined) {
    log.error(`Could not find the message. messageKey=[${key}]`, 'MessageNotFound');
    return key;
  }
  return !options.length ? cache[key] : format(cache[key], options);
}

/**
 * メッセージをフォーマットします。
 * @param message メッセージ
 * @param options メッセージのオプション
 * @returns フォーマット後のメッセージ
 */
function format(message: string, options: string[]): string {
  return options.reduce((message, option, index) => {
    return message.replace(new RegExp(`\\{${index}\\}`, 'g'), option);
  }, message);
}

export type {MessagesLoader};
export {message as m, loadMessages};
