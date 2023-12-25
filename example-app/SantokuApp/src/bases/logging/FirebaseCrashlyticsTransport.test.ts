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
    transport.error(new Error('errorLog'), 'err0001');
    expect(__mocks.crashlytics.recordError).toHaveBeenCalledWith(new Error('errorLog'), 'err0001');
  });
});
