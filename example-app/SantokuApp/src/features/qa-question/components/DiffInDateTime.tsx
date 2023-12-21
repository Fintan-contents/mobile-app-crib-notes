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
