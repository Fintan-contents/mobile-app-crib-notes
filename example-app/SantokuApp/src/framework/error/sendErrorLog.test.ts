import {BundledMessagesLoader, loadMessages} from 'framework/message';

import {log} from '../logging';
import {sendErrorLog} from './sendErrorLog';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('resolveApiErrorMessage', () => {
  test('AxiosErrorの場合', () => {
    const spyError = jest.spyOn(log, 'error').mockImplementation();
    sendErrorLog({
      isAxiosError: true,
      config: {url: 'http://dummy', method: 'get', data: 'request data', headers: {}},
      response: {status: 500, statusText: 'Internal Server Error', data: 'response data', headers: {}},
    });
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
