import {LocalAuthentication} from 'framework';

export const useLocalAuthentication = () => {
  const isEnrolled = async () => {
    const isEnrolled: boolean = await LocalAuthentication.isEnrolled();
    alert(isEnrolled);
  };

  const isFingerPrintSupported = async () => {
    const isSupported = await LocalAuthentication.isFingerPrintSupported();
    alert(isSupported);
  };

  const isFacialSupported = async () => {
    const isSupported = await LocalAuthentication.isFacialSupported();
    alert(isSupported);
  };

  const isIrisSupported = async () => {
    const isSupported = await LocalAuthentication.isIrisSupported();
    alert(isSupported);
  };

  const localAuthentication1 = async () => {
    const result = await LocalAuthentication.authenticate({
      promptMessage: 'Test Message',
      disableDeviceFallback: true,
      cancelLabel: 'キャンセル', // FallbackをOFFにしている場合は必須
    });
    alert(JSON.stringify(result));
  };

  const localAuthentication2 = async () => {
    const result = await LocalAuthentication.authenticate({
      promptMessage: '認証テスト',
      cancelLabel: 'キャンセル',
      fallbackLabel: '失敗時の基本認証',
      disableDeviceFallback: false,
    });
    alert(JSON.stringify(result));
  };
  return {
    isEnrolled,
    isFingerPrintSupported,
    isFacialSupported,
    isIrisSupported,
    localAuthentication1,
    localAuthentication2,
  };
};
