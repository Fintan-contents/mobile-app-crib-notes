import {ApplicationError, isApplicationError} from './ApplicationError';

class ApplicationErrorSubClass extends ApplicationError {}
const cause = new ApplicationErrorSubClass('root cause');
const nested = new ApplicationErrorSubClass('nested cause', cause);

// eslint-disable-next-line jest/unbound-method
const captureStackTrace = Error.captureStackTrace;
describe.each([false, true])(
  'new ApplicationError() when captureStackTrace availability is %p',
  captureStackTraceAvailable => {
    beforeAll(() => {
      if (!captureStackTraceAvailable) {
        // @ts-ignore
        delete Error.captureStackTrace;
      }
    });
    afterAll(() => {
      if (!captureStackTraceAvailable) {
        Error.captureStackTrace = captureStackTrace;
      }
    });

    it('given a message', () => {
      const message = 'error message';
      const sut = new ApplicationError(message);

      expect(sut.name).toEqual('ApplicationError');
      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(undefined);
      expect(sut.stack).toMatch(/^ApplicationError: error message$/m);
      expect(sut.errorCode).toEqual(undefined);
    });

    it('given an Error', () => {
      const sut = new ApplicationError(cause);

      expect(sut.name).toEqual('ApplicationError');
      expect(sut.message).toEqual('');
      expect(sut.cause).toEqual(cause);
      expect(sut.stack).toMatch(/^ApplicationError: $.+^ApplicationErrorSubClass: root cause/ms);
      expect(sut.errorCode).toEqual(undefined);
    });

    it('given a message and errorCode', () => {
      const message = 'error message';
      const errorCode = 'error code';
      const sut = new ApplicationError(message, errorCode);

      expect(sut.name).toEqual('ApplicationError');
      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(undefined);
      expect(sut.stack).toMatch(/^ApplicationError: error message$/m);
      expect(sut.errorCode).toEqual(errorCode);
    });

    it('given an Error and errorCode', () => {
      const errorCode = 'error code';
      const sut = new ApplicationError(cause, errorCode);

      expect(sut.name).toEqual('ApplicationError');
      expect(sut.message).toEqual('');
      expect(sut.cause).toEqual(cause);
      expect(sut.stack).toMatch(/^ApplicationError: $.+^ApplicationErrorSubClass: root cause/ms);
      expect(sut.errorCode).toEqual(errorCode);
    });

    it('given a message and Error', () => {
      const message = 'when the error occurred';
      const sut = new ApplicationError(message, cause);

      expect(sut.name).toEqual('ApplicationError');
      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(cause);
      expect(sut.stack).toMatch(/^ApplicationError: when the error occurred$.+^ApplicationErrorSubClass: root cause/ms);
      expect(sut.errorCode).toEqual(undefined);
    });

    it('given a message and Error and errorCode', () => {
      const message = 'when the error occurred';
      const errorCode = 'error code';
      const sut = new ApplicationError(message, cause, errorCode);

      expect(sut.name).toEqual('ApplicationError');
      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(cause);
      expect(sut.stack).toMatch(/^ApplicationError: when the error occurred$.+^ApplicationErrorSubClass: root cause/ms);
      expect(sut.errorCode).toEqual(errorCode);
    });

    it('given a message and nested Error', () => {
      const message = 'when the error occurred';
      const sut = new ApplicationError(message, nested);

      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(nested);
      expect(sut.stack?.match(/^\S/gm)?.length).toEqual(3);
      expect(sut.stack).toMatch(
        /^ApplicationError: when the error occurred.+^ApplicationErrorSubClass: nested cause.+^ApplicationErrorSubClass: root cause/ms,
      );
      expect(sut.errorCode).toEqual(undefined);
    });

    it('given an argument other than message or cause', () => {
      const mock = jest.spyOn(console, 'warn').mockImplementation();
      try {
        // @ts-ignore
        const sut = new ApplicationError(['array', {key: 'value'}]);

        expect(sut.name).toEqual('ApplicationError');
        expect(sut.message).toEqual('');
        expect(sut.cause).toEqual(undefined);
        expect(sut.errorCode).toEqual(undefined);
      } finally {
        mock.mockRestore();
      }
    });

    it('given an argument other than Error', () => {
      const message = 'when the error occurred';
      const cause = {key: 'value'};
      // @ts-ignore
      const sut = new ApplicationError(message, cause);

      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(undefined);
      expect(sut.errorCode).toEqual(undefined);
    });
  },
);

describe('ApplicationError', () => {
  it('sub class should be instance of ApplicationError', () => {
    const sut = new ApplicationErrorSubClass();
    // noinspection SuspiciousTypeOfGuard
    expect(sut instanceof ApplicationErrorSubClass).toBe(true);
    // noinspection SuspiciousTypeOfGuard
    expect(sut instanceof ApplicationError).toBe(true);
  });
});

describe('isApplicationError', () => {
  it('should return false if null', () => {
    expect(isApplicationError(null)).toBe(false);
  });
  it('should return false if undefined', () => {
    expect(isApplicationError(undefined)).toBe(false);
  });
  it('should return false if object but not instance of ApplicationError', () => {
    expect(isApplicationError({})).toBe(false);
  });
  it('should return true if ApplicationError', () => {
    expect(isApplicationError(new ApplicationError())).toBe(true);
  });
  it('should return true if sub class of ApplicationError', () => {
    expect(isApplicationError(new ApplicationErrorSubClass())).toBe(true);
  });
});
