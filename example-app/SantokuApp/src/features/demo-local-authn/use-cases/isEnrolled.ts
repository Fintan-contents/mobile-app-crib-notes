import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const isEnrolled = async () => {
  const isEnrolled = await LocalAuthentication.isEnrolled();
  alert(isEnrolled);
};
