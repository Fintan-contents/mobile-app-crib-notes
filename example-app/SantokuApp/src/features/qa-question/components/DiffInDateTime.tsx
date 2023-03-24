import {formatDiffInDateTime} from 'bases/date/formatDiffInDateTime';
import {m} from 'bases/message/Message';
import {Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {ScheduleIllustration} from 'bases/ui/illustration/ScheduleIllustration';
import React, {useMemo} from 'react';

type DiffInDateTimeProps = {
  datetime: string;
};
export const DiffInDateTime: React.FC<DiffInDateTimeProps> = ({datetime}) => {
  const formattedDateOrHour = useMemo(() => {
    const now = new Date();
    const targetDatetime = new Date(datetime);
    return formatDiffInDateTime(now, targetDatetime, {
      daysSuffix: m('日前'),
      hoursSuffix: m('時間前'),
      minutesSuffix: m('分前'),
      yearsSuffix: m('年前'),
    });
  }, [datetime]);
  return (
    <StyledRow space="p8" alignItems="center">
      <ScheduleIllustration />
      <Text variant="font14SemiBold" lineHeight={20} color="grey1" letterSpacing={0.25}>
        {formattedDateOrHour}
      </Text>
    </StyledRow>
  );
};
