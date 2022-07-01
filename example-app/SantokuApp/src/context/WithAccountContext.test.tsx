import {render, renderHook, screen} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {AccountData} from '../framework/initialize/helpers';
import {WithAccountContext} from './WithAccountContext';
import {useAccountContext} from './useAccountContext';

const wrapper = (value: AccountData) => {
  return ({children}: {children: React.ReactNode}) => {
    return <WithAccountContext accountData={value}>{children}</WithAccountContext>;
  };
};

describe('WithAccountContext', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('WithAccountContextを子要素を含めて正常にrenderできること', () => {
    const accountData = {account: {accountId: '123456789', deviceTokens: []}};
    render(
      <WithAccountContext accountData={accountData}>
        <ChildComponent />
      </WithAccountContext>,
    );

    expect(screen.queryByTestId('test')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });

  it('初期データにAccountが存在している場合は、AccountContextのisLoggedInがtrueで取得できること', () => {
    const {result} = renderHook(() => useAccountContext(), {
      wrapper: wrapper({account: {accountId: '123456789', deviceTokens: []}}),
    });
    const accountContext = result.current;
    expect(accountContext).toEqual({account: {accountId: '123456789', deviceTokens: []}, isLoggedIn: true});
  });

  it('初期データにAccountが存在しない場合は、AccountContextのisLoggedInがfalseで取得できること', () => {
    const {result} = renderHook(() => useAccountContext(), {
      wrapper: wrapper({}),
    });
    const accountContext = result.current;
    expect(accountContext).toEqual({isLoggedIn: false});
  });
});
