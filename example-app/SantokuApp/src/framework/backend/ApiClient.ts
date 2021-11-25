import axios, {AxiosError} from 'axios';

import {AccountApi, ErrorResponse, SystemApi, TeamApi, TermsApi} from '../../generated/api';
import {AppConfig} from '../config';
import {ApplicationError} from '../error/ApplicationError';

/** APIでエラーが発生した場合に送出するエラーです。 */
export class ApiError extends ApplicationError {}

/** APIでエラー発生時に、レスポンスが存在する場合のエラーです。 */
export class ApiResponseError extends ApiError {
  constructor(
    cause: AxiosError,
    public response: {
      data: ErrorResponse;
      status: number;
      statusText: string;
      headers: Record<string, string>;
      request?: any;
    },
  ) {
    super(cause);
  }
}

/** APIでエラー発生時に、レスポンスが存在しない場合のエラーです。 */
export class ApiResourceAccessError extends ApiError {}

const instance = axios.create();
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        throw new ApiResponseError(axiosError, axiosError.response);
      }
      throw new ApiResourceAccessError(error);
    }
    throw new ApiError(error);
  },
);

export const systemApi = new SystemApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);
export const accountApi = new AccountApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);
export const termsApi = new TermsApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);
export const teamApi = new TeamApi(undefined, `${AppConfig.santokuAppBackendUrl}/api`, instance);

export async function csrfToken() {
  const token = await systemApi.getCsrfToken();
  const csrfTokenValue = token.data.csrfTokenValue;
  const csrfTokenHeaderName = token.data.csrfTokenHeaderName;
  instance.defaults.headers.common[csrfTokenHeaderName] = csrfTokenValue;
}
