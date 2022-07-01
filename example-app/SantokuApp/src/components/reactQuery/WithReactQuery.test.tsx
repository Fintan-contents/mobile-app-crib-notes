import {render, screen} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {WithAccountContext} from 'context/WithAccountContext';
import React from 'react';
import {Text} from 'react-native';

import {WithReactQuery} from './WithReactQuery';

const Wrapper: React.FC = ({children}) => {
  const accountData = {account: {accountId: '123456789', deviceTokens: []}};
  return (
    <WithSnackbar>
      <WithAccountContext accountData={accountData}>{children}</WithAccountContext>;
    </WithSnackbar>
  );
};

describe('WithReactQuery', () => {
  test('子要素を正常にrenderできること', () => {
    const children = <Text testID="test">test</Text>;
    render(<WithReactQuery>{children}</WithReactQuery>, {wrapper: Wrapper});
    expect(screen.getByTestId('test')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
