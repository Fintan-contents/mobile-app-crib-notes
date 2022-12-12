import {
  BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION,
  setCsrfTokenHeader,
} from 'features/backend/utils/customInstance';

type CsrfTokenResponse = {
  csrfTokenHeaderName: string;
  csrfTokenValue: string;
};

const refreshCsrfToken = async () => {
  const axiosResponse = await BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.get<CsrfTokenResponse>(
    '/system/csrf-token',
  );
  setCsrfTokenHeader(axiosResponse.data.csrfTokenHeaderName, axiosResponse.data.csrfTokenValue);
};

export {refreshCsrfToken};
