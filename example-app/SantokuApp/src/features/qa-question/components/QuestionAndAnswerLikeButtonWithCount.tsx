import {ColorProps} from '@shopify/restyle';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
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
    <StyledRow space="p16" alignItems="flex-end">
      <StyledTouchableOpacity flexDirection="row" alignItems="center" onPress={onPress}>
        <ThumbUpIllustration color={color} />
      </StyledTouchableOpacity>
      <Text fontSize={40} fontWeight="400" letterSpacing={0.25}>
        {count}
      </Text>
    </StyledRow>
  );
};
