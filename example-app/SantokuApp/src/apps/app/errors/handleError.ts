import axios from 'axios';
import {isErrorWithErrorCode} from 'bases/core/errors/ErrorWithErrorCode';
import {RuntimeError} from 'bases/core/errors/RuntimeError';
import {log} from 'bases/logging';
import {ErrorResponse} from 'features/backend/apis/model';

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ErrorResponse | undefined;
    const errorCode = data?.code ?? 'AxiosError';
    log.error(error, errorCode);
  } else if (error instanceof Error) {
    if (isErrorWithErrorCode(error)) {
      log.error(error, error.errorCode);
    } else {
      log.error(error);
    }
  } else {
    log.error(new RuntimeError(error));
  }
};
