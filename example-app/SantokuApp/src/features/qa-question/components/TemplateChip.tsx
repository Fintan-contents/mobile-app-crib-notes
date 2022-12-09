import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import React from 'react';

type TemplateChipProps = {
  isActive?: boolean;
  text: string;
  onPress: () => void;
};

export const TemplateChip: React.FC<TemplateChipProps> = ({text, isActive, onPress}) => (
  <StyledTouchableOpacity onPress={onPress}>
    <Box px="p12" py="p4" backgroundColor={isActive ? 'grey1' : 'grey2'} borderRadius="p16">
      <Text fontSize={14} lineHeight={20}>
        {text}
      </Text>
    </Box>
  </StyledTouchableOpacity>
);
