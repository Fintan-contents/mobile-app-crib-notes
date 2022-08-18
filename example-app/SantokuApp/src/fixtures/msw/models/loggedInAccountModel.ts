import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const loggedInAccountModel = {
  loggedInAccount: {
    accountId: primaryKey(generateId),
  },
};
