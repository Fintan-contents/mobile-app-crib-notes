import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const isFingerPrintSupported = async () => {
  const isSupported = await LocalAuthentication.isFingerPrintSupported();
  alert(isSupported);
};
