import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const notificationModel = {
  notification: {notificationId: primaryKey(generateId), title: String, datetime: String, contentUrl: String},
};
