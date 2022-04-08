import axios, {AxiosError} from 'axios';

import {m} from '../message';

export function resolveErrorMessage(error: unknown): {title: string; message: string} {
  if (axios.isAxiosError(error)) {
    return resolveErrorMessageWhenAxiosError(error);
  }
  // 想定外のエラー
  return resolveErrorMessageWhenUnexpectedError();
}

function resolveErrorMessageWhenAxiosError(error: AxiosError) {
  const statusCode = error.response?.status;
  const title = m('システムエラー');
  const content = m('通信中にエラーが発生しました。');
  return {title, message: formatMessage(content, statusCode)};
}

function resolveErrorMessageWhenUnexpectedError() {
  const title = m('システムエラー');
  const content = m('しばらく経ってからもう1度お試しください。');
  return {title, message: formatMessage(content)};
}

function formatMessage(content: string, statusCode?: number) {
  if (statusCode === undefined) {
    return `${content}`;
  }
  return `${content}\n${statusCode}`;
}
