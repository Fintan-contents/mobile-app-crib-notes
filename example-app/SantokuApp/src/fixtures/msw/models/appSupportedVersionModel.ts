import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const appSupportedVersionModel = {
  appSupportedVersion: {
    id: primaryKey(generateId),
    type: String,
    version: String,
  },
};
