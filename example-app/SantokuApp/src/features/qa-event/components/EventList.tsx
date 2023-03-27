import {useTheme} from '@shopify/restyle';
import {m} from 'bases/message/Message';
import {Box, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {Event} from 'features/backend/apis/model';
import React, {useMemo} from 'react';

import {EventListCard} from './EventListCard';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');
export type EventListProps = {
  data?: Event[];
  containerWidth: number;
};

export const EventList: React.FC<EventListProps> = ({data, containerWidth}) => {
  const theme = useTheme<RestyleTheme>();
  const eventListCardWidth = useMemo(() => containerWidth - theme.spacing.p24 * 2, [containerWidth, theme.spacing.p24]);
  return (
    <StyledScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {data?.map(item => (
        <StyledRow key={item.eventId}>
          <StyledSpace width="p24" />
          <EventListCard event={item} containerWidth={eventListCardWidth} />
          <StyledSpace width="p24" />
        </StyledRow>
      ))}
      <StyledSpace width="p24" />
      <Box width={eventListCardWidth} justifyContent="center" alignItems="center">
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <Text variant="font14Bold" lineHeight={20} letterSpacing={0.25} color="blue">
            {m('もっと見る')}
          </Text>
        </StyledTouchableOpacity>
      </Box>
      <StyledSpace width="p24" />
    </StyledScrollView>
  );
};
