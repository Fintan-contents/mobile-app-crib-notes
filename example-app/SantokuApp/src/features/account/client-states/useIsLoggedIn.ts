import {useClientState} from 'bases/react-query/useClientState';

export const useIsLoggedIn = () => {
  return useClientState<boolean>(['account', 'isLoggedIn']);
};
