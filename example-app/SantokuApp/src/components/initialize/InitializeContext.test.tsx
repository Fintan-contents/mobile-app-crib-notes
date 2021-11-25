import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {WithInitializeContext} from './InitializeContext';
import * as Initialize from './initialize';

describe('WithInitializeContext', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('WithInitialContextを子要素を含めて正常にrenderできること', async () => {
    const mockInitialize = jest.spyOn(Initialize, 'initialize').mockResolvedValue({});
    const withInitializeContext = render(
      <WithInitializeContext>
        <ChildComponent />
      </WithInitializeContext>,
    );
    expect(withInitializeContext.queryByTestId('test')).toBeNull();
    await waitFor(() => {
      expect(mockInitialize).toBeCalled();
      expect(withInitializeContext.queryByTestId('test')).not.toBeNull();
      expect(withInitializeContext).toMatchSnapshot();
    });
  });
});
