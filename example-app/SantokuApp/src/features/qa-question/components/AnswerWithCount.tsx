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
        {count}
      </Text>
    </Box>
  );
};
