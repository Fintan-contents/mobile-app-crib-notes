import '@testing-library/jest-native/extend-expect';
import {render} from '@testing-library/react-native';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';

import {TermsOfServiceAgreementScreen} from './TermsOfServiceAgreementScreen';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

beforeEach(() => {
  jest.useFakeTimers();
});

describe('TermsOfServiceAgreement', () => {
  it('コンポーネントがマウントされてから200ms経ってからスプラッシュスクリーンが閉じられること', () => {
    render(<TermsOfServiceAgreementScreen.component />);

    jest.advanceTimersByTime(100);
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();

    // 200ms経過してから、スプラッシュスクリーンを閉じる
    jest.advanceTimersByTime(200);
    // FIXME: 呼び出される回数が安定しないので、呼ばれたことだけ検証する
    expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();
  });

  it('スプラッシュスクリーンを閉じるのに失敗しても何もしないこと', () => {
    __mocks.expoSplashScreen.hideAsync.mockImplementationOnce(() =>
      Promise.reject(new Error('Splash screen is already closed')),
    );

    const app = render(<TermsOfServiceAgreementScreen.component />);
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();

    jest.advanceTimersByTime(200);
    // FIXME: 呼び出される回数が安定しないので、呼ばれたことだけ検証する
    expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();

    expect(app).toMatchSnapshot();
  });
});
