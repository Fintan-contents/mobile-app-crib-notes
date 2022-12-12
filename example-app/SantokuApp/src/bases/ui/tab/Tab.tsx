import React from 'react';

import {StyledTouchableOpacity, Text} from '../common';

export type TabProps = {
  isActive?: boolean;
  text: string;
  onPress?: () => void;
  children?: React.ReactElement;
};

export const Tab = ({isActive, text, onPress}: TabProps) => (
  <StyledTouchableOpacity
    key={text}
    flex={1}
    justifyContent="center"
    alignItems="center"
    padding="p8"
    onPress={onPress}
    borderBottomColor={isActive ? 'orange1' : 'divider'}
    borderBottomWidth={isActive ? 2 : 1}
    disabled={isActive}>
    <Text fontSize={16} lineHeight={24} fontWeight="700" color={isActive ? 'black' : 'grey1'}>
      {text}
    </Text>
  </StyledTouchableOpacity>
);
