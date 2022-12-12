import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const isIrisSupported = async () => {
  const isSupported = await LocalAuthentication.isIrisSupported();
  alert(isSupported);
};
