import {AppConfig} from 'bases/core/configs/AppConfig';

import {CredentialOption} from '../types/CredentialOption';
import {RedirectOption} from '../types/RedirectOption';

export const fetchWithFetchApi = (redirect: RedirectOption, credentials: CredentialOption) =>
  fetch(AppConfig.santokuAppBackendUrl + '/api/sandbox/fetch_test/redirect', {
    redirect,
    credentials,
  });
