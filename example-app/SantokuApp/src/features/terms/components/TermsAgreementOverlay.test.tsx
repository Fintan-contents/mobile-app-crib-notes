import {render, screen} from '@testing-library/react-native';
import {AppConfig} from 'bases/core/configs/AppConfig';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {TermsAgreementOverlay} from './TermsAgreementOverlay';

jest.useFakeTimers();

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Snackbar.Component />
    </SafeAreaProvider>
  );
};

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

const ChildComponent: React.FC = () => {
  useEffect(() => {
    TermsAgreementOverlay.show({termsOfService: {version: '1.0.0', url: AppConfig.termsUrl}});
  }, []);

  return <Text testID="text">test</Text>;
};

describe('TermsAgreementOverlay', () => {
  it('TermsAgreementOverlayのshowで、利用規約が正常に表示されることを確認', () => {
    render(
      <>
        <ChildComponent />
        <TermsAgreementOverlay.Component />
      </>,
      {wrapper: Wrapper},
    );
    expect(screen.queryByText('利用規約')).not.toBeNull();
  });
});
