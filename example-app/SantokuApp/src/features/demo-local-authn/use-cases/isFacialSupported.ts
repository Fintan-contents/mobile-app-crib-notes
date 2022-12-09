import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const isFacialSupported = async () => {
  const isSupported = await LocalAuthentication.isFacialSupported();
  alert(isSupported);
};
