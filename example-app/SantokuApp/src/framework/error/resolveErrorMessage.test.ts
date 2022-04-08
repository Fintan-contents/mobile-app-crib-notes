import {BundledMessagesLoader, loadMessages} from 'framework/message';

import {resolveErrorMessage} from './resolveErrorMessage';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('resolveApiErrorMessage', () => {
  test('AxiosErrorの場合は通信エラーが返ってくること', () => {
    const {title, message} = resolveErrorMessage({
      isAxiosError: true,
      config: {url: 'http://dummy', method: 'get', data: 'dummy', headers: {}},
      response: {status: 500, data: {}},
    });
    expect(title).toEqual('システムエラー');
    expect(message).toEqual('通信中にエラーが発生しました。\n500');
  });
  test('想定外のエラーの場合はシステムエラーが返ってくること', () => {
    const {title, message} = resolveErrorMessage({});
    expect(title).toEqual('システムエラー');
    expect(message).toEqual('しばらく経ってからもう1度お試しください。');
  });
});
