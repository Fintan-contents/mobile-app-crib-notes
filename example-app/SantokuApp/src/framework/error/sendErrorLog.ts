import axios from 'axios';
import {log} from 'framework';
import {ErrorResponse} from 'generated/backend/model';

export const sendErrorLog = (error: unknown) => {
  try {
    if (axios.isAxiosError(error)) {
      const data = error.response?.data as ErrorResponse | undefined;
      const errorCode = data?.code ?? 'AxiosError';
      log.error(
        `
Backend API Request Error:
req.url=[${error.config.url ?? ''}]
req.method=[${error.config.method ?? ''}]
res.status=[${error.response?.status ?? ''}]
res.statusText=[${error.response?.statusText ?? ''}]
`,
        errorCode,
      );
    } else {
      const errorMessage = error instanceof Error ? error.message : 'unknown';
      log.error(`UnexpectedError: message=[${errorMessage}]`, 'UnexpectedRequestError');
    }
  } catch (e) {}
};
