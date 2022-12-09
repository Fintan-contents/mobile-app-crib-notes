import {ColorProps} from '@shopify/restyle';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {ThumbUpIllustration} from 'bases/ui/illustration/ThumbUpIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React from 'react';

type CommentLikeButtonWithCountProps = {
  onPress: () => void;
  count: number;
} & ColorProps<RestyleTheme>;
export const CommentLikeButtonWithCount: React.FC<CommentLikeButtonWithCountProps> = ({onPress, count, color}) => {
  return (
    <StyledRow space="p8" alignItems="flex-end">
      <StyledTouchableOpacity onPress={onPress}>
        <ThumbUpIllustration size="p24" color={color} />
      </StyledTouchableOpacity>
      <Text variant="font14Regular" lineHeight={20} letterSpacing={0.25}>
        {count}
      </Text>
    </StyledRow>
  );
};
