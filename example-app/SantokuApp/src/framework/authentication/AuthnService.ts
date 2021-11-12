import {DefaultApi, Configuration} from '../../generated/api';

class CsrfToken {
  isInitialized: boolean = false;
  tokenValue: string = '';
}

class AuthnContext {
  isAuthronized: boolean = false;
  accountId: string = '';
}

const csrfToken = new CsrfToken();
// パスは実行時のものを環境変数や外部から設定できるようにしてください。
const basePath = 'http://10.0.2.2:9080/api';

async function getCsrfToken(): Promise<any>{
  if(csrfToken.isInitialized) {
    return undefined;
  }
  const api = new DefaultApi(new Configuration({basePath: basePath}));
  const token = await api.getCsrfToken();
  csrfToken.isInitialized = true;
  csrfToken.tokenValue = token.data.csrfTokenValue ?? '';
  return token;
}

function createApi() {
  return new DefaultApi(new Configuration({basePath: basePath}));
}

function requestOptions() {
  return {
    headers:{
      'Content-Type': 'Application/json',
      'X-CSRF-TOKEN': csrfToken.tokenValue,
    },
  };
}

async function signup(nickname: string, password: string): Promise<any> {
  if(!csrfToken.isInitialized) {
    await getCsrfToken();
  }
  const api = createApi()
  const res = await api.postSignup({nickname: nickname, password: password}, requestOptions());
  return res;
}

async function login(accountId: string, password: string): Promise<any> {
  const api = createApi();
  const res = await api.postLogin({accountId: accountId, password: password},requestOptions());
  return res;
}

async function logout(): Promise<any> {
  const api = createApi()
  const res = await api.postLogout(requestOptions());
  return res;
}

const context = new AuthnContext();

export const AuthnService = {
  getCsrfToken,
  signup,
  login,
  logout,
  context,
  csrfToken,
};
