import {createContext, useContext} from 'react';
import type {LoginCredential, SessionId} from '../backend/StatefulAuthnService';

export interface LoginApiAdapter {
  (credential: LoginCredential): Promise<void>;
}

export interface LogoutApiAdapter {
  (): Promise<void>;
}

export interface StatefulLoginContext {
  login: LoginApiAdapter;
  logout: LogoutApiAdapter;
  readonly isAuthenticated: boolean;
  readonly sessionId: SessionId;
}

const warningMessage = 'You probably forgot to put <LoginProvider>.';

const warningObject = {
  login: (_: LoginCredential) => {
    throw new Error(warningMessage);
  },
  logout: () => {
    throw new Error(warningMessage);
  },
  get isAuthenticated(): boolean {
    throw new Error(warningMessage);
  },
  get sessionId(): SessionId {
    throw new Error(warningMessage);
  },
};

const Context = createContext<StatefulLoginContext>(warningObject);

export const StatefulLoginProvider = Context.Provider;
export const useStatefulLoginContext = () => useContext(Context);
