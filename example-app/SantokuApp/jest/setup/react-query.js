// no more noisy error logs on the console by React Query when promises are rejected.
// https://react-query.tanstack.com/guides/testing#turn-off-network-error-logging
import {setLogger} from 'react-query';

setLogger({
  log: () => {},
  warn: () => {},
  error: () => {},
});
