/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
