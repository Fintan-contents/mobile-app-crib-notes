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
