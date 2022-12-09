import {Box, Text} from 'bases/ui/common';
import {VisibilityIllustration} from 'bases/ui/illustration/VisibilityIllustration';
import React from 'react';

type ViewWithCountProps = {
  count: number;
};
export const ViewWithCount: React.FC<ViewWithCountProps> = ({count}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      <VisibilityIllustration />
      <Box px="p4" />
      <Text fontSize={14} lineHeight={20} letterSpacing={0.25}>
        {count}
      </Text>
    </Box>
  );
};
