import '@testing-library/jest-native/extend-expect';
import {render, RenderAPI} from '@testing-library/react-native';
import React from 'react';

import {HomeScreen} from './HomeScreen';

describe('Home', () => {
  let app: RenderAPI;

  beforeEach(() => {
    app = render(<HomeScreen.component />);
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(app.queryByTestId('HomeScreen')).toHaveTextContent('開発中');
    expect(app).toMatchSnapshot();
  });
});
