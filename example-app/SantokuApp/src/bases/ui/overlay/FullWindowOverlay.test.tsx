import {render, screen} from '@testing-library/react-native';
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

    render(
      <FullWindowOverlay>
        <ChildComponent />
      </FullWindowOverlay>,
    );
    expect(screen.queryByTestId('FullWindowOverlay')).not.toBeNull();
    expect(screen.queryByTestId('text')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });

  it('Android環境で子要素を含めて正常にrenderできることを確認', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: 'android',
    }));

    render(
      <FullWindowOverlay>
        <ChildComponent />
      </FullWindowOverlay>,
    );
    expect(screen.queryByTestId('FullWindowOverlay')).toBeNull();
    expect(screen.queryByTestId('text')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
