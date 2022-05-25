import '@testing-library/jest-native/extend-expect';
import {NavigationContainer} from '@react-navigation/native';
import {render, RenderAPI} from '@testing-library/react-native';
import {WithTermsAgreementOverlay} from 'context/WithTermsAgreementOverlay';
import React from 'react';

import {WithAccountContext} from '../../context/WithAccountContext';
import {AppConfig} from '../../framework';
import {HomeScreen} from './HomeScreen';

const Wrapper: React.FC = ({children}) => {
  const accountData = {
    account: {accountId: '123456789', deviceTokens: []},
    terms: {
      termsOfService: {
        version: '1.0.0',
        url: AppConfig.termsUrl,
        termsAgreementStatus: {hasAgreed: true, agreedVersion: '1.0.0'},
      },
    },
  };
  return (
    <NavigationContainer>
      <WithAccountContext accountData={accountData}>
        <WithTermsAgreementOverlay>{children}</WithTermsAgreementOverlay>
      </WithAccountContext>
    </NavigationContainer>
  );
};

describe('Home', () => {
  let app: RenderAPI;

  beforeEach(() => {
    const Screen = HomeScreen.component as React.FC;
    app = render(<Screen />, {wrapper: Wrapper});
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(app.queryByTestId('HomeScreen')).toHaveTextContent('開発中');
    expect(app).toMatchSnapshot();
  });
});
