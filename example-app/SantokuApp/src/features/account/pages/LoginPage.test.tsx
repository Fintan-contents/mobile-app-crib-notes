import {render, screen, waitFor} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {AppThemeProvider} from 'bases/ui/theme/AppThemeProvider';
import {enhanceValidator} from 'bases/validator';
import {useGetAccountsMe, useGetAccountsMeTerms, usePostAccountsMeTerms} from 'features/backend/apis/account/account';
import {useGetTerms} from 'features/backend/apis/terms/terms';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {LoginPageProps} from './LoginPage';

jest.mock('features/backend/apis/account/account');
jest.mock('features/backend/apis/terms/terms');

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

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
  enhanceValidator();
});

describe('LoginScreen', () => {
  it('マウントされたときに正常にレンダリングされること', async () => {
    (useGetAccountsMe as jest.Mock).mockReturnValue({refetch: () => {}});
    (useGetAccountsMeTerms as jest.Mock).mockReturnValue({refetch: () => {}});
    (useGetTerms as jest.Mock).mockReturnValue({refetch: () => {}});
    (usePostAccountsMeTerms as jest.Mock).mockReturnValue({mutateAsync: () => {}});
    // importでLoginScreenを読み込むと、メッセージのロードが完了する前にメッセージを読み込んでしまうため、requireで取得する
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const Page = require('./LoginPage').LoginPage as React.FC<React.PropsWithChildren<LoginPageProps>>;
    render(<Page navigateToCreateAccount={() => {}} />, {
      wrapper: Wrapper,
    });
    await waitFor(() => {
      expect(screen.queryByTestId('Login')).not.toBeNull();
      expect(screen).toMatchSnapshot();
    });
  });
});
