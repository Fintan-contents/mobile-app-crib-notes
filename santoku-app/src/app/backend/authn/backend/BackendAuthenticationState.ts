import {AuthenticationState} from '../AuthenticationState';

class BackendAuthenticationState implements AuthenticationState {
  readonly oidcAuthenticationState: AuthenticationState;
  readonly backendSessionCreated: boolean;

  constructor(oidcAuthenticationState: AuthenticationState, backendSessionCreated: boolean) {
    this.oidcAuthenticationState = oidcAuthenticationState;
    this.backendSessionCreated = backendSessionCreated;
  }

  public getOidcAuthenticationState(): AuthenticationState {
    return this.oidcAuthenticationState;
  }

  public isOidcAuthenticated(): boolean {
    return this.oidcAuthenticationState.isAuthenticated();
  }

  public isBackendAuthenticated(): boolean {
    return this.backendSessionCreated;
  }

  public isAuthenticated(): boolean {
    return this.isOidcAuthenticated() && this.isBackendAuthenticated();
  }
}

export {BackendAuthenticationState};
