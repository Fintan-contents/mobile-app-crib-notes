import React from 'react';

import {WithLoadingOverlay} from './loading/WithLoadingOverlay';
import {WithSnackbar} from './snackbar';

export const WithOverlay: React.FC = ({children}) => {
  return (
    <WithLoadingOverlay>
      <WithSnackbar>{children}</WithSnackbar>
    </WithLoadingOverlay>
  );
};
