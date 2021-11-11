import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {WithAppTheme} from './AppThemeContext';

describe('WithAppTheme', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('WithAppThemeを子要素を含めて正常にrenderできること', () => {
    const appThemeProvider = render(
      <WithAppTheme>
        <ChildComponent />
      </WithAppTheme>,
    );
    expect(appThemeProvider.queryByTestId('test')).not.toBeNull();
    expect(appThemeProvider).toMatchSnapshot();
  });
});
