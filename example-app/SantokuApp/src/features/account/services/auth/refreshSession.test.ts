import {
  BACKEND_AXIOS_INSTANCE,
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
} from 'features/backend/utils/customInstance';

import {refreshSession} from './refreshSession';

describe('refreshSession', () => {
  test('ログインが行われ、再取得したCsrfTokenがデフォルトヘッダとして設定されること', async () => {
    const spyPostRequest = jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'post').mockResolvedValue({
      status: 200,
      data: {
        status: 'COMPLETE',
      },
    });
    const spyGetRequest = jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'get').mockResolvedValue({
      status: 200,
      data: {
        csrfTokenHeaderName: 'X-CSRF-TOKEN',
        csrfTokenValue: 'dummy',
      },
    });
    await refreshSession();
    expect(spyPostRequest).toHaveBeenCalledWith('/login', {accountId: '1234567890', password: '1234567890'});
    expect(spyGetRequest).toHaveBeenCalledWith('/system/csrf-token');
    expect(BACKEND_AXIOS_INSTANCE.defaults.headers.common['X-CSRF-TOKEN']).toEqual('dummy');
    expect(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.defaults.headers.common['X-CSRF-TOKEN']).toEqual('dummy');
  });
});
