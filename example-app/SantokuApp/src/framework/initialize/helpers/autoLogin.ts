import {AuthenticationService, isUnauthorizedError} from '../../authentication';
import {InitialDataError} from './initialDataError';

export const autoLogin = async () => {
  try {
    await AuthenticationService.autoLogin();
  } catch (e) {
    if (isUnauthorizedError(e)) {
      await AuthenticationService.clientLogout();
      throw e;
    }
    throw new InitialDataError(e);
  }
};
