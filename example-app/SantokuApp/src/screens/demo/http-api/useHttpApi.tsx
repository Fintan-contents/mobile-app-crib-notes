import axios from 'axios';
import {AppConfig} from 'framework/config';
import {useCallback, useState} from 'react';

const redirectOptions: ['follow', 'error', 'manual'] = ['follow', 'error', 'manual'];
const credentialsOptions: ['include', 'same-origin', 'omit'] = ['include', 'same-origin', 'omit'];

export const useHttpApi = () => {
  const [redirectOptionIndex, setRedirectOptionIndex] = useState(0);
  const [credentialsOptionIndex, setCredentialsOptionIndex] = useState(0);
  const [maxRedirectsOption, setMaxRedirectsOption] = useState('5');
  const [withCredentialsOption, setWithCredentialsOption] = useState(true);
  const [responseInfo, setResponseInfo] = useState('');

  const callFetch = useCallback(() => {
    fetch(AppConfig.santokuAppBackendUrl + '/api/sandbox/fetch_test/redirect', {
      redirect: redirectOptions[redirectOptionIndex],
      credentials: credentialsOptions[credentialsOptionIndex],
    })
      .then(async response => {
        const json = (await response.json()) as {message: string};
        setResponseInfo(`redirect option:${redirectOptions[redirectOptionIndex]}
credentials option:${credentialsOptions[credentialsOptionIndex]}
response.uri:${response.url}
response.redirected:${String(response.redirected)}
${json.message}`);
      })
      .catch(error => {
        setResponseInfo('Error occurred\n' + JSON.stringify(error));
        console.error(error);
      });
  }, [redirectOptionIndex, credentialsOptionIndex]);

  const callAxios = useCallback(() => {
    const maxRedirects = isNaN(Number(maxRedirectsOption)) ? undefined : Number(maxRedirectsOption);
    axios
      .get<{message: string}>(AppConfig.santokuAppBackendUrl + '/api/sandbox/fetch_test/redirect', {
        maxRedirects,
        withCredentials: withCredentialsOption,
      })
      .then(response => {
        setResponseInfo(`maxRedirects option:${String(maxRedirects)}
withCredentials option:${String(withCredentialsOption)}
${response.data.message}`);
      })
      .catch(error => {
        setResponseInfo('Error occurred\n' + JSON.stringify(error));
        console.error(error);
      });
  }, [maxRedirectsOption, withCredentialsOption]);

  return {
    redirectOptions,
    credentialsOptions,
    redirectOptionIndex,
    credentialsOptionIndex,
    maxRedirectsOption,
    withCredentialsOption,
    responseInfo,
    setRedirectOptionIndex,
    setCredentialsOptionIndex,
    setMaxRedirectsOption,
    setWithCredentialsOption,
    callFetch,
    callAxios,
  };
};
