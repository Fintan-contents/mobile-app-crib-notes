/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
