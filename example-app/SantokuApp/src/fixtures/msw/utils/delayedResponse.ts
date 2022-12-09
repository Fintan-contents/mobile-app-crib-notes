import {createResponseComposition} from 'msw';

const isTesting = process.env.NODE_ENV === 'test';

export const delayedResponse = createResponseComposition({delay: isTesting ? 0 : 1000});
