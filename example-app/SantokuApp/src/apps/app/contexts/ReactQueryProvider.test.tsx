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

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render, screen} from '@testing-library/react-native';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import React from 'react';
import {Text} from 'react-native';

import {ReactQueryProvider} from './ReactQueryProvider';

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Snackbar.Component />
    </>
  );
};

describe('ReactQueryProvider', () => {
  test('子要素を正常にrenderできること', () => {
    const children = <Text testID="test">test</Text>;
    render(<ReactQueryProvider>{children}</ReactQueryProvider>, {wrapper: Wrapper});
    expect(screen.getByTestId('test')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
