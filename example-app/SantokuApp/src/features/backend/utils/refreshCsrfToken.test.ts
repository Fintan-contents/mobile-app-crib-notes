import {
  BACKEND_AXIOS_INSTANCE,
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
} from 'features/backend/utils/customInstance';

import {refreshCsrfToken} from './refreshCsrfToken';

describe('refreshCsrfToken', () => {
  test('取得したCsrfTokenがデフォルトヘッダとして設定されること', async () => {
    const spyAxiosInstance = jest.spyOn(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, 'get').mockResolvedValue({
      status: 200,
      data: {
        csrfTokenHeaderName: 'X-CSRF-TOKEN',
        csrfTokenValue: 'dummy',
      },
    });
    await refreshCsrfToken();
    expect(spyAxiosInstance).toHaveBeenCalledWith('/system/csrf-token');
    expect(BACKEND_AXIOS_INSTANCE.defaults.headers.common['X-CSRF-TOKEN']).toEqual('dummy');
    expect(BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.defaults.headers.common['X-CSRF-TOKEN']).toEqual('dummy');
  });
});
