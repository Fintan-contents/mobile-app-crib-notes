import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const tagModel = {
  tag: {tagId: primaryKey(generateId), tagName: String, questions: Number},
};
