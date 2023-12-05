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

import {MarkdownToolbarItem} from './MarkdownToolbarItem';
import {Box} from '../common';
import {Snackbar} from '../snackbar/Snackbar';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

const MarkdownToolbarDivider: React.FC = () => (
  <Box marginLeft="p8" marginRight="p16" width={0.5} backgroundColor="divider" />
);

const Space: React.FC = () => <Box width={8} />;

export const MarkdownToolbar: React.FC = () => (
  <Box backgroundColor="grey3" padding="p16" flexDirection="row">
    <MarkdownToolbarItem text="B" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarItem text="I" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarItem text="U" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarDivider />
    <MarkdownToolbarItem text="tT" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarItem text="/T" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarItem text="''" onPress={showUnderDevelopment} />
    <Space />
    <MarkdownToolbarDivider />
    <MarkdownToolbarItem text="=" onPress={showUnderDevelopment} />
  </Box>
);
