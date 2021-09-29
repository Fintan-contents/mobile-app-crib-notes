import {createContext, useContext} from 'react';
import {BackendAuthenticationState} from '../backend/authn/backend/BackendAuthenticationState';

export interface BackendAuthContext {
  readonly authnState: BackendAuthenticationState;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
  isLoggedIn: boolean;
}

const warningMessage = 'You probably forgot to put <BackendAuthProvider>.';

const warningObject = {
  get authnState(): BackendAuthenticationState {
    throw new Error(warningMessage);
  },
  signIn: () => {
    throw new Error(warningMessage);
  },
  signOut: () => {
    throw new Error(warningMessage);
  },
  refreshSession: () => {
    throw new Error(warningMessage);
  },
  isLoggedIn: false,
};

const Context = createContext<BackendAuthContext>(warningObject);

export const BackendAuthProvider = Context.Provider;
export const useBackendAuthContext = () => useContext(Context);
