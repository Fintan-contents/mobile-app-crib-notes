import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const templateModel = {
  template: {
    templateId: primaryKey(generateId),
    title: String,
    content: String,
  },
};
