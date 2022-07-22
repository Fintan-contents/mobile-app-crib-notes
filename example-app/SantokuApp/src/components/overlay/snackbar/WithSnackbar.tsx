import {m} from 'framework';
import {createUseContextAndProvider} from 'framework/utilities';
import React, {useMemo, useState} from 'react';

import {FullWindowOverlay} from '../FullWindowOverlay';
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

const [useSnackbar, SnackbarContextProvider] = createUseContextAndProvider<SnackbarContextType>();

function WithSnackbar(props: {initialState?: SnackbarShowProps; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarProps>(
    props.initialState ?? {
      message: '',
    },
  );
  const snackbarContext = useMemo<SnackbarContextType>(
    () => ({
      show: (message: string, showProps?: SnackbarShowContextProps) => {
        setState({
          timestamp: Date.now(),
          ...showProps,
          message,
        });
      },
      showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonContextProps) => {
        setState({
          timestamp: Date.now(),
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
    <SnackbarContextProvider value={snackbarContext}>
      {props.children}
      <FullWindowOverlay>
        <Snackbar {...state} />
      </FullWindowOverlay>
    </SnackbarContextProvider>
  );
}

export {useSnackbar, WithSnackbar};
