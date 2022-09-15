import {Platform} from 'react-native';

import {AppConfig} from './AppConfig';

describe('AppConfig', function () {
  it('react-native-configの値が取得されること', () => {
    expect(AppConfig.appIdFlavorSuffix).toBe('.test');
    expect(AppConfig.appNameHome).toBe('Test SantokuApp');
    expect(AppConfig.provisioningProfileFlavor).toBe('Not Available');
    expect(AppConfig.termsUrl).toBe('https://www.tis.co.jp/termsofuse/');
    expect(AppConfig.santokuAppBackendUrl).toBe('http://localhost:9080');
    expect(AppConfig.requestTimeout).toBeUndefined();
  });

  it('jest.spyOnでモックの値を上書きできること', () => {
    jest.spyOn(AppConfig, 'appNameHome', 'get').mockReturnValue('string');
    expect(AppConfig.appIdFlavorSuffix).toBe('.test');
    expect(AppConfig.appNameHome).toBe('string');
    expect(AppConfig.provisioningProfileFlavor).toBe('Not Available');
  });
  it('Apple StoreのURLが取得されること', () => {
    jest.spyOn(Platform, 'select').mockReturnValue('apps://itunes.apple.com/jp/app/{appleAppID}');
    expect(AppConfig.storeUrl).toBe('apps://itunes.apple.com/jp/app/{appleAppID}');
  });
  it('Play StoreのURLが取得されること', () => {
    jest.spyOn(Platform, 'select').mockReturnValue('https://play.google.com/store/apps/details?id={applicationId}');
    expect(AppConfig.storeUrl).toBe('https://play.google.com/store/apps/details?id={applicationId}');
  });
});
