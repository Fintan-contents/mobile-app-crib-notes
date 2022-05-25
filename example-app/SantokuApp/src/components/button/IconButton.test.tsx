import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {IconButton} from './IconButton';

describe('IconButton', () => {
  it('IconButtonが正常にrenderできることを確認', () => {
    const renderResult = render(<IconButton name="close" />);
    expect(renderResult).toMatchSnapshot();
  });

  it('IconButtonのプレス時にコールバックが実行されることを確認', () => {
    const handlePress = jest.fn();
    const renderResult = render(<IconButton testID="IconButton" onPress={handlePress} name="close" />);
    fireEvent.press(renderResult.getByTestId('IconButtonTouchableOpacity'));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
