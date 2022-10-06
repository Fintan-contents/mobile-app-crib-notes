import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {VisibilityIllustration} from 'bases/ui/illustration/VisibilityIllustration';
import React from 'react';

type ViewsButtonWithCountProps = {
  onPress: () => void;
  count: number;
};
export const ViewsButtonWithCount: React.FC<ViewsButtonWithCountProps> = ({onPress, count}) => {
  return (
    <StyledRow space="p8" alignItems="center">
      <StyledTouchableOpacity onPress={onPress}>
        <VisibilityIllustration />
      </StyledTouchableOpacity>
      <Text fontSize={14} lineHeight={20} letterSpacing={0.25}>
        {count}
      </Text>
    </StyledRow>
  );
};
