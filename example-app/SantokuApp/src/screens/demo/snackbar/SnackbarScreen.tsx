import React from 'react';

import {SnackbarTemplate} from './SnackbarTemplate';
import {useSnackbarDemo} from './useSnackbarDemo';

const ScreenName = 'Snackbar';
const Screen: React.FC = () => {
  const {showSnackbar} = useSnackbarDemo();
  return <SnackbarTemplate testID="SnackbarScreen" showSnackbar={showSnackbar} />;
};

export const SnackbarScreen = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Message',
    presentation: 'formSheet' as const,
  },
};
