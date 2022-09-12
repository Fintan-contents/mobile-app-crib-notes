import {ColorProps} from '@shopify/restyle';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React from 'react';

type QuestionAndAnswerLikeButtonWithCountProps = {
  onPress: () => void;
  count: number;
} & ColorProps<RestyleTheme>;
export const QuestionAndAnswerLikeButtonWithCount: React.FC<QuestionAndAnswerLikeButtonWithCountProps> = ({
  onPress,
  count,
  color,
}) => {
  return (
    <Box flexDirection="row" alignItems="flex-end">
      <StyledTouchableOpacity flexDirection="row" alignItems="center" onPress={onPress}>
        <ThumbUpIllustration color={color} />
      </StyledTouchableOpacity>
      <Box px="p8" />
      <Text fontSize={40} fontWeight="400" letterSpacing={0.25}>
        {count}
      </Text>
    </Box>
  );
};
