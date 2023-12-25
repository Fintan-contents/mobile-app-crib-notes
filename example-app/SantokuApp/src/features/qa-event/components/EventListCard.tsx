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
import {StyledImage} from 'bases/ui/common/StyledImage';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {Event} from 'features/backend/apis/model';
import React, {FC} from 'react';

import {LikeWithCount} from './LikeWithCount';

export type EventListCardProps = {event: Event; containerWidth: number};

export const EventListCard: FC<EventListCardProps> = ({event: {title, likes, profile}, containerWidth}) => {
  return (
    <Box
      backgroundColor="white"
      width={containerWidth}
      px="p24"
      py="p16"
      my="p2"
      justifyContent="space-between"
      borderRadius="p8"
      shadowColor="black"
      shadowOffset={{width: 0, height: 2}}
      shadowRadius={0}
      shadowOpacity={0.1}
      elevation={2}>
      <Text
        variant="font22Bold"
        lineHeight={34}
        letterSpacing={0.18}
        textDecorationLine="underline"
        numberOfLines={3}
        ellipsizeMode="tail"
        color="black2">
        {title}
      </Text>
      <StyledRow justifyContent="space-between" alignItems="center" marginTop="p16">
        <LikeWithCount count={likes} />
        <StyledSpace width="p32" />
        <Box flex={1} alignItems="flex-end">
          <Text variant="font18SemiBold" lineHeight={22} letterSpacing={0.15} color="black2">
            {profile?.nickname}
          </Text>
          <Box flexDirection="row" alignItems="center" justifyContent="space-between">
            {profile && (
              <Text variant="font14Regular" lineHeight={20} letterSpacing={0.25}>
                {formatLargeNumber(profile.points, 999)}/{formatLargeNumber(profile.totalPoints, 999)}
              </Text>
            )}
          </Box>
        </Box>
        <StyledSpace width="p16" />
        {profile?.avatarImageUrl ? (
          <StyledImage source={{uri: profile.avatarImageUrl}} width={40} height={40} borderRadius="p20" />
        ) : (
          <PersonIllustration size="p40" />
        )}
      </StyledRow>
    </Box>
  );
};
