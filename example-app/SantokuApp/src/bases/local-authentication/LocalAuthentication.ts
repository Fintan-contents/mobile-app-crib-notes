/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
