import beginnerMarkImageSource from 'assets/images/beginner-mark.png';
import React from 'react';

import {StyledImage} from '../common/StyledImage';

export type BeginnerMarkIllustrationProps = Omit<React.ComponentProps<typeof StyledImage>, 'source'>;

export const BeginnerMarkIllustration = ({width = 19, height = 19, ...rest}: BeginnerMarkIllustrationProps) => {
  return <StyledImage source={beginnerMarkImageSource} width={width} height={height} {...rest} />;
};
