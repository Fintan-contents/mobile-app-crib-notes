import {BoxProps, createBox} from '@shopify/restyle';
import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

// createBoxでは、FLatListPropsのジェネリクスの型定義ができない
// https://github.com/Shopify/restyle/issues/166
export const BaseFlatList = createBox<RestyleTheme, FlatListProps<any>>(FlatList);

type StyledFlatListProps<T> = BoxProps<RestyleTheme> & FlatListProps<T>;
const StyledFlatListComponent = <T extends unknown>(
  {children, ...rest}: StyledFlatListProps<T>,
  ref: React.ForwardedRef<FlatList>,
) => (
  <BaseFlatList ref={ref} {...rest}>
    {children}
  </BaseFlatList>
);

export const StyledFlatList = React.forwardRef(StyledFlatListComponent) as <T>(
  props: StyledFlatListProps<T> & {ref?: React.ForwardedRef<FlatList>},
) => ReturnType<typeof StyledFlatListComponent>;
