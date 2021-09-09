import {ConsoleTransport} from './ConsoleTransport';
import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';
import {Logger} from './Logger';

describe('Logger constructor', () => {
  test('ログオプションを指定しなかった場合の検証', () => {
    const log = new Logger();
    expect(log['level']).toEqual(1);
    expect(log['transport']).toBeInstanceOf(ConsoleTransport);
  });
  test('ログオプションを指定した場合の検証', () => {
    const log = new Logger({level: 'error', transport: new FirebaseCrashlyticsTransport()});
    expect(log['level']).toEqual(3);
    expect(log['transport']).toBeInstanceOf(FirebaseCrashlyticsTransport);
  });
});

describe('Logger isLevelEnabled', () => {
  const transport = new ConsoleTransport();
  const mockTrace = jest.spyOn(transport, 'trace');
  const mockDebug = jest.spyOn(transport, 'debug');
  const mockInfo = jest.spyOn(transport, 'info');
  const mockWarn = jest.spyOn(transport, 'warn');
  const mockError = jest.spyOn(transport, 'error');

  beforeEach(() => {
    jest.clearAllMocks();
    mockTrace.mockImplementation();
    mockDebug.mockImplementation();
    mockInfo.mockImplementation();
    mockWarn.mockImplementation();
    mockError.mockImplementation();
  });

  test('ログレベルをtraceにした場合の検証', () => {
    const log = new Logger({level: 'trace', transport});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(1);
    expect(mockDebug).toHaveBeenCalledTimes(1);
    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルをdebugにした場合の検証', () => {
    const log = new Logger({level: 'debug', transport});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(1);
    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルをinfoにした場合の検証', () => {
    const log = new Logger({level: 'info', transport});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(0);
    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルをwarnにした場合の検証', () => {
    const log = new Logger({level: 'warn', transport});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(0);
    expect(mockInfo).toHaveBeenCalledTimes(0);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルをerrorにした場合の検証', () => {
    const log = new Logger({level: 'error', transport});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(0);
    expect(mockInfo).toHaveBeenCalledTimes(0);
    expect(mockWarn).toHaveBeenCalledTimes(0);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  const logAllMethod = (log: Logger) => {
    log.trace('traceLog', 'err0001');
    log.debug('debugLog', 'err0002');
    log.info('infoLog', 'err0003');
    log.warn('warnLog', 'err0004');
    log.error('errorLog', 'err0005');
  };
});

describe('Logger transport message and errorCode', () => {
  const transport = new ConsoleTransport();
  const mockTrace = jest.spyOn(transport, 'trace');
  const mockDebug = jest.spyOn(transport, 'debug');
  const mockInfo = jest.spyOn(transport, 'info');
  const mockWarn = jest.spyOn(transport, 'warn');
  const mockError = jest.spyOn(transport, 'error');

  beforeAll(() => {
    jest.clearAllMocks();
    mockTrace.mockImplementation();
    mockDebug.mockImplementation();
    mockInfo.mockImplementation();
    mockWarn.mockImplementation();
    mockError.mockImplementation();
  });

  test('Transportに正しくメッセージとエラーコードを渡しているかの検証', () => {
    const log = new Logger({level: 'trace', transport});
    log.trace('traceLog', 'err0001');
    expect(mockTrace).toHaveBeenCalledWith('traceLog', 'err0001');
    log.trace(() => 'traceLogMessageSupplier', 'err0001');
    expect(mockTrace).toHaveBeenCalledWith('traceLogMessageSupplier', 'err0001');

    log.debug('debugLog', 'err0002');
    expect(mockDebug).toHaveBeenCalledWith('debugLog', 'err0002');
    log.debug(() => 'debugLogMessageSupplier', 'err0002');
    expect(mockDebug).toHaveBeenCalledWith('debugLogMessageSupplier', 'err0002');

    log.info('infoLog', 'err0003');
    expect(mockInfo).toHaveBeenCalledWith('infoLog', 'err0003');
    log.info(() => 'infoLogMessageSupplier', 'err0003');
    expect(mockInfo).toHaveBeenCalledWith('infoLogMessageSupplier', 'err0003');

    log.warn('warnLog', 'err0004');
    expect(mockWarn).toHaveBeenCalledWith('warnLog', 'err0004');
    log.warn(() => 'warnLogMessageSupplier', 'err0004');
    expect(mockWarn).toHaveBeenCalledWith('warnLogMessageSupplier', 'err0004');

    log.error('errorLog', 'err0005');
    expect(mockError).toHaveBeenCalledWith('errorLog', 'err0005');
    log.error(() => 'errorLogMessageSupplier', 'err0005');
    expect(mockError).toHaveBeenCalledWith('errorLogMessageSupplier', 'err0005');
  });
});
