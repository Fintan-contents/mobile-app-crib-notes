import '@testing-library/jest-native/extend-expect';
import {render} from '@testing-library/react-native';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';

import {TermsOfServiceAgreementScreen} from './TermsOfServiceAgreementScreen';

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('TermsOfServiceAgreement', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    const app = render(<TermsOfServiceAgreementScreen.component />);
    expect(app.queryByTestId('TermsOfServiceAgreementScreen')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });
});
