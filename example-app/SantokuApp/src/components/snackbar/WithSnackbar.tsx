import React, {Dispatch, SetStateAction, useContext, useMemo, useState} from 'react';

import {Snackbar, SnackbarHideProps, SnackbarProps, SnackbarShowProps} from './Snackbar';

type SnackbarHideContextProps = Omit<SnackbarHideProps, 'hide'>;

type SnackbarContextType = {
  show: Dispatch<SetStateAction<SnackbarShowProps>>;
  hide: (hideProps?: SnackbarHideContextProps) => void;
};

const SnackbarContext = React.createContext<SnackbarContextType>({show: () => {}, hide: () => {}});

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export function WithSnackbar(props: {initialState?: SnackbarShowProps; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarProps>(
    props.initialState ?? {
      message: '',
    },
  );
  const snackbarContext = useMemo(
    () => ({
      show: setState,
      hide: (hideProps?: SnackbarHideContextProps) => {
        setState((prevState) => ({...prevState, ...hideProps, hide: true}));
      },
    }),
    [],
  );
  return (
    <SnackbarContext.Provider value={snackbarContext}>
      <Snackbar {...state}>{props.children}</Snackbar>
    </SnackbarContext.Provider>
  );
}
