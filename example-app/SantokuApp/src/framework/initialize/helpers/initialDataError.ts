import {ApplicationError} from 'framework/error/ApplicationError';

export class InitialDataError extends ApplicationError {}

export function isInitialDataError(error: unknown): error is InitialDataError {
  return error instanceof InitialDataError;
}
