import {Snackbar} from 'bases/ui/snackbar/Snackbar';

import {handleError} from './handleError';

export const handleErrorWithSnackbar = (error: unknown, message: string) => {
  handleError(error);
  Snackbar.show(message);
};
