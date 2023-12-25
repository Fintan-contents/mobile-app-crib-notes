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

import {BoxProps, createBox} from '@shopify/restyle';
import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {RestyleTheme} from '../theme/restyleTheme';

/*
  eslint-disable-next-line @typescript-eslint/no-explicit-any --
  createBoxでは、FLatListPropsのジェネリクスの型定義ができない
  https://github.com/Shopify/restyle/issues/166
 */
export const BaseFlatList = createBox<RestyleTheme, FlatListProps<any>>(FlatList);

type StyledFlatListProps<T> = BoxProps<RestyleTheme> & FlatListProps<T>;
const StyledFlatListComponent = <T,>(
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
