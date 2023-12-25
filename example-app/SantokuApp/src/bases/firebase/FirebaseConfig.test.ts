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

import firebase from '@react-native-firebase/app';

import {FirebaseConfig, firebaseConfig} from './FirebaseConfig';

const mockNonDummySettings = {
  name: 'nonDummy',
  options: {
    appId: 'non dummy firebase app id',
    projectId: 'non dummy',
  },
  delete: jest.fn(),
  utils: jest.fn(),
  crashlytics: jest.fn(),
  messaging: jest.fn(),
};

const mockDummySettings = {
  name: 'dummy',
  options: {
    appId: 'dummy firebase app id',
    projectId: 'dummy',
  },
  delete: jest.fn(),
  utils: jest.fn(),
  crashlytics: jest.fn(),
  messaging: jest.fn(),
};

describe('Firebase Config', () => {
  test('指定した名前でFirebaseインスタンスが生成されることの検証', () => {
    const spy = jest.spyOn(firebase, 'app');
    // eslint-disable-next-line no-new -- 作成したインスタンスは以降の検証で使用しないため
    new FirebaseConfig('testApp');
    expect(spy).toHaveBeenCalledWith('testApp');
    // eslint-disable-next-line no-new -- 作成したインスタンスは以降の検証で使用しないため
    new FirebaseConfig();
    expect(spy).toHaveBeenCalledWith(undefined);
    spy.mockRestore();
  });
  test('Firebaseインスタンスの名前を取得できるかの検証', () => {
    expect(firebaseConfig.name).toEqual('DEFAULT');
  });
  test('FirebaseインスタンスのOption情報を取得できるかの検証', () => {
    expect(firebaseConfig.options).toEqual({
      appId: 'mocked firebase app id',
      projectId: 'mocked firebase project id',
    });
  });
  test('Firebaseの接続情報がダミーの場合の検証', () => {
    const spy = jest.spyOn(firebase, 'app');
    spy.mockReturnValue(mockDummySettings);
    expect(new FirebaseConfig().isDummy).toEqual(true);
    spy.mockRestore();
  });
  test('Firebaseの接続情報がダミーではない場合の検証', () => {
    const spy = jest.spyOn(firebase, 'app');
    spy.mockReturnValue(mockNonDummySettings);
    expect(new FirebaseConfig().isDummy).toEqual(false);
    spy.mockRestore();
  });
});
