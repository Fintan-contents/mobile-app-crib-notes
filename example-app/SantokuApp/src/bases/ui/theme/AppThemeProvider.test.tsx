import {render, renderHook, screen} from '@testing-library/react-native';
import {AppTheme} from 'bases/ui/theme/AppTheme';
import {AppThemeContextProvider, useAppTheme} from 'bases/ui/theme/useAppTheme';
import React from 'react';
import {Text} from 'react-native';

import {AppThemeProvider} from './AppThemeProvider';
import {darkModeAppTheme} from './darkModeAppTheme';
import {lightModeAppTheme} from './lightModeAppTheme';

const wrapper = (value: AppTheme) => {
  return ({children}: {children: React.ReactNode}) => {
    return <AppThemeContextProvider value={value}>{children}</AppThemeContextProvider>;
  };
};

describe('AppThemeProvider', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('AppThemeProviderを子要素を含めて正常にrenderできること', () => {
    render(
      <AppThemeProvider>
        <ChildComponent />
      </AppThemeProvider>,
    );
    expect(screen.queryByTestId('test')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});

describe('useAppTheme', () => {
  it('AppThemeProviderのテーマがlight用の場合にlight用のAppThemeが取得できること', () => {
    const {result} = renderHook(() => useAppTheme(), {wrapper: wrapper(lightModeAppTheme)});
    const appTheme = result.current;
    expect(appTheme).toEqual(lightModeAppTheme);
  });

  it('AppThemeProviderのテーマがdark用の場合にdark用のAppThemeが取得できること', () => {
    const {result} = renderHook(() => useAppTheme(), {wrapper: wrapper(darkModeAppTheme)});
    const appTheme = result.current;
    expect(appTheme).toEqual(darkModeAppTheme);
  });
});
