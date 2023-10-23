import '@testing-library/jest-native/extend-expect';
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
import {QueryClient, QueryClientProvider} from 'react-query';

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
