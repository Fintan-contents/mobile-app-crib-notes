import {Alert, AlertButton, AlertOptions} from 'react-native';

import {handleError} from './handleError';

export const handleErrorWithAlert = (
  error: unknown,
  title: string,
  message?: string,
  buttons?: AlertButton[],
  options?: AlertOptions,
) => {
  handleError(error);
  Alert.alert(title, message, buttons, options);
};
