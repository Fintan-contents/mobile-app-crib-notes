import {accountId} from './setLoggedInAccountId';

export const getLoggedInAccountId = () => {
  if (!accountId) {
    throw new LoggedInAccountIdNotFound('Logged in account not found.');
  }
  return accountId;
};

export class LoggedInAccountIdNotFound extends Error {}

export function isLoggedInAccountIdNotFound(error: unknown): error is LoggedInAccountIdNotFound {
  return error instanceof LoggedInAccountIdNotFound;
}
