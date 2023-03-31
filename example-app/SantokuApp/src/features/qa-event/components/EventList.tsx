import {useTheme} from '@shopify/restyle';
import {m} from 'bases/message/Message';
import {Box, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import {Event} from 'features/backend/apis/model';
import React, {useMemo} from 'react';
import {Platform} from 'react-native';

import {EventListCard} from './EventListCard';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');
export type EventListProps = {
  data?: Event[];
  containerWidth: number;
};

export const EventList: React.FC<EventListProps> = ({data, containerWidth}) => {
  const theme = useTheme<RestyleTheme>();
  const eventListCardWidth = useMemo(() => {
    // カード幅は、画面幅からカードのはみ出し部分とカード間の余白を引いた値である。
    // カードのはみ出し部は8px、カード間の余白は16pxであり、それぞれカードの左右に存在することを考慮すると
    // カード幅の算出式は以下のようになる。
    return containerWidth - (theme.spacing.p8 + theme.spacing.p16) * 2;
  }, [containerWidth, theme.spacing.p16, theme.spacing.p8]);
  return (
    <StyledScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={Platform.select({ios: containerWidth - 32})}
      snapToAlignment={Platform.select({android: 'center'})}
      pagingEnabled={Platform.select({android: true})}
      decelerationRate="fast">
      <StyledSpace width="p16" />
      {data?.length ? (
        data?.map(item => (
          <StyledRow key={item.eventId}>
            <StyledSpace width="p8" />
            <EventListCard event={item} containerWidth={eventListCardWidth} />
            <StyledSpace width="p8" />
          </StyledRow>
        ))
      ) : (
        <StyledRow>
          <StyledSpace width="p8" />
          <Box width={eventListCardWidth} py="p24">
            <Text textAlign="center" variant="font14Bold" lineHeight={20} letterSpacing={0.25} color="blue">
              {m('募集中のイベントはありません')}
            </Text>
          </Box>
          <StyledSpace width="p8" />
        </StyledRow>
      )}
      <StyledSpace width="p8" />
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
