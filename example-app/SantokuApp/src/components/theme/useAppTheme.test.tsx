import {renderHook, WrapperComponent} from '@testing-library/react-hooks';
import React from 'react';

import {AppTheme, darkModeAppTheme, lightModeAppTheme} from './AppTheme';
import {AppThemeContext} from './AppThemeContext';
import {useAppTheme} from './useAppTheme';

const wrapper: WrapperComponent<React.ProviderProps<AppTheme>> = ({children, value}) => {
  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
};

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
