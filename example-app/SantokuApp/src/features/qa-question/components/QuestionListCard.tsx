import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledImage} from 'bases/ui/common/StyledImage';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {BeginnerMarkIllustration} from 'bases/ui/illustration/BeginnerMarkIllustration';
import {MoreVertIllustration} from 'bases/ui/illustration/MoreVertIllustration';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Question} from 'features/backend/apis/model';
import React, {FC} from 'react';
import {Pressable} from 'react-native';

import {AnswerWithCount} from './AnswerWithCount';
import {DiffDaysOrHours} from './DiffDaysOrHours';
import {LikeWithCount} from './LikeWithCount';
import {ViewWithCount} from './ViewWithCount';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type QuestionListCardProps = {
  item: {
    question: Question;
    navigateToQuestionDetail: () => void;
  };
};

export const QuestionListCard: FC<QuestionListCardProps> = ({
  item: {
    question: {title, content, likes, views, beginner, datetime, profile},
    navigateToQuestionDetail,
  },
}) => {
  return (
    <Box
      backgroundColor="white"
      px="p24"
      pt="p24"
      pb="p16"
      shadowOffset={{width: 4, height: 4}}
      shadowColor="black"
      shadowOpacity={0.25}
      elevation={1}>
      <StyledRow alignItems="center">
        {profile?.avatarImageUrl ? (
          <StyledImage source={{uri: profile.avatarImageUrl}} width={40} height={40} borderRadius="p20" />
        ) : (
          <PersonIllustration size="p40" />
        )}
        <StyledSpace width="p16" />
        <Box flex={1}>
          <Text variant="font18SemiBold" lineHeight={22} letterSpacing={0.15} color="black2">
            {profile?.nickname}
          </Text>
          <StyledRow alignItems="center" justifyContent="space-between">
            <Text variant="font14Regular" lineHeight={24} letterSpacing={0.25} color="black2">
              {profile?.points}/{profile?.totalPoints}
            </Text>
          </StyledRow>
        </Box>
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <MoreVertIllustration />
        </StyledTouchableOpacity>
      </StyledRow>
      <StyledSpace height="p24" />
      <Pressable onPress={navigateToQuestionDetail}>
        <Text
          variant="font22Bold"
          textDecorationLine="underline"
          lineHeight={34}
          letterSpacing={0.18}
          numberOfLines={3}
          ellipsizeMode="tail">
          {beginner && (
            <>
              <BeginnerMarkIllustration />
              <StyledSpace width="p8" />
            </>
          )}
          {title}
        </Text>
      </Pressable>
      <StyledSpace height="p16" />
      <Text variant="font14Regular" lineHeight={28} letterSpacing={0.25} numberOfLines={2} ellipsizeMode="tail">
        {content}
      </Text>
      <StyledSpace height="p16" />
      <StyledRow space="p16" alignItems="flex-end">
        <DiffDaysOrHours datetime={datetime} />
        <Box flex={1} />
        <ViewWithCount count={views} />
        <LikeWithCount count={likes} />
        <AnswerWithCount count={views} />
      </StyledRow>
    </Box>
  );
};
