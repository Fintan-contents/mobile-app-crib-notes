import {useCallback, useMemo, useRef} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Animated, {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import Text = Animated.Text;

export type WheelPickerItemType = {
  value: string;
  index: number;
  offset: Animated.SharedValue<number>;
  itemHeight: number;
  selectItem: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedText = Animated.createAnimatedComponent(Text);

export const WheelPickerItem: React.FC<WheelPickerItemType> = ({
  value,
  index,
  offset,
  activeColor = 'black',
  inactiveColor = 'grey',
  itemHeight,
  selectItem,
}) => {
  const itemOffset = index * itemHeight;
  const _activeColor = useRef(activeColor);
  const _inactiveColor = useRef(inactiveColor);

  const onPress = useCallback(() => selectItem(index), [index, selectItem]);
  const animatedTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      offset.value,
      [itemOffset - itemHeight, itemOffset, itemOffset + itemHeight],
      [_inactiveColor.current, _activeColor.current, _inactiveColor.current],
    );
    return {color};
  }, [itemHeight]);

  const pressableHeightStyle = useMemo(() => ({height: itemHeight}), [itemHeight]);

  return (
    <AnimatedPressable onPress={onPress} style={StyleSheet.flatten([pressableHeightStyle, styles.pressable])}>
      {/* AnimatedStyleの場合はStyleSheet.flattenだとマージされないため、配列で指定 */}
      <AnimatedText style={[animatedTextStyle, styles.text]}>{value}</AnimatedText>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
