import {ApplicationError} from 'bases/core/errors/ApplicationError';

export class UnauthorizedError extends ApplicationError {}

export function isUnauthorizedError(error: unknown): error is UnauthorizedError {
  return error instanceof UnauthorizedError;
}
