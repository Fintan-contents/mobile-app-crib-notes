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

import {AppConfig} from 'bases/core/configs/AppConfig';
import {log} from 'bases/logging';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Linking} from 'react-native';

import {openStoreLink} from './openStoreLink';

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
