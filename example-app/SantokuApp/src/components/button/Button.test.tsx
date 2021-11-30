import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {Button} from './Button';

describe('Button', () => {
  it('Buttonが正常にrenderできることを確認', () => {
    const renderResult = render(<Button title="ボタン" />);
    expect(renderResult.queryByText('ボタン')).not.toBeNull();
    expect(renderResult).toMatchSnapshot();
  });

  it('Buttonのプレス時にコールバックが実行されることを確認', () => {
    const handlePress = jest.fn();
    const renderResult = render(<Button testID="button" onPress={handlePress} />);
    fireEvent.press(renderResult.getByTestId('button'));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });

  it('Buttonのサイズ指定がrenderに反映されることを確認', () => {
    // スナップショットに反映されているか確認
    expect(render(<Button title="ボタン" size="small" />)).toMatchSnapshot('size small');
    expect(render(<Button title="ボタン" size="middle" />)).toMatchSnapshot('size middle');
    expect(render(<Button title="ボタン" size="large" />)).toMatchSnapshot('size large');
    expect(render(<Button title="ボタン" size="full" />)).toMatchSnapshot('size full');
  });

  it('Buttonのprops（buttonStyle / containerStyle）が指定通りrenderに反映されることを確認', () => {
    // スナップショットに反映されているか確認
    expect(
      render(
        <Button
          title="ボタン"
          size="small"
          buttonStyle={{backgroundColor: 'red', width: 150}}
          containerStyle={{width: 200}}
        />,
      ),
    ).toMatchSnapshot();
  });
});
