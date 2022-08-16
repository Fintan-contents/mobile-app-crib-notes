import {useClientState} from 'bases/react-query/useClientState';

export const useIsExited = () => {
  return useClientState(['terms', 'isExited'], false);
};
