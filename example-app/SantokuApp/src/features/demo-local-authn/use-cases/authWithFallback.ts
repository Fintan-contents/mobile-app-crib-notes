import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const authWithFallback = async () => {
  const result = await LocalAuthentication.authenticate({
    promptMessage: '認証テスト',
    cancelLabel: 'キャンセル',
    fallbackLabel: '失敗時の基本認証',
    disableDeviceFallback: false,
    requireConfirmation: false,
  });
  alert(JSON.stringify(result));
};
