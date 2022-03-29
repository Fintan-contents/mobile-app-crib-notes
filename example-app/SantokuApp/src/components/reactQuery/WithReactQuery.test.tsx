import {render} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import React from 'react';
import {Text} from 'react-native';

import {WithReactQuery} from './WithReactQuery';

describe('WithReactQuery', () => {
  test('子要素を正常にrenderできること', () => {
    const children = <Text testID="test">test</Text>;
    const result = render(<WithReactQuery>{children}</WithReactQuery>, {wrapper: WithSnackbar});
    expect(result.getByTestId('test')).not.toBeNull();
    expect(result).toMatchSnapshot();
  });
});
