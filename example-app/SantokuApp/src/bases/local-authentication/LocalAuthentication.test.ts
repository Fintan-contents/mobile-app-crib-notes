import * as ExpoAuthentication from 'expo-local-authentication';

import {LocalAuthentication} from './LocalAuthentication';

describe('ExpoLocalAuthentication', () => {
  test('isEnrolled メソッドの検証', async () => {
    jest.spyOn(ExpoAuthentication, 'isEnrolledAsync').mockResolvedValueOnce(true);
    const yes = await LocalAuthentication.isEnrolled();
    expect(yes).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'isEnrolledAsync').mockResolvedValueOnce(false);
    const no = await LocalAuthentication.isEnrolled();
    expect(no).toBeFalsy();
  });

  test('isFingerPrintSupported メソッドの検証', async () => {
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1]);
    const singleSupported = await LocalAuthentication.isFingerPrintSupported();
    expect(singleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1, 3]);
    const multipleSupported = await LocalAuthentication.isFingerPrintSupported();
    expect(multipleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const noSupport = await LocalAuthentication.isFingerPrintSupported();
    expect(noSupport).toBeFalsy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([2, 3]);
    const otherSupported = await LocalAuthentication.isFingerPrintSupported();
    expect(otherSupported).toBeFalsy();
  });

  test('isFacialSupported メソッドの検証', async () => {
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([2]);
    const singleSupported = await LocalAuthentication.isFacialSupported();
    expect(singleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1, 2]);
    const multipleSupported = await LocalAuthentication.isFacialSupported();
    expect(multipleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const noSupport = await LocalAuthentication.isFacialSupported();
    expect(noSupport).toBeFalsy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1, 3]);
    const otherSupported = await LocalAuthentication.isFacialSupported();
    expect(otherSupported).toBeFalsy();
  });

  test('isIrisSupported メソッドの検証', async () => {
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([3]);
    const singleSupported = await LocalAuthentication.isIrisSupported();
    expect(singleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([2, 3]);
    const multipleSupported = await LocalAuthentication.isIrisSupported();
    expect(multipleSupported).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([]);
    const noSupport = await LocalAuthentication.isIrisSupported();
    expect(noSupport).toBeFalsy();
    jest.spyOn(ExpoAuthentication, 'supportedAuthenticationTypesAsync').mockResolvedValueOnce([1, 2]);
    const otherSupported = await LocalAuthentication.isIrisSupported();
    expect(otherSupported).toBeFalsy();
  });

  test('authenticate メソッドの検証', async () => {
    jest.spyOn(ExpoAuthentication, 'authenticateAsync').mockResolvedValueOnce({success: true});
    const yes = await LocalAuthentication.authenticate({promptMessage: 'test'});
    expect(yes.success).toBeTruthy();
    jest.spyOn(ExpoAuthentication, 'authenticateAsync').mockResolvedValueOnce({success: false, error: 'user_cancel'});
    const no = await LocalAuthentication.authenticate({promptMessage: 'test'});
    expect(no.success).toBeFalsy();
    // @ts-ignore no.successがfalseの場合のみno.errorが存在するため、そのチェックをするように警告がでるが、expectを条件分岐の中に記載すると今度はその警告が出るのでignoreする
    expect(no.error).toBe('user_cancel');
  });
});
