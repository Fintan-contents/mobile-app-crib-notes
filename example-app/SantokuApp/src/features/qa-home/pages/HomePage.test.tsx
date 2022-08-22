import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {HomePage} from './HomePage';

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <TermsAgreementOverlay.Component />
      <Snackbar.Component />
    </SafeAreaProvider>
  );
};

describe('Home', () => {
  beforeEach(() => {
    render(<HomePage navigateToQuestionDetail={() => {}} navigateToQuestionAndEventPost={() => {}} />, {
      wrapper: Wrapper,
    });
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(screen.queryByTestId('HomePage')).toHaveTextContent('開発中');
    expect(screen).toMatchSnapshot();
  });
});
