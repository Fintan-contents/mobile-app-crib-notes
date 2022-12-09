import {Box, Text} from 'bases/ui/common';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import React from 'react';

type LikeWithCountProps = {
  count: number;
};
export const LikeWithCount: React.FC<LikeWithCountProps> = ({count}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      <ThumbUpIllustration color="grey1" size="p24" />
      <Box px="p4" />
      <Text variant="font14Regular" lineHeight={20} letterSpacing={0.25}>
        {count}
      </Text>
    </Box>
  );
};
