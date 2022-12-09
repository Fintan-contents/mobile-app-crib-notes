import {AlertButton, AlertOptions} from 'react-native';

let handleErrorWithAlert = (
  error: unknown,
  title: string,
  message?: string,
  buttons?: AlertButton[],
  options?: AlertOptions,
) => console.log(String(error));

const setHandleErrorWithAlert = (
  e: (error: unknown, title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => void,
) => {
  handleErrorWithAlert = e;
};

export {handleErrorWithAlert, setHandleErrorWithAlert};
