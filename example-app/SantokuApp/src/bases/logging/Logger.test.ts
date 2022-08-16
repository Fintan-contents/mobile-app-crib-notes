import {ConsoleTransport} from './ConsoleTransport';
import {FirebaseCrashlyticsTransport} from './FirebaseCrashlyticsTransport';
import {LogFormatter, Logger, LogLevel} from './Logger';
import {SimpleLogFormatter} from './SimpleLogFormatter';

describe('Logger constructor', () => {
  test('ログオプションを指定しなかった場合の検証', () => {
    const log = new Logger();
    expect(log['level']).toEqual(1);
    expect(log['formatter']).toBeInstanceOf(SimpleLogFormatter);
    expect(log['transports']).toHaveLength(1);
    expect(log['transports'][0]).toBeInstanceOf(ConsoleTransport);
  });
  test('ログオプションを指定した場合の検証', () => {
    const formatter = new (class TestLogFormatter implements LogFormatter {
      format(level: LogLevel, message: string, errorCode?: string): string {
        return message;
      }
    })();
    const transports = [new ConsoleTransport(), new FirebaseCrashlyticsTransport()];
    const log = new Logger({level: 'error', formatter, transports});
    expect(log['level']).toEqual(3);
    expect(log['formatter']).toBe(formatter);
    expect(log['transports']).toBe(transports);
  });
});

describe('Logger isLevelEnabled', () => {
  const transport = new ConsoleTransport();
  const mockTrace = jest.spyOn(transport, 'trace').mockImplementation();
  const mockDebug = jest.spyOn(transport, 'debug').mockImplementation();
  const mockInfo = jest.spyOn(transport, 'info').mockImplementation();
  const mockWarn = jest.spyOn(transport, 'warn').mockImplementation();
  const mockError = jest.spyOn(transport, 'error').mockImplementation();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('ログレベルをtraceにした場合の検証', () => {
    const log = new Logger({level: 'trace', transports: [transport]});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(1);
    expect(mockDebug).toHaveBeenCalledTimes(1);
    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルをdebugにした場合の検証', () => {
    const log = new Logger({level: 'debug', transports: [transport]});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(1);
    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルをinfoにした場合の検証', () => {
    const log = new Logger({level: 'info', transports: [transport]});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(0);
    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルをwarnにした場合の検証', () => {
    const log = new Logger({level: 'warn', transports: [transport]});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(0);
    expect(mockInfo).toHaveBeenCalledTimes(0);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルをerrorにした場合の検証', () => {
    const log = new Logger({level: 'error', transports: [transport]});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(0);
    expect(mockInfo).toHaveBeenCalledTimes(0);
    expect(mockWarn).toHaveBeenCalledTimes(0);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  test('ログレベルを途中で変更した場合の検証', () => {
    // 最初はエラーレベルのみログ出力する
    const log = new Logger({level: 'error', transports: [transport]});
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(0);
    expect(mockDebug).toHaveBeenCalledTimes(0);
    expect(mockInfo).toHaveBeenCalledTimes(0);
    expect(mockWarn).toHaveBeenCalledTimes(0);
    expect(mockError).toHaveBeenCalledTimes(1);

    jest.clearAllMocks();

    // 全てのレベルでログが出力されるように変更
    log.setLevel('trace');
    logAllMethod(log);
    expect(mockTrace).toHaveBeenCalledTimes(1);
    expect(mockDebug).toHaveBeenCalledTimes(1);
    expect(mockInfo).toHaveBeenCalledTimes(1);
    expect(mockWarn).toHaveBeenCalledTimes(1);
    expect(mockError).toHaveBeenCalledTimes(1);
  });

  const logAllMethod = (log: Logger) => {
    log.trace('traceLog');
    log.debug('debugLog');
    log.info('infoLog');
    log.warn('warnLog');
    log.error('errorLog', 'err0001');
  };
});

describe('Logger transport message and errorCode', () => {
  const formatter = new SimpleLogFormatter();
  const consoleTransport = new ConsoleTransport();
  const firebaseCrashlyticsTransport = new FirebaseCrashlyticsTransport();
  const mockFormat = jest.spyOn(formatter, 'format');

  beforeAll(() => {
    jest.clearAllMocks();
  });

  test('traceレベルの場合にTransportにフォーマットされたメッセージを正しく渡しているかの検証', () => {
    const mockConsoleTrace = jest.spyOn(consoleTransport, 'trace').mockImplementation();
    const mockFirebaseCrashlyticsTrace = jest.spyOn(firebaseCrashlyticsTransport, 'trace').mockImplementation();
    const log = new Logger({level: 'trace', formatter, transports: [consoleTransport, firebaseCrashlyticsTransport]});

    mockFormat.mockReturnValue('[trace] traceLog');
    log.trace('traceLog');
    expect(mockFormat).toHaveBeenCalledWith('trace', 'traceLog', undefined);
    expect(mockConsoleTrace).toHaveBeenCalledWith('[trace] traceLog');
    expect(mockFirebaseCrashlyticsTrace).toHaveBeenCalledWith('[trace] traceLog');

    mockFormat.mockReturnValue('[trace] traceLogMessageSupplier');
    log.trace(() => 'traceLogMessageSupplier');
    expect(mockFormat).toHaveBeenCalledWith('trace', 'traceLogMessageSupplier', undefined);
    expect(mockConsoleTrace).toHaveBeenCalledWith('[trace] traceLogMessageSupplier');
    expect(mockFirebaseCrashlyticsTrace).toHaveBeenCalledWith('[trace] traceLog');
  });

  test('debugレベルの場合にTransportにフォーマットされたメッセージを正しく渡しているかの検証', () => {
    const mockConsoleDebug = jest.spyOn(consoleTransport, 'debug').mockImplementation();
    const mockFirebaseCrashlyticsDebug = jest.spyOn(firebaseCrashlyticsTransport, 'debug').mockImplementation();
    const log = new Logger({level: 'debug', formatter, transports: [consoleTransport, firebaseCrashlyticsTransport]});

    mockFormat.mockReturnValue('[debug] debugLog');
    log.debug('debugLog');
    expect(mockFormat).toHaveBeenCalledWith('debug', 'debugLog', undefined);
    expect(mockConsoleDebug).toHaveBeenCalledWith('[debug] debugLog');
    expect(mockFirebaseCrashlyticsDebug).toHaveBeenCalledWith('[debug] debugLog');

    mockFormat.mockReturnValue('[debug] debugLogMessageSupplier');
    log.debug(() => 'debugLogMessageSupplier');
    expect(mockFormat).toHaveBeenCalledWith('debug', 'debugLogMessageSupplier', undefined);
    expect(mockConsoleDebug).toHaveBeenCalledWith('[debug] debugLogMessageSupplier');
    expect(mockFirebaseCrashlyticsDebug).toHaveBeenCalledWith('[debug] debugLogMessageSupplier');
  });

  test('infoレベルの場合にTransportにフォーマットされたメッセージを正しく渡しているかの検証', () => {
    const mockConsoleInfo = jest.spyOn(consoleTransport, 'info').mockImplementation();
    const mockFirebaseCrashlyticsInfo = jest.spyOn(firebaseCrashlyticsTransport, 'info').mockImplementation();
    const log = new Logger({level: 'info', formatter, transports: [consoleTransport, firebaseCrashlyticsTransport]});

    mockFormat.mockReturnValue('[info] infoLog');
    log.info('infoLog');
    expect(mockFormat).toHaveBeenCalledWith('info', 'infoLog', undefined);
    expect(mockConsoleInfo).toHaveBeenCalledWith('[info] infoLog');
    expect(mockFirebaseCrashlyticsInfo).toHaveBeenCalledWith('[info] infoLog');

    mockFormat.mockReturnValue('[info] infoLogMessageSupplier');
    log.info(() => 'infoLogMessageSupplier');
    expect(mockFormat).toHaveBeenCalledWith('info', 'infoLogMessageSupplier', undefined);
    expect(mockConsoleInfo).toHaveBeenCalledWith('[info] infoLogMessageSupplier');
    expect(mockFirebaseCrashlyticsInfo).toHaveBeenCalledWith('[info] infoLogMessageSupplier');
  });

  test('warnレベルの場合にTransportにフォーマットされたメッセージを正しく渡しているかの検証', () => {
    const mockConsoleWarn = jest.spyOn(consoleTransport, 'warn').mockImplementation();
    const mockFirebaseCrashlyticsWarn = jest.spyOn(firebaseCrashlyticsTransport, 'warn').mockImplementation();
    const log = new Logger({level: 'warn', formatter, transports: [consoleTransport, firebaseCrashlyticsTransport]});

    mockFormat.mockReturnValue('[warn] warnLog');
    log.warn('warnLog');
    expect(mockFormat).toHaveBeenCalledWith('warn', 'warnLog', undefined);
    expect(mockConsoleWarn).toHaveBeenCalledWith('[warn] warnLog');
    expect(mockFirebaseCrashlyticsWarn).toHaveBeenCalledWith('[warn] warnLog');

    mockFormat.mockReturnValue('[warn] warnLogMessageSupplier');
    log.warn(() => 'warnLogMessageSupplier');
    expect(mockFormat).toHaveBeenCalledWith('warn', 'warnLogMessageSupplier', undefined);
    expect(mockConsoleWarn).toHaveBeenCalledWith('[warn] warnLogMessageSupplier');
    expect(mockFirebaseCrashlyticsWarn).toHaveBeenCalledWith('[warn] warnLogMessageSupplier');
  });

  test('errorレベルの場合にTransportにフォーマットされたメッセージとエラーコードを正しく渡しているかの検証', () => {
    const mockConsoleError = jest.spyOn(consoleTransport, 'error').mockImplementation();
    const mockFirebaseCrashlyticsError = jest.spyOn(firebaseCrashlyticsTransport, 'error').mockImplementation();
    const log = new Logger({level: 'error', formatter, transports: [consoleTransport, firebaseCrashlyticsTransport]});

    mockFormat.mockReturnValue('[error] [err0001] errorLog');
    log.error('errorLog', 'err0001');
    expect(mockFormat).toHaveBeenCalledWith('error', 'errorLog', 'err0001');
    expect(mockConsoleError).toHaveBeenCalledWith('[error] [err0001] errorLog', 'err0001');
    expect(mockFirebaseCrashlyticsError).toHaveBeenCalledWith('[error] [err0001] errorLog', 'err0001');

    mockFormat.mockReturnValue('[error] [err0002] errorLogMessageSupplier');
    log.error(() => 'errorLogMessageSupplier', 'err0002');
    expect(mockFormat).toHaveBeenCalledWith('error', 'errorLogMessageSupplier', 'err0002');
    expect(mockConsoleError).toHaveBeenCalledWith('[error] [err0002] errorLogMessageSupplier', 'err0002');
    expect(mockFirebaseCrashlyticsError).toHaveBeenCalledWith('[error] [err0002] errorLogMessageSupplier', 'err0002');
  });
});
