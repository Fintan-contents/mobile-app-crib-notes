import {m} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import React, {useCallback} from 'react';

import {SnackbarTemplate} from '../components/SnackbarTemplate';

export const SnackbarPage: React.FC = () => {
  const showSnackbar = useCallback(() => {
    Snackbar.show(m('app.webview.onError'));
  }, []);

  const showSnackbarWithCloseButton = useCallback(() => {
    Snackbar.showWithCloseButton(m('app.webview.onError'));
  }, []);
  return (
    <SnackbarTemplate
      testID="SnackbarScreen"
      showSnackbar={showSnackbar}
      showSnackbarWithCloseButton={showSnackbarWithCloseButton}
    />
  );
};
