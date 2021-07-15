import {createContext, useContext} from 'react';
import type {AuthenticationState} from '../backend/authn/AuthenticationState';

export interface OidcAuthCodeTokenClaimCallback {
  (): Promise<void>;
}

export interface OidcLogoutCallback {
  (): Promise<void>;
}

export interface OidcRefreshTokenCallback {
  (): Promise<void>;
}

export interface StatelessLoginContext {
  readonly authState: AuthenticationState;
  signIn: OidcAuthCodeTokenClaimCallback;
  signOut: OidcLogoutCallback;
  refresh: OidcRefreshTokenCallback;
}

const warningMessage = 'You probably forgot to put <LoginProvider>.';

const warningObject = {
  get authState(): AuthenticationState {
    throw new Error(warningMessage);
  },
  signIn: () => {
    throw new Error(warningMessage);
  },
  signOut: () => {
    throw new Error(warningMessage);
  },
  refresh: () => {
    throw new Error(warningMessage);
  },
};

const Context = createContext<StatelessLoginContext>(warningObject);

export const StatelessLoginProvider = Context.Provider;
export const useStatelessLoginContext = () => useContext(Context);
