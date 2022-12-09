import {db} from '../../db';

export const getLoggedInAccountId = () => {
  const loggedInAccount = db.loggedInAccount.getAll();
  if (!loggedInAccount.length) {
    throw new LoggedInAccountIdNotFound('Logged in account not found.');
  }
  return loggedInAccount[0].accountId;
};

export class LoggedInAccountIdNotFound extends Error {}

export function isLoggedInAccountIdNotFound(error: unknown): error is LoggedInAccountIdNotFound {
  return error instanceof LoggedInAccountIdNotFound;
}
