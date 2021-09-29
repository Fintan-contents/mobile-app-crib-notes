import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';

describe('FirebaseCrashlyticsTransport logMethods', () => {
  test('traceメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.trace('traceLog', 'err0001');
    expect(__mocks.crashlytics.recordError).toHaveBeenCalledWith(new Error('[trace] [err0001] traceLog'), 'err0001');
  });

  test('debugメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.debug('debugLog', 'err0002');
    expect(__mocks.crashlytics.recordError).toHaveBeenCalledWith(new Error('[debug] [err0002] debugLog'), 'err0002');
  });

  test('infoメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.info('infoLog', 'err0003');
    expect(__mocks.crashlytics.recordError).toHaveBeenCalledWith(new Error('[info] [err0003] infoLog'), 'err0003');
  });

  test('warnメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.warn('warnLog', 'err0004');
    expect(__mocks.crashlytics.recordError).toHaveBeenCalledWith(new Error('[warn] [err0004] warnLog'), 'err0004');
  });

  test('errorメソッドの検証', () => {
    const transport = new FirebaseCrashlyticsTransport();
    transport.error('errorLog', 'err0005');
    expect(__mocks.crashlytics.recordError).toHaveBeenCalledWith(new Error('[error] [err0005] errorLog'), 'err0005');
  });
});
