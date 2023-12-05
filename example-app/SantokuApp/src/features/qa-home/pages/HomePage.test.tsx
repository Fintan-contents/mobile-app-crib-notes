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

import '@testing-library/jest-native/extend-expect';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {AppThemeProvider} from 'bases/ui/theme/AppThemeProvider';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import {initialData} from 'fixtures/msw/datas';
import {initialDb} from 'fixtures/msw/db';
import {handlers} from 'fixtures/msw/handlers';
import {setLoggedInAccountId} from 'fixtures/msw/handlers/account/setLoggedInAccountId';
import {setupServer} from 'msw/node';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import type {HomePageProps} from './HomePage';

const server = setupServer(...handlers);
beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
  initialDb();
  await initialData();
  setLoggedInAccountId('santoku');
  server.listen();
});
afterAll(() => server.close());

beforeEach(() => {
  jest.useFakeTimers();
});
jest.mock('bases/date/formatDiffInDateTime', () => {
  return {
    formatDiffInDateTime: jest.fn(() => {
      return '1時間前';
    }),
  };
});

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <TermsAgreementOverlay.Component />
        <Snackbar.Component />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
};

describe('Home', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    /*
      eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-var-requires --
      メッセージのロード前にHomePageをimportしてしまうとエラーになるため、メッセージのロード後にrequireします
     */
    const HomePage = require('./HomePage').HomePage as React.FC<React.PropsWithChildren<HomePageProps>>;
    render(
      <HomePage navigateToQuestionDetail={() => {}} navigateToQuestionAndEventPost={() => {}} setHeader={() => {}} />,
      {
        wrapper: Wrapper,
      },
    );
    expect(screen.findByTestId('HomePage')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
