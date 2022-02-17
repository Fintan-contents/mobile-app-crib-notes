import {waitFor} from '@testing-library/react-native';

import {hideSplashScreen} from './splashScreen';

describe('hideSplashScreen', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // rejectされたときにテストを失敗させたいが、明示的にタイマーを進めてテストしたいので、awaitやexpect().resolvesは使えない。
  // 代替手段として、catch内でdone.failを呼び出すことでテストを失敗させる。
  // eslint-disable-next-line jest/no-done-callback
  it('200ms経ってからスプラッシュスクリーンが閉じられること', async done => {
    hideSplashScreen().catch(() => {
      done.fail(`hideSplashScreen have been rejected, but it shouldn't.`);
    });
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();
    // 200ms経過してから、スプラッシュスクリーンを閉じる
    jest.advanceTimersByTime(200);
    await waitFor(() => {
      expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();
    });
    done();
  });
});
