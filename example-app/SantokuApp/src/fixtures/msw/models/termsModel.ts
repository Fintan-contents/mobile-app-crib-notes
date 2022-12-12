import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const termsModel = {
  terms: {
    id: primaryKey(generateId),
    url: String,
    version: String,
  },
};
