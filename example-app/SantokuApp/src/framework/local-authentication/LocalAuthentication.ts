import * as ExpoLocalAuthentication from 'expo-local-authentication';

/**
 * 生体認証を有効にしているかどうかを取得します。
 */
function isEnrolled(): Promise<boolean> {
  return ExpoLocalAuthentication.isEnrolledAsync();
}

/**
 * 指紋認証が有効かどうかを取得します。
 */
function isFingerPrintSupported(): Promise<boolean> {
  return isAuthenticationTypeSupported(ExpoLocalAuthentication.AuthenticationType.FINGERPRINT);
}

/**
 * 顔認証が有効かどうかを取得します。
 */
function isFacialSupported(): Promise<boolean> {
  return isAuthenticationTypeSupported(ExpoLocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);
}

/**
 * 虹彩認証が有効かどうかを取得します。
 */
function isIrisSupported(): Promise<boolean> {
  return isAuthenticationTypeSupported(ExpoLocalAuthentication.AuthenticationType.IRIS);
}

/**
 * 有効な生体認証を実行します。
 * @param option {@link LocalAuthenticationOption}
 */
function authenticate(
  option: ExpoLocalAuthentication.LocalAuthenticationOptions,
): Promise<ExpoLocalAuthentication.LocalAuthenticationResult> {
  return ExpoLocalAuthentication.authenticateAsync(option);
}

function isAuthenticationTypeSupported(checkedType: ExpoLocalAuthentication.AuthenticationType): Promise<boolean> {
  return ExpoLocalAuthentication.supportedAuthenticationTypesAsync().then(
    (types: ExpoLocalAuthentication.AuthenticationType[]) => {
      return types.indexOf(checkedType) >= 0;
    },
  );
}

export const LocalAuthentication = {
  isEnrolled,
  isFingerPrintSupported,
  isFacialSupported,
  isIrisSupported,
  authenticate,
};
