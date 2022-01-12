import {renderHook, WrapperComponent} from '@testing-library/react-hooks';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {AppTheme, darkModeAppTheme, lightModeAppTheme} from './AppTheme';
import {AppThemeContextProvider, useAppTheme, WithAppTheme} from './AppThemeContext';

const wrapper: WrapperComponent<React.ProviderProps<AppTheme>> = ({children, value}) => {
  return <AppThemeContextProvider value={value}>{children}</AppThemeContextProvider>;
};

describe('WithAppTheme', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('WithAppThemeを子要素を含めて正常にrenderできること', () => {
    const appThemeProvider = render(
      <WithAppTheme>
        <ChildComponent />
      </WithAppTheme>,
    );
    expect(appThemeProvider.queryByTestId('test')).not.toBeNull();
    expect(appThemeProvider).toMatchSnapshot();
  });
});

describe('useAppTheme', () => {
  it('AppThemeContextのテーマがlight用の場合にlight用のAppThemeが取得できること', () => {
    const {result} = renderHook(() => useAppTheme(), {wrapper, initialProps: {value: lightModeAppTheme}});
    const appTheme = result.current;
    expect(appTheme).toEqual(lightModeAppTheme);
  });

  it('AppThemeContextのテーマがdark用の場合にdark用のAppThemeが取得できること', () => {
    const {result} = renderHook(() => useAppTheme(), {wrapper, initialProps: {value: darkModeAppTheme}});
    const appTheme = result.current;
    expect(appTheme).toEqual(darkModeAppTheme);
  });
});
