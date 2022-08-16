import React, {useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import gradientBottomImage from './assets/gradientBottom.png';
import gradientTopImage from './assets/gradientTop.png';

export enum FaderPosition {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export type FaderProps = {
  /**
   * Whether the fader is visible (default is true)
   */
  visible?: boolean;
  /**
   * The position of the fader (the image is different), defaults to Fader.position.END
   */
  position?: FaderPosition;
  /**
   * Set to change from the default size (50) of the fade view.
   */
  size?: number;
  /**
   * Change the default tint color of the fade view.
   */
  tintColor?: string;
};

const DEFAULT_FADE_SIZE = 50;

export const Fader: React.FC<FaderProps> = ({
  size = DEFAULT_FADE_SIZE,
  position = FaderPosition.TOP,
  visible = true,
}) => {
  const styles = useMemo(() => {
    switch (position) {
      case FaderPosition.TOP:
        return {
          containerStyle: {...staticStyles.containerTop, height: size},
          imageStyle: {height: size, width: '100%'},
          imageSource: gradientTopImage,
        };
      case FaderPosition.BOTTOM:
        return {
          containerStyle: {
            ...staticStyles.containerBottom,
            height: size,
          },
          imageStyle: {height: size, width: '100%'},
          imageSource: gradientBottomImage,
        };
    }
  }, [size, position]);

  return (
    <View pointerEvents="none" style={styles.containerStyle}>
      {visible && <Image source={styles.imageSource} style={styles.imageStyle} resizeMode="stretch" />}
    </View>
  );
};

const staticStyles = StyleSheet.create({
  containerTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  containerBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
