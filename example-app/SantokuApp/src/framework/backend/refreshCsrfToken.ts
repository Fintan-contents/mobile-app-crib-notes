import {BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION, setCsrfTokenHeader} from './customInstance';

type CsrfTokenResponse = {
  csrfTokenHeaderName: string;
  csrfTokenValue: string;
};

const refreshCsrfToken = async () => {
  const axiosResponse = await BACKEND_AXIOS_INSTANCE_WITHOUT_REFRESH_SESSION.get<CsrfTokenResponse>('/csrf_token');
  setCsrfTokenHeader(axiosResponse.data.csrfTokenHeaderName, axiosResponse.data.csrfTokenValue);
};

export {refreshCsrfToken};
