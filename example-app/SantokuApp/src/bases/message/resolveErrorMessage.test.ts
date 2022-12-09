import {AxiosError} from 'axios';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';

import {resolveErrorMessage} from './resolveErrorMessage';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('resolveApiErrorMessage', () => {
  test('AxiosErrorの場合は通信エラーが返ってくること', () => {
    const {title, message} = resolveErrorMessage(
      new AxiosError(
        'error',
        '',
        {},
        {},
        {
          status: 500,
          statusText: 'Internal Server Error',
          data: {},
          headers: {},
          config: {},
        },
      ),
    );
    expect(title).toEqual('システムエラー');
    expect(message).toEqual('通信中にエラーが発生しました。\n500');
  });
  test('想定外のエラーの場合はシステムエラーが返ってくること', () => {
    const {title, message} = resolveErrorMessage({});
    expect(title).toEqual('システムエラー');
    expect(message).toEqual('しばらく経ってからもう1度お試しください。');
  });
});
