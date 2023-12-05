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

import {waitFor} from '@testing-library/react-native';

import {hideSplashScreen} from './hideSplashScreen';

describe('hideSplashScreen', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('200ms経ってからスプラッシュスクリーンが閉じられること', async () => {
    hideSplashScreen().catch(() => {
      // エラーになる想定はないので、テストを失敗させる。
      throw new Error(`hideSplashScreen have been rejected, but it shouldn't.`);
    });
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();
    // 200ms経過してから、スプラッシュスクリーンを閉じる
    jest.advanceTimersByTime(200);
    await waitFor(() => {
      expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();
    });
  });
});
