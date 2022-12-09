import axios from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';

export const fetchWithAxios = (withCredentials: boolean, maxRedirects?: number) => {
  return axios.get<{message: string}>(AppConfig.santokuAppBackendUrl + '/api/sandbox/fetch_test/redirect', {
    maxRedirects,
    withCredentials,
  });
};
