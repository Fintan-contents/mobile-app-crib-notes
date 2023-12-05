/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {handleError} from 'bases/core/errors/handleError';

import {MessageKey} from './BundledMessages';
import {RuntimeError} from '../core/errors/RuntimeError';

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
    handleError(new RuntimeError(`Could not find the message. messageKey=[${key}]`, 'MessageNotFound'));
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
