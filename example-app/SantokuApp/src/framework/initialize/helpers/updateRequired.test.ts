import {AppConfig} from 'framework/config';
import {log} from 'framework/logging';
import {BundledMessagesLoader, loadMessages} from 'framework/message';
import {Alert, Linking} from 'react-native';

import {InitialDataError} from './initialDataError';
import {
  checkAppUpdates,
  isUpdateRequiredError,
  openStoreLink,
  showUpdateRequiredDialog,
  UpdateRequiredError,
} from './updateRequired';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});
beforeEach(() => {
  jest.resetAllMocks();
});

describe('openStoreLink', () => {
  it('storeUrlが空文字の場合は何もしない', async () => {
    jest.spyOn(AppConfig, 'storeUrl', 'get').mockReturnValue('');
    const spyDebug = jest.spyOn(log, 'debug').mockImplementation();
    const spyOpenURL = jest.spyOn(Linking, 'openURL');
    await openStoreLink();
    expect(spyDebug).toHaveBeenCalledWith('Invalid link. link=[]');
    expect(spyOpenURL).not.toHaveBeenCalled();
  });
  it('canOpenURLの戻り値がfalseの場合はストアリンクを開かない', async () => {
    // storeUrlはPlatform.selectを使っているのでmockしないとundefinedが返ってくる
    jest.spyOn(AppConfig, 'storeUrl', 'get').mockReturnValue('http://dummy');
    jest.spyOn(Linking, 'canOpenURL').mockRejectedValue(false);
    const spyDebug = jest.spyOn(log, 'debug').mockImplementation();
    const spyOpenURL = jest.spyOn(Linking, 'openURL');
    await openStoreLink();
    expect(spyDebug).toHaveBeenCalledWith('Can not store open. err=[false]');
    expect(spyOpenURL).not.toHaveBeenCalled();
  });
  it('条件が揃うとストアリンクを開く', async () => {
    // storeUrlはPlatform.selectを使っているのでmockしないとundefinedが返ってくる
    jest.spyOn(AppConfig, 'storeUrl', 'get').mockReturnValue('http://dummy');
    jest.spyOn(Linking, 'canOpenURL').mockResolvedValue(true);
    const spyDebug = jest.spyOn(log, 'debug').mockImplementation();
    const spyOpenURL = jest.spyOn(Linking, 'openURL').mockResolvedValue(true);
    await openStoreLink();
    expect(spyDebug).not.toHaveBeenCalled();
    expect(spyOpenURL).toHaveBeenCalledWith('http://dummy');
  });
  it('ストアリンクを開いた時にエラー発生', async () => {
    // storeUrlはPlatform.selectを使っているのでmockしないとundefinedが返ってくる
    jest.spyOn(AppConfig, 'storeUrl', 'get').mockReturnValue('http://dummy');
    jest.spyOn(Linking, 'canOpenURL').mockResolvedValue(true);
    const spyDebug = jest.spyOn(log, 'debug').mockImplementation();
    const spyOpenURL = jest.spyOn(Linking, 'openURL').mockRejectedValue('open error');
    await openStoreLink();
    expect(spyDebug).toHaveBeenCalledWith('Store open error. err=[open error]');
    expect(spyOpenURL).toHaveBeenCalledWith('http://dummy');
  });
});

describe('checkAppUpdates', () => {
  it('Platformがwebの場合はInitialDataErrorがスローされること', async () => {
    await expect(() => checkAppUpdates('web', '0.0.1')).rejects.toThrow(
      new InitialDataError('Not supported type. type=[web]'),
    );
  });
  it('nativeApplicationVersionがnullの場合はInitialDataErrorがスローされること', async () => {
    await expect(() => checkAppUpdates('android', null)).rejects.toThrow(
      new InitialDataError('Invalid version. version=[null]'),
    );
  });
  it('getAppUpdatesがエラーをスローした場合はInitialDataErrorがスローされること', async () => {
    jest.mock('service', () => {
      return {
        getAppUpdates: () => {
          throw new Error('dummy');
        },
      };
    });
    await expect(() => checkAppUpdates('android', '0.1.1')).rejects.toThrow(
      new InitialDataError('Failed to verify if the app needs to be updated.', new Error('dummy')),
    );
  });
});

describe('showUpdateRequiredDialog', () => {
  it('showUpdateRequiredDialog', () => {
    const spyAlert = jest.spyOn(Alert, 'alert');
    showUpdateRequiredDialog('0.0.1');
    expect(spyAlert).toHaveBeenCalledWith(
      'アプリアップデート',
      '現在のバージョン(0.0.1)ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。',
      expect.anything(),
    );
  });
});

describe('isUpdateRequiredError', () => {
  it('UpdateRequiredError is UpdateRequiredError', () => {
    expect(isUpdateRequiredError(new UpdateRequiredError('dummy', '0.0.1'))).toBeTruthy();
  });
});
