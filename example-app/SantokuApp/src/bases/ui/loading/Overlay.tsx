import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import EndCallback = Animated.EndCallback;

export type OverlayProps = {
  visible: boolean;
  onHideEnd?: () => void;
  fadeDuration?: number;
  style?: StyleProp<ViewStyle>;
};

export const Overlay: React.FC<OverlayProps> = ({visible, onHideEnd, fadeDuration, style, ...props}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [render, setRender] = useState(false);

  const fade = useCallback(
    (toValue: number, callback?: EndCallback) => {
      const animation = Animated.timing(fadeAnim, {
        toValue,
        duration: fadeDuration,
        useNativeDriver: true,
      });
      animation.start(result => {
        callback?.(result);
      });
    },
    [fadeAnim, fadeDuration],
  );

  const show = useCallback(() => {
    fade(1);
    setRender(true);
  }, [fade]);

  const hide = useCallback(() => {
    fade(0, () => {
      setRender(false);
      if (onHideEnd) {
        onHideEnd();
      }
    });
  }, [fade, onHideEnd]);

  useEffect(() => {
    if (visible) {
      if (!render) {
        show();
      }
      return;
    }
    if (render) {
      hide();
    }
  }, [visible, render, show, hide]);

  const overlayStyle = StyleSheet.flatten([{opacity: fadeAnim}, styles.overlay, style]);

  return (
    <>
      {render && (
        <Animated.View style={overlayStyle} testID="overlayAnimatedView">
          {props.children}
        </Animated.View>
      )}
    </>
  );
};

Overlay.defaultProps = {
  fadeDuration: 200,
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
  },
});
