import homeImageSource from 'assets/images/home.png';
import React from 'react';

import {StyledImage, StyledImageProps} from '../common/StyledImage';

export type HomeIllustrationProps = Omit<StyledImageProps, 'source'>;

export const HomeIllustration = ({width = 22.63, height = 24, ...rest}: HomeIllustrationProps) => {
  return <StyledImage source={homeImageSource} width={width} height={height} {...rest} />;
};
