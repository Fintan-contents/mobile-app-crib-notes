import {render, screen} from '@testing-library/react-native';
import {WithAccountContext} from 'context/WithAccountContext';
import {AppConfig, BundledMessagesLoader, loadMessages} from 'framework';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {WithSnackbar} from '../components/overlay';
import {WithTermsAgreementOverlay} from './WithTermsAgreementOverlay';
import {useTermsAgreementOverlay} from './useTermsAgreementOverlay';

jest.useFakeTimers();

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

const ChildComponent: React.FC = () => {
  const termsOverlay = useTermsAgreementOverlay();

  useEffect(() => {
    termsOverlay.show({termsOfService: {version: '1.0.0', url: AppConfig.termsUrl}});
  }, [termsOverlay]);

  return <Text testID="text">test</Text>;
};

describe('WithTermsOfServiceAgreementOverlay', () => {
  it('useTermsAgreementOverlayのshowで、利用規約が正常に表示されることを確認', () => {
    render(
      <WithTermsAgreementOverlay>
        <ChildComponent />
      </WithTermsAgreementOverlay>,
      {wrapper: Wrapper},
    );
    expect(screen.queryByText('利用規約')).not.toBeNull();
  });
});
