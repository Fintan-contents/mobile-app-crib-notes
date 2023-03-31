import {Platform} from 'react-native';

import {AppConfig} from './AppConfig';

describe('AppConfig', function () {
  it('expo-constants extraの値が取得されること', () => {
    expect(AppConfig.termsUrl).toBe('https://www.tis.co.jp/termsofuse/');
    expect(AppConfig.santokuAppBackendUrl).toBe('http://localhost:9080');
    expect(AppConfig.requestTimeout).toBeUndefined();
  });

  it('jest.spyOnでモックの値を上書きできること', () => {
    jest.spyOn(AppConfig, 'termsUrl', 'get').mockReturnValue('string');
    expect(AppConfig.termsUrl).toBe('string');
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
