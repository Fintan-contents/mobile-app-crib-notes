import {m} from 'framework';
import React, {useContext, useMemo, useState} from 'react';

import {Snackbar, SnackbarHideProps, SnackbarProps, SnackbarShowProps} from './Snackbar';

type SnackbarShowContextProps = Omit<SnackbarShowProps, 'message'>;
type SnackbarShowCloseButtonContextProps = Omit<
  SnackbarShowContextProps,
  'actionText' | 'actionHandler' | 'actionTextStyle'
>;
type SnackbarHideContextProps = Omit<SnackbarHideProps, 'hide'>;

type SnackbarContextType = {
  /**
   * Show snackbar.
   *
   * @param message - Displayed message.
   * @param showProps - Snackbar props(SnackbarShowContextProps).
   */
  show: (message: string, showProps?: SnackbarShowContextProps) => void;

  /**
   * Show the snackbar with the close button.
   * The close button is placed to the right of the message.
   *
   * @param message - Displayed message.
   * @param showProps - Snackbar props(SnackbarShowCloseButtonContextProps).
   */
  showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonContextProps) => void;

  /**
   * Hide snackbar.
   *
   * @param hideProps - Snackbar props(SnackbarHideContextProps).
   */
  hide: (hideProps?: SnackbarHideContextProps) => void;
};

const SnackbarContext = React.createContext<SnackbarContextType>({
  show: () => {},
  showWithCloseButton: () => {},
  hide: () => {},
});

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export function WithSnackbar(props: {initialState?: SnackbarShowProps; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarProps>(
    props.initialState ?? {
      message: '',
    },
  );
  const snackbarContext = useMemo<SnackbarContextType>(
    () => ({
      show: (message: string, showProps?: SnackbarShowContextProps) => {
        setState({
          ...showProps,
          message,
        });
      },
      showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonContextProps) => {
        setState({
          ...showProps,
          actionText: m('閉じる'),
          actionHandler: snackbarContext.hide,
          message,
        });
      },
      hide: (hideProps?: SnackbarHideContextProps) => {
        setState(prevState => ({...prevState, ...hideProps, hide: true}));
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
