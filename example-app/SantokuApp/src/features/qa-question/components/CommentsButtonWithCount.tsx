import {ColorProps} from '@shopify/restyle';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {ChatBubbleOutlineIllustration} from 'bases/ui/illustration/ChatBubbleOutlineIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React from 'react';

type CommentsButtonWithCountProps = {
  onPress: () => void;
  count: number;
} & ColorProps<RestyleTheme>;
export const CommentsButtonWithCount: React.FC<CommentsButtonWithCountProps> = ({onPress, count, color}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      <StyledTouchableOpacity onPress={onPress}>
        <ChatBubbleOutlineIllustration color={color} />
      </StyledTouchableOpacity>
      <Box px="p4" />
      <Text fontSize={14} lineHeight={20} letterSpacing={0.25}>
        {count}
      </Text>
    </Box>
  );
};
