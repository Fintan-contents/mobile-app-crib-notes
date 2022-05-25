import {ApplicationError} from '../error/ApplicationError';

export class UnauthorizedError extends ApplicationError {}

export function isUnauthorizedError(error: unknown): error is UnauthorizedError {
  return error instanceof UnauthorizedError;
}
