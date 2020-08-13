interface AuthenticationState {
  isAuthenticated(): boolean;
}

const NotAuthenticated: AuthenticationState = Object.freeze({
  isAuthenticated() {
    return false;
  },
});

export type { AuthenticationState };
export { NotAuthenticated };
