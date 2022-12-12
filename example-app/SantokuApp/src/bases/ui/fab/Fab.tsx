import React, {useMemo} from 'react';

import {Box, StyledTouchableOpacity} from '../common';

export type FabProps = {
  size?: 'small' | 'medium';
  color?: 'blue' | 'white';
  onPress?: () => void;
};

export const Fab: React.FC<React.PropsWithChildren<FabProps>> = ({
  size = 'medium',
  color = 'blue',
  onPress,
  children,
}) => {
  const side = useMemo(() => {
    if (size === 'small') {
      return 40;
    } else {
      return 56;
    }
  }, [size]);
  const borderRadius = useMemo(() => {
    if (size === 'small') {
      return 'p20';
    } else {
      return 'p28';
    }
  }, [size]);
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Box
        backgroundColor={color === 'blue' ? 'blue' : 'white'}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        shadowColor="black"
        shadowOffset={{width: 0, height: 4}}
        shadowRadius={4}
        shadowOpacity={0.35}
        elevation={1}
        borderRadius={borderRadius}
        margin="p8"
        width={side}
        height={side}>
        {children}
      </Box>
    </StyledTouchableOpacity>
  );
};
