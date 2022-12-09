export type ErrorWithErrorCode = Error & {errorCode: string};
export const isErrorWithErrorCode = (error: unknown): error is ErrorWithErrorCode =>
  error != null && error instanceof Error && 'errorCode' in error;
