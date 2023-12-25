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

import {formatLargeNumber} from 'bases/core/utils/formatLargeNumber';
import {Box, Text} from 'bases/ui/common';
import {QuestionAnswerIllustration} from 'bases/ui/illustration/QuestionAnswerIllustration';
import React from 'react';

type AnswerWithCountProps = {
  count: number;
};
export const AnswerWithCount: React.FC<AnswerWithCountProps> = ({count}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      <QuestionAnswerIllustration color="grey1" />
      <Box px="p4" />
      <Text fontSize={14} lineHeight={20} letterSpacing={0.25}>
        {formatLargeNumber(count, 999)}
      </Text>
    </Box>
  );
};
