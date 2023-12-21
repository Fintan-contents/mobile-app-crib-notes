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

import {ErrorWrapper} from './ErrorWrapper';

export class ApplicationError extends ErrorWrapper {
  constructor();
  constructor(cause: unknown);
  constructor(message: string);
  constructor(cause: unknown, errorCode?: string);
  constructor(message: string, errorCode?: string);
  constructor(message: string, cause: unknown, errorCode?: string);
  constructor(messageOrCause?: unknown, causeOrErrorCode?: unknown, errorCode?: string) {
    if (typeof messageOrCause === 'string') {
      if (typeof causeOrErrorCode === 'string' && !errorCode) {
        super(messageOrCause);
        this._errorCode = causeOrErrorCode;
      } else {
        super(messageOrCause, causeOrErrorCode);
        this._errorCode = errorCode;
      }
    } else {
      super(messageOrCause);
      if (typeof causeOrErrorCode === 'string') {
        this._errorCode = causeOrErrorCode;
      }
    }
  }

  private readonly _errorCode?: string;

  get errorCode() {
    return this._errorCode;
  }
}

export function isApplicationError(error?: unknown): error is ApplicationError {
  return error != null && typeof error === 'object' && error instanceof ApplicationError;
}
