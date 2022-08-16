import {fireEvent, render, screen} from '@testing-library/react-native';
import React from 'react';

import {IconButton} from './IconButton';

describe('IconButton', () => {
  it('IconButtonが正常にrenderできることを確認', () => {
    render(<IconButton name="close" />);
    expect(screen).toMatchSnapshot();
  });

  it('IconButtonのプレス時にコールバックが実行されることを確認', () => {
    const handlePress = jest.fn();
    render(<IconButton testID="IconButton" onPress={handlePress} name="close" />);
    fireEvent.press(screen.getByTestId('IconButtonTouchableOpacity'));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
