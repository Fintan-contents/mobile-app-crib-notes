/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleProp, StyleSheet, ViewStyle} from 'react-native';

import EndCallback = Animated.EndCallback;

export type OverlayProps = {
  visible: boolean;
  onHideEnd?: () => void;
  fadeDuration?: number;
  style?: StyleProp<ViewStyle>;
};

export const Overlay: React.FC<React.PropsWithChildren<OverlayProps>> = ({
  visible,
  onHideEnd,
  fadeDuration = 200,
  style,
  ...props
}) => {
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
