import {useClientState} from 'bases/react-query/useClientState';

export const useIsWebViewError = () => {
  return useClientState(['terms', 'isWebViewError'], false);
};
