import {ColorProps} from '@shopify/restyle';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React from 'react';

type CommentsLikeButtonWithCountProps = {
  onPress: () => void;
  count: number;
} & ColorProps<RestyleTheme>;
export const CommentsLikeButtonWithCount: React.FC<CommentsLikeButtonWithCountProps> = ({onPress, count, color}) => {
  return (
    <Box flexDirection="row" alignItems="flex-end">
      <StyledTouchableOpacity onPress={onPress}>
        <ThumbUpIllustration size="p24" color={color} />
      </StyledTouchableOpacity>
      <Box px="p4" />
      <Text variant="font14Regular" lineHeight={20} letterSpacing={0.25}>
        {count}
      </Text>
    </Box>
  );
};
