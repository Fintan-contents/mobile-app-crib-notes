import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {act, create} from 'react-test-renderer';

import {App} from './App';

jest.useFakeTimers();
it('renders correctly', async () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    create(<App />);
  });
});
