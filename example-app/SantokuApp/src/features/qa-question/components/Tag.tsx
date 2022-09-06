import {Box, Text} from 'bases/ui/common';
import React from 'react';

type TagProps = {
  isActive?: boolean;
  text: string;
};

export const Tag: React.FC<TagProps> = ({text, isActive}) => (
  <Box
    marginRight="p8"
    paddingHorizontal="p8"
    paddingVertical="p4"
    backgroundColor={isActive ? 'grey1' : 'grey2'}
    borderRadius="p16">
    <Text fontSize={14} lineHeight={20}>
      {text}
    </Text>
  </Box>
);
