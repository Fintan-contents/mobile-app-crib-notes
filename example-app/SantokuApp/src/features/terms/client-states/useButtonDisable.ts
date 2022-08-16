import {useClientState} from 'bases/react-query/useClientState';

export const useButtonDisable = () => {
  return useClientState(['terms', 'buttonDisable'], true);
};
