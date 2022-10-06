import {formatDiffInDaysOrHours} from 'bases/date/formatDiffInDaysOrHours';
import {m} from 'bases/message/Message';
import {Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {ScheduleIllustration} from 'bases/ui/illustration/ScheduleIllustration';
import React, {useMemo} from 'react';

type DiffDaysOrHoursProps = {
  datetime: string;
};
export const DiffDaysOrHours: React.FC<DiffDaysOrHoursProps> = ({datetime}) => {
  const formattedDateOrHour = useMemo(() => {
    const now = new Date();
    const targetDatetime = new Date(datetime);
    return formatDiffInDaysOrHours(now, targetDatetime, {daysSuffix: m('日前'), hoursSuffix: m('時間前')});
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
