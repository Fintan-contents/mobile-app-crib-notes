import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';

describe('FirebaseCrashlyticsTransport logMethods', () => {
  test('traceメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.trace('traceLog');
    expect(__mocks.crashlytics.recordError).not.toHaveBeenCalled();
  });

  test('debugメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.debug('debugLog');
    expect(__mocks.crashlytics.recordError).not.toHaveBeenCalled();
  });

  test('infoメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.info('infoLog');
    expect(__mocks.crashlytics.recordError).not.toHaveBeenCalled();
  });

  test('warnメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.warn('warnLog');
    expect(__mocks.crashlytics.recordError).not.toHaveBeenCalled();
  });

  test('errorメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.error('errorLog', 'err0001');
    expect(__mocks.crashlytics.recordError).toHaveBeenCalledWith(new Error('errorLog'), 'err0001');
  });
});
