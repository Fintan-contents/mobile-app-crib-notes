import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const authWithoutFallback = async () => {
  const result = await LocalAuthentication.authenticate({
    promptMessage: 'Test Message',
    disableDeviceFallback: true,
    cancelLabel: 'キャンセル', // FallbackをOFFにしている場合は必須
  });
  alert(JSON.stringify(result));
};
