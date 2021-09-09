import {ConsoleTransport} from './ConsoleTransport';

describe('ConsoleTransport logMethods', () => {
  const transport = new ConsoleTransport();

  test('traceメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'trace').mockImplementation();
    transport.trace('traceLog', 'err0001');
    expect(mockConsole).toHaveBeenCalledWith('[trace] [err0001] traceLog');
  });

  test('debugメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'debug').mockImplementation();
    transport.debug('debugLog', 'err0002');
    expect(mockConsole).toHaveBeenCalledWith('[debug] [err0002] debugLog');
  });

  test('infoメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'info').mockImplementation();
    transport.info('infoLog', 'err0003');
    expect(mockConsole).toHaveBeenCalledWith('[info] [err0003] infoLog');
  });

  test('warnメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'warn').mockImplementation();
    transport.warn('warnLog', 'err0004');
    expect(mockConsole).toHaveBeenCalledWith('[warn] [err0004] warnLog');
  });

  test('errorメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'error').mockImplementation();
    transport.error('errorLog', 'err0005');
    expect(mockConsole).toHaveBeenCalledWith('[error] [err0005] errorLog');
  });
});
