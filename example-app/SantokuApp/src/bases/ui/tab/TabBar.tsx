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

import React from 'react';

import {Tab, TabProps} from './Tab';
import {Box} from '../common';

export type TabBarProps = {
  selectedIndex: number;
  onChange: (index: number) => void;
};

export const TabBar: React.FC<React.PropsWithChildren<TabBarProps>> = ({children: source, selectedIndex, onChange}) => {
  const children = React.Children.toArray(source) as React.ReactElement<TabProps>[];
  return (
    <>
      <Box flexDirection="row">
        {children.map((item, index) => {
          const isActive = item.props.isActive ?? index === selectedIndex;
          return (
            <Tab
              key={index}
              isActive={item.props.isActive ?? isActive}
              text={item.props.text}
              onPress={(item.props.onPress ?? !isActive) ? () => onChange(index) : undefined}
            />
          );
        })}
      </Box>
      {children[selectedIndex].props.children}
    </>
  );
};
