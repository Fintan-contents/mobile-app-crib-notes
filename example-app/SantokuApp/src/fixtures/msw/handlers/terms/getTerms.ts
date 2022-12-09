import {TermsOfService} from 'features/backend/apis/model';
import {rest} from 'msw';

import {db} from '../../db';
import {backendUrl} from '../../utils/backendUrl';
import {delayedResponse} from '../../utils/delayedResponse';
import {errorResponse} from '../../utils/errorResponse';

export const getTerms = rest.get(`${backendUrl}/terms`, (req, res, ctx) => {
  try {
    const terms = db.terms.getAll();
    if (terms.length) {
      return delayedResponse(ctx.json<TermsOfService>({url: terms[0].url, version: terms[0].version}));
    }
    return delayedResponse(ctx.status(404));
  } catch (e) {
    return errorResponse(e, ctx);
  }
});
