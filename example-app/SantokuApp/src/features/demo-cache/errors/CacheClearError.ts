import {ApplicationError} from 'bases/core/errors/ApplicationError';

export class CacheClearError extends ApplicationError {}

export function isCacheClearError(error: unknown): error is CacheClearError {
  return error instanceof CacheClearError;
}
