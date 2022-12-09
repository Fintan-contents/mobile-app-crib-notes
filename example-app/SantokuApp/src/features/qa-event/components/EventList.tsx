import {useTheme} from '@shopify/restyle';
import {m} from 'bases/message/Message';
import {StyledScrollView, Text, Box, StyledTouchableOpacity} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {Event} from 'features/backend/apis/model';
import React from 'react';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {EventListCard} from './EventListCard';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');
export type EventListProps = {
  data?: Event[];
};

export const EventList: React.FC<EventListProps> = ({data}) => {
  const theme = useTheme<RestyleTheme>();
  const {width: windowWidth} = useSafeAreaFrame();
  return (
    <StyledScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      {data?.map(item => (
        <StyledRow key={item.eventId}>
          <StyledSpace width="p24" />
          <EventListCard event={item} />
          <StyledSpace width="p24" />
        </StyledRow>
      ))}
      <StyledSpace width="p24" />
      <Box width={windowWidth - theme.spacing.p24 * 2} justifyContent="center" alignItems="center">
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
