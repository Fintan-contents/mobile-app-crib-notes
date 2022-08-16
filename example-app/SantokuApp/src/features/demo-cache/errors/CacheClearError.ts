import {ApplicationError} from 'bases/core/error/ApplicationError';

export class CacheClearError extends ApplicationError {}

export function isCacheClearError(error: unknown): error is CacheClearError {
  return error instanceof CacheClearError;
}
