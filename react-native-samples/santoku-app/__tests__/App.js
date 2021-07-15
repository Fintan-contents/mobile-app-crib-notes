import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', async () => {
  let app;
  await renderer.act(async () => {
    app = renderer.create(<App />);
  });
  expect(app.toJSON().children.length).toBe(1);
});
