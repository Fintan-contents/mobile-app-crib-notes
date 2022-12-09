import {useIsLoggedIn} from '../../client-states/useIsLoggedIn';

export const useAuth = () => {
  const [isLoggedIn] = useIsLoggedIn();
  return {isLoggedIn};
};
