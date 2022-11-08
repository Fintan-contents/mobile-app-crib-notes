import {RuntimeError, isRuntimeError} from './RuntimeError';

class RuntimeErrorSubClass extends RuntimeError {}
const cause = new RuntimeErrorSubClass('root cause');
const nested = new RuntimeErrorSubClass('nested cause', cause);

// eslint-disable-next-line jest/unbound-method
const captureStackTrace = Error.captureStackTrace;
describe.each([false, true])(
  'new RuntimeError() when captureStackTrace availability is %p',
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
      const sut = new RuntimeError(message);

      expect(sut.name).toEqual('RuntimeError');
      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(undefined);
      expect(sut.stack).toMatch(/^RuntimeError: error message$/m);
      expect(sut.errorCode).toEqual(undefined);
    });

    it('given an Error', () => {
      const sut = new RuntimeError(cause);

      expect(sut.name).toEqual('RuntimeError');
      expect(sut.message).toEqual('');
      expect(sut.cause).toEqual(cause);
      expect(sut.stack).toMatch(/^RuntimeError: $.+^RuntimeErrorSubClass: root cause/ms);
      expect(sut.errorCode).toEqual(undefined);
    });

    it('given a message and errorCode', () => {
      const message = 'error message';
      const errorCode = 'error code';
      const sut = new RuntimeError(message, errorCode);

      expect(sut.name).toEqual('RuntimeError');
      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(undefined);
      expect(sut.stack).toMatch(/^RuntimeError: error message$/m);
      expect(sut.errorCode).toEqual(errorCode);
    });

    it('given an Error and errorCode', () => {
      const errorCode = 'error code';
      const sut = new RuntimeError(cause, errorCode);

      expect(sut.name).toEqual('RuntimeError');
      expect(sut.message).toEqual('');
      expect(sut.cause).toEqual(cause);
      expect(sut.stack).toMatch(/^RuntimeError: $.+^RuntimeErrorSubClass: root cause/ms);
      expect(sut.errorCode).toEqual(errorCode);
    });

    it('given a message and Error', () => {
      const message = 'when the error occurred';
      const sut = new RuntimeError(message, cause);

      expect(sut.name).toEqual('RuntimeError');
      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(cause);
      expect(sut.stack).toMatch(/^RuntimeError: when the error occurred$.+^RuntimeErrorSubClass: root cause/ms);
      expect(sut.errorCode).toEqual(undefined);
    });

    it('given a message and Error and errorCode', () => {
      const message = 'when the error occurred';
      const errorCode = 'error code';
      const sut = new RuntimeError(message, cause, errorCode);

      expect(sut.name).toEqual('RuntimeError');
      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(cause);
      expect(sut.stack).toMatch(/^RuntimeError: when the error occurred$.+^RuntimeErrorSubClass: root cause/ms);
      expect(sut.errorCode).toEqual(errorCode);
    });

    it('given a message and nested Error', () => {
      const message = 'when the error occurred';
      const sut = new RuntimeError(message, nested);

      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(nested);
      expect(sut.stack?.match(/^\S/gm)?.length).toEqual(3);
      expect(sut.stack).toMatch(
        /^RuntimeError: when the error occurred.+^RuntimeErrorSubClass: nested cause.+^RuntimeErrorSubClass: root cause/ms,
      );
      expect(sut.errorCode).toEqual(undefined);
    });

    it('given an argument other than message or cause', () => {
      const mock = jest.spyOn(console, 'warn').mockImplementation();
      try {
        // @ts-ignore
        const sut = new RuntimeError(['array', {key: 'value'}]);

        expect(sut.name).toEqual('RuntimeError');
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
      const sut = new RuntimeError(message, cause);

      expect(sut.message).toEqual(message);
      expect(sut.cause).toEqual(undefined);
      expect(sut.errorCode).toEqual(undefined);
    });
  },
);

describe('RuntimeError', () => {
  it('sub class should be instance of RuntimeError', () => {
    const sut = new RuntimeErrorSubClass();
    // noinspection SuspiciousTypeOfGuard
    expect(sut instanceof RuntimeErrorSubClass).toBe(true);
    // noinspection SuspiciousTypeOfGuard
    expect(sut instanceof RuntimeError).toBe(true);
  });
});

describe('isRuntimeError', () => {
  it('should return false if null', () => {
    expect(isRuntimeError(null)).toBe(false);
  });
  it('should return false if undefined', () => {
    expect(isRuntimeError(undefined)).toBe(false);
  });
  it('should return false if object but not instance of RuntimeError', () => {
    expect(isRuntimeError({})).toBe(false);
  });
  it('should return true if RuntimeError', () => {
    expect(isRuntimeError(new RuntimeError())).toBe(true);
  });
  it('should return true if sub class of RuntimeError', () => {
    expect(isRuntimeError(new RuntimeErrorSubClass())).toBe(true);
  });
});
