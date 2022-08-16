import {AxiosError} from 'axios';
import {log} from 'bases/logging';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';

import {sendErrorLog} from './sendErrorLog';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('sendErrorLog', () => {
  test('AxiosErrorの場合', () => {
    const spyError = jest.spyOn(log, 'error').mockImplementation();
    const error = new AxiosError(
      'dummyError',
      '',
      {url: 'http://dummy', method: 'get', data: 'request data', headers: {}},
      {},
      {status: 500, statusText: 'Internal Server Error', data: 'response data', headers: {}, config: {}},
      // {status: 500, statusText: 'Internal Server Error', data: 'response data', headers: {}},
    );
    sendErrorLog(error);
    expect(spyError).toHaveBeenCalledWith(
      `
Backend API Request Error:
req.url=[http://dummy]
req.method=[get]
res.status=[500]
res.statusText=[Internal Server Error]
`,
      'AxiosError',
    );
  });
  test('Errorの場合', () => {
    const spyError = jest.spyOn(log, 'error').mockImplementation();
    sendErrorLog(new Error('test'));
    expect(spyError).toHaveBeenCalledWith(`UnexpectedError: message=[test]`, 'UnexpectedRequestError');
  });
});
