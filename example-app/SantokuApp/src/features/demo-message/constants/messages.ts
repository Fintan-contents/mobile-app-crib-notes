import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {m} from 'bases/message/Message';

export const messages = [
  {
    name: 'ホーム',
    value: m('ホーム'),
  },
  {
    name: 'app.account.signupError',
    value: m('app.account.signupError', String(new ApplicationError('Failed to sign up.'))),
  },
  {
    name: 'fw.error.通信エラー',
    value: m('fw.error.通信エラー'),
  },
];
