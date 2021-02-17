interface AuthenticationState {
  isAuthenticated(): boolean;
}

class NotAuthenticatedState implements Readonly<AuthenticationState> {
  isAuthenticated() {
    return false;
  }
}

const NotAuthenticated = Object.freeze(new NotAuthenticatedState());

export type {AuthenticationState};
export {NotAuthenticated};
