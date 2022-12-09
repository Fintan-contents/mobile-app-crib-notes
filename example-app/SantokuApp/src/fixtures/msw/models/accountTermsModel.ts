import {primaryKey} from '@mswjs/data';

import {generateId} from '../utils/id';

export const accountTermsModel = {
  accountTerms: {accountId: primaryKey(generateId), hasAgreed: Boolean, agreedVersion: String},
};
