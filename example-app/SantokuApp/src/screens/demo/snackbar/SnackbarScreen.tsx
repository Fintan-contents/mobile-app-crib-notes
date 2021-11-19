import {useSnackbar} from 'components/snackbar';
import {m} from 'framework';
import React, {useCallback} from 'react';

import {SnackbarTemplate} from './SnackbarTemplate';

const ScreenName = 'Snackbar';
const Screen: React.FC = () => {
  const snackbar = useSnackbar();

  const showSnackbar = useCallback(() => {
    snackbar.show(m('app.webview.onError'));
  }, [snackbar]);

  const showSnackbarWithCloseButton = useCallback(() => {
    snackbar.showWithCloseButton(m('app.webview.onError'));
  }, [snackbar]);

  return (
    <SnackbarTemplate
      testID="SnackbarScreen"
      showSnackbar={showSnackbar}
      showSnackbarWithCloseButton={showSnackbarWithCloseButton}
    />
  );
};

export const SnackbarScreen = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Message',
    presentation: 'formSheet' as const,
  },
};
