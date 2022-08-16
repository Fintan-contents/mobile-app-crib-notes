import {useState} from 'react';

import {useDebounce} from './useDebounce';

export const useDebounceState = <T>(initialState: T, timeout: number) => {
  const [state, setState] = useState(initialState);
  const stateDebounce = useDebounce(state, timeout);
  return [state, stateDebounce, setState];
};
