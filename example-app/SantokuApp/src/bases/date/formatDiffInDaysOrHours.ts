import {diffInDays} from './diffInDays';
import {diffInHours} from './diffInHours';

type Options = {
  daysSuffix?: string;
  hoursSuffix?: string;
};
export const formatDiffInDaysOrHours = (dateLeft: Date, dateRight: Date, options?: Options) => {
  const diffDays = diffInDays(dateLeft, dateRight);
  if (diffDays < 1) {
    const diffHours = diffInHours(dateLeft, dateRight);
    return `${diffHours}${options?.hoursSuffix ?? ''}`;
  }
  return `${diffDays}${options?.daysSuffix ?? ''}`;
};
