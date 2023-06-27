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
