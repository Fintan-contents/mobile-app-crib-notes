import '@testing-library/jest-native/extend-expect';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {App} from './App';

// 実際にnavigateさせるので、React Navigationのモックは解除しておく。
jest.unmock('@react-navigation/native');
beforeEach(() => {
  // 画面遷移時のアニメーションが、コンポーネントのアンマウント後にステートを更新してしまうようで、
  // テストは成功するものの、エラーログが出力されてしまう。
  // タイマーを使わないようにして、アニメーションを動かさないことで回避しているつもり。
  jest.useFakeTimers();
});

describe('App', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    const app = render(<App />);
    expect(app.queryByTestId('TermsOfServiceAgreementScreen')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });

  it('Go to Homeをタップすると、ホーム画面に遷移すること', () => {
    const app = render(<App />);
    fireEvent.press(app.getByTestId('goToHomeButton'));

    expect(app.queryByTestId('HomeScreen')).not.toBeNull();
    // 【動作確認用】 Stackに残っている画面は取得できるので注意。
    expect(app.queryByTestId('TermsOfServiceAgreementScreen')).not.toBeNull();
  });
});
