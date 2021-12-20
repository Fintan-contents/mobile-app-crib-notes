import React, {useCallback, useRef, useState} from 'react';
import {Animated, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';

import {FullWindowOverlay} from './FullWindowOverlay';

import CompositeAnimation = Animated.CompositeAnimation;

export type SnackbarShowProps = {
  /**
   * Displayed message.
   */
  message: string;
  /**
   * Style of message.
   */
  messageTextStyle?: StyleProp<TextStyle>;
  /**
   * Style to adjust the look of the snackbar.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Adjust the position of the snackbar style.
   */
  positionStyle?: StyleProp<ViewStyle>;
  /**
   * Button text.
   * Placed to the right of the message.
   */
  actionText?: string;
  /**
   * Function called when the user taps the button.
   */
  actionHandler?: () => void;
  /**
   * Style of Button text.
   */
  actionTextStyle?: StyleProp<TextStyle>;
  /**
   * Time from when the snackbar appears to when it starts to fade-out.
   */
  autoHideDuration?: number;
  /**
   * Snackbar fade-in time.
   */
  fadeInDuration?: number;
  /**
   * Snackbar fade-out time.
   */
  fadeOutDuration?: number;
  /**
   * Fade-out time to close the previously displayed snack bar when displaying a new one.
   * This is applied when you try to display another snackbar while a snackbar is being displayed.
   */
  forceFadeOutDuration?: number;
};

export type SnackbarHideProps = {
  /**
   * Specify when to hide the snackbar.
   */
  hide?: true;
  /**
   * Fade-out time when hide is specified.
   */
  hideFadeOutDuration?: number;
};

export type SnackbarProps = SnackbarShowProps & SnackbarHideProps;

export const Snackbar: React.FC<SnackbarProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeInAnimationRef = useRef<CompositeAnimation>();
  const fadeOutAnimationRef = useRef<CompositeAnimation>();
  const barrierFadeOutAnimationRef = useRef<CompositeAnimation>();
  const [visibleSnackbarProps, setVisibleSnackbarProps] = useState<SnackbarShowProps>();

  const animationStart = useCallback(
    (
      animationRef: React.MutableRefObject<CompositeAnimation | undefined>,
      config: Animated.TimingAnimationConfig,
      callback?: Animated.EndCallback,
    ) => {
      const animation = Animated.timing(fadeAnim, config);
      animationRef.current = animation;
      animation.start(result => {
        animationRef.current = undefined;
        if (callback) {
          callback(result);
        }
      });
    },
    [fadeAnim],
  );

  const show = useCallback(() => {
    setVisibleSnackbarProps(props);

    const fadeInAnimationConfig = {
      toValue: 1,
      duration: props.fadeInDuration,
      useNativeDriver: true,
    };
    animationStart(fadeInAnimationRef, fadeInAnimationConfig, ({finished}) => {
      if (finished) {
        const fadeOutAnimationConfig = {
          toValue: 0,
          delay: props.autoHideDuration,
          duration: props.fadeOutDuration,
          useNativeDriver: true,
        };
        animationStart(fadeOutAnimationRef, fadeOutAnimationConfig, () => {
          if (!barrierFadeOutAnimationRef.current) {
            setVisibleSnackbarProps(undefined);
          }
        });
      } else {
        if (!barrierFadeOutAnimationRef.current) {
          setVisibleSnackbarProps(undefined);
        }
      }
    });
  }, [props, animationStart]);

  const forceFadeout = useCallback(
    (fadeOutDuration?: number, callback?: () => void) => {
      const barrierFadeOutAnimationConfig = {
        toValue: 0,
        duration: fadeOutDuration,
        useNativeDriver: true,
      };

      barrierFadeOutAnimationRef.current?.stop();

      animationStart(barrierFadeOutAnimationRef, barrierFadeOutAnimationConfig, ({finished}) => {
        if (finished) {
          setVisibleSnackbarProps(undefined);
          callback?.();
        }
      });
      fadeInAnimationRef.current?.stop();
      fadeOutAnimationRef.current?.stop();
    },
    [animationStart],
  );

  React.useEffect(() => {
    if (props.hide) {
      forceFadeout(props.hideFadeOutDuration);
      return;
    }
    if (!props.message) {
      return;
    }
    if (barrierFadeOutAnimationRef.current) {
      forceFadeout(props.forceFadeOutDuration, show);
      return;
    }
    if (fadeInAnimationRef.current || fadeOutAnimationRef.current) {
      forceFadeout(props.forceFadeOutDuration, show);
      return;
    }
    show();
  }, [props, show, forceFadeout]);

  const snackbarStyle = StyleSheet.flatten([styles.snackbar, props.style]);

  const animatedViewStyle = StyleSheet.flatten<ViewStyle>([styles.animatedContainer, props.positionStyle]);
  if (animatedViewStyle?.top === undefined && animatedViewStyle.bottom === undefined) {
    animatedViewStyle.bottom = 20;
  }

  const messageTextStyle = StyleSheet.flatten([styles.messageText, props.messageTextStyle]);
  const actionTextStyle = StyleSheet.flatten([styles.actionText, props.actionTextStyle]);

  return (
    <>
      {props.children}
      {visibleSnackbarProps && (
        <FullWindowOverlay>
          <Animated.View
            style={StyleSheet.flatten([{opacity: fadeAnim}, animatedViewStyle])}
            testID="snackbarAnimatedView">
            <View style={snackbarStyle} testID="snackbarStyleView">
              <View style={styles.messageContainer}>
                <Text style={messageTextStyle}>{visibleSnackbarProps.message}</Text>
              </View>
              {visibleSnackbarProps.actionText && visibleSnackbarProps.actionHandler && (
                <View style={styles.actionContainer}>
                  <TouchableOpacity onPress={visibleSnackbarProps.actionHandler}>
                    <Text style={actionTextStyle}>{visibleSnackbarProps.actionText}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </Animated.View>
        </FullWindowOverlay>
      )}
    </>
  );
};

Snackbar.defaultProps = {
  autoHideDuration: 4000,
  fadeInDuration: 1000,
  fadeOutDuration: 1000,
  forceFadeOutDuration: 300,
  hideFadeOutDuration: 300,
};

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    position: 'absolute',
    minHeight: 48,
    paddingHorizontal: 10,
    width: '100%',
  },
  snackbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#393939',
  },
  messageContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 10,
  },
  actionContainer: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    paddingLeft: 10,
    paddingRight: 20,
  },
  messageText: {
    color: 'white',
  },
  actionText: {
    color: '#85A3F1',
  },
});
