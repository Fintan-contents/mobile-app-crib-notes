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

import {diffInDays} from './diffInDays';
import {diffInHours} from './diffInHours';
import {diffInMinutes} from './diffInMinutes';
import {diffInYears} from './diffInYears';

type Options = {
  daysSuffix?: string;
  hoursSuffix?: string;
  minutesSuffix?: string;
  yearsSuffix?: string;
};
export function formatDiffInDateTime(dateLeft: Date, dateRight: Date, options?: Options) {
  const diffYears = diffInYears(dateLeft, dateRight);
  if (diffYears > 0) {
    return `${diffYears}${options?.yearsSuffix ?? ''}`;
  }
  const diffDays = diffInDays(dateLeft, dateRight);
  if (diffDays > 0) {
    return `${diffDays}${options?.daysSuffix ?? ''}`;
  }
  const diffHours = diffInHours(dateLeft, dateRight);
  if (diffHours > 0) {
    return `${diffHours}${options?.hoursSuffix ?? ''}`;
  }

  const diffMinutes = diffInMinutes(dateLeft, dateRight);
  return `${diffMinutes}${options?.minutesSuffix ?? ''}`;
}
