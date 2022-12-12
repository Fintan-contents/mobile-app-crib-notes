import {useTheme} from '@shopify/restyle';
import {Box, Text} from 'bases/ui/common';
import {StyledImage} from 'bases/ui/common/StyledImage';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {Event} from 'features/backend/apis/model';
import React, {FC} from 'react';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {LikeWithCount} from './LikeWithCount';

export type EventListCardProps = {event: Event};

export const EventListCard: FC<EventListCardProps> = ({event: {title, likes, profile}}) => {
  const {width: windowWidth} = useSafeAreaFrame();
  const theme = useTheme<RestyleTheme>();
  return (
    <Box
      backgroundColor="white"
      width={windowWidth - theme.spacing.p24 * 2}
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
            <Text variant="font14Regular" lineHeight={20} letterSpacing={0.25}>
              {profile?.points}/{profile?.totalPoints}
            </Text>
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
