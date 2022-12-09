import React from 'react';

import {StyledTouchableOpacity, Text} from '../common';

export type MarkdownToolbarItemProps = {
  text: string;
  onPress?: () => void;
};

export const MarkdownToolbarItem: React.FC<MarkdownToolbarItemProps> = ({text, onPress}) => (
  <StyledTouchableOpacity width={24} height={24} justifyContent="center" alignItems="center" onPress={onPress}>
    <Text>{text}</Text>
  </StyledTouchableOpacity>
);
