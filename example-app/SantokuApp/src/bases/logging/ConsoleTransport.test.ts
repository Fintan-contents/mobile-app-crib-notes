import {ConsoleTransport} from './ConsoleTransport';

describe('ConsoleTransport logMethods', () => {
  const transport = new ConsoleTransport();

  test('traceメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'trace').mockImplementation();
    transport.trace('traceLog');
    expect(mockConsole).toHaveBeenCalledWith('traceLog');
  });

  test('debugメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'debug').mockImplementation();
    transport.debug('debugLog');
    expect(mockConsole).toHaveBeenCalledWith('debugLog');
  });

  test('infoメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'info').mockImplementation();
    transport.info('infoLog');
    expect(mockConsole).toHaveBeenCalledWith('infoLog');
  });

  test('warnメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'warn').mockImplementation();
    transport.warn('warnLog');
    expect(mockConsole).toHaveBeenCalledWith('warnLog');
  });

  test('errorメソッドの検証', () => {
    const mockConsole = jest.spyOn(console, 'error').mockImplementation();
    const error = new Error('errorLog');
    transport.error(error, 'err0001');
    expect(mockConsole).toHaveBeenCalledWith(error);
  });
});
