import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {WithAccountContext} from 'context/WithAccountContext';
import {AppConfig, BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {TermsAgreementOverlay} from './TermsAgreementOverlay';

const Wrapper: React.FC = ({children}) => {
  const accountData = {account: {accountId: '123456789', deviceTokens: []}};
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <WithSnackbar>
        <QueryClientProvider client={queryClient}>
          <WithAccountContext accountData={accountData}>{children}</WithAccountContext>
        </QueryClientProvider>
      </WithSnackbar>
    </SafeAreaProvider>
  );
};

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('TermsOfServiceAgreement', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    // importでLoginScreenを読み込むと、メッセージのロードが完了する前にメッセージを読み込んでしまうため、requireで取得する
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    render(
      <TermsAgreementOverlay
        visible
        close={() => {}}
        termsOfService={{version: '1.0.0', url: AppConfig.termsUrl}}
        contentViewTestID="TermsOfServiceAgreement"
      />,
      {
        wrapper: Wrapper,
      },
    );
    expect(screen.queryByTestId('TermsOfServiceAgreement')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
