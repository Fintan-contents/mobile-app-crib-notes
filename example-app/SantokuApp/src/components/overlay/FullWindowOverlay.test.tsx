import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {FullWindowOverlay} from './FullWindowOverlay';

const ChildComponent = () => {
  return <Text testID="text">test</Text>;
};

describe('FullWindowOverlay', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });

  it('iOS環境で子要素を含めて正常にrenderできることを確認', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'ios',
    }));

    const renderResult = render(
      <FullWindowOverlay>
        <ChildComponent />
      </FullWindowOverlay>,
    );
    expect(renderResult.queryByTestId('FullWindowOverlay')).not.toBeNull();
    expect(renderResult.queryByTestId('text')).not.toBeNull();
    expect(renderResult).toMatchSnapshot();
  });

  it('Android環境で子要素を含めて正常にrenderできることを確認', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'android',
    }));

    const renderResult = render(
      <FullWindowOverlay>
        <ChildComponent />
      </FullWindowOverlay>,
    );
    expect(renderResult.queryByTestId('FullWindowOverlay')).toBeNull();
    expect(renderResult.queryByTestId('text')).not.toBeNull();
    expect(renderResult).toMatchSnapshot();
  });
});
