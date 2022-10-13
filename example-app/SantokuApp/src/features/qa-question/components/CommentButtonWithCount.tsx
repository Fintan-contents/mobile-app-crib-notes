import {ColorProps} from '@shopify/restyle';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {ChatBubbleOutlineIllustration} from 'bases/ui/illustration/ChatBubbleOutlineIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React from 'react';

type CommentButtonWithCountProps = {
  onPress: () => void;
  count: number;
} & ColorProps<RestyleTheme>;
export const CommentButtonWithCount: React.FC<CommentButtonWithCountProps> = ({onPress, count, color}) => {
  return (
    <StyledRow space="p8" alignItems="center">
      <StyledTouchableOpacity onPress={onPress}>
        <ChatBubbleOutlineIllustration color={color} />
      </StyledTouchableOpacity>
      <Text fontSize={14} lineHeight={20} letterSpacing={0.25}>
        {count}
      </Text>
    </StyledRow>
  );
};
