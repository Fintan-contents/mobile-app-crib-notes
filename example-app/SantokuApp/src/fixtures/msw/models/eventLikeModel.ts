import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const eventLikeModel = {
  eventLike: {
    eventLikeId: primaryKey(generateId),
    accountId: String,
    eventId: String,
  },
};
