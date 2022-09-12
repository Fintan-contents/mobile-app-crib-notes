import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {VisibilityIllustration} from 'bases/ui/illustration/VisibilityIllustration';
import React from 'react';

type ViewsButtonWithCountProps = {
  onPress: () => void;
  count: number;
};
export const ViewsButtonWithCount: React.FC<ViewsButtonWithCountProps> = ({onPress, count}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      <StyledTouchableOpacity onPress={onPress}>
        <VisibilityIllustration />
      </StyledTouchableOpacity>
      <Box px="p4" />
      <Text fontSize={14} lineHeight={20} letterSpacing={0.25}>
        {count}
      </Text>
    </Box>
  );
};
