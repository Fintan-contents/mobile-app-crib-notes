import {AppConfig} from './AppConfig';

describe('AppConfig', function () {
  it('react-native-configの値が取得されること', () => {
    expect(AppConfig.appIdFlavorSuffix).toBe('.test');
    expect(AppConfig.appNameHome).toBe('Test SantokuApp');
    expect(AppConfig.provisioningProfileFlavor).toBe('Not Available');
  });

  it('jest.spyOnでモックの値を上書きできること', () => {
    jest.spyOn(AppConfig, 'appNameHome', 'get').mockReturnValue('string');
    expect(AppConfig.appIdFlavorSuffix).toBe('.test');
    expect(AppConfig.appNameHome).toBe('string');
    expect(AppConfig.provisioningProfileFlavor).toBe('Not Available');
  });
});
