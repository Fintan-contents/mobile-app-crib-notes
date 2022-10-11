// Original source:
//   https://github.com/necojackarc/extensible-custom-error/blob/52d56448d9f535835a9ffbc7e447b951555c08c2/src/index.js
// Original license:
//   The MIT License (MIT)
//
//   Copyright (c) 2015 necojackarc
//
//   Permission is hereby granted, free of charge, to any person obtaining a copy
//   of this software and associated documentation files (the "Software"), to deal
//   in the Software without restriction, including without limitation the rights
//   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//   copies of the Software, and to permit persons to whom the Software is
//   furnished to do so, subject to the following conditions:
//
//   The above copyright notice and this permission notice shall be included in
//   all copies or substantial portions of the Software.
//
//   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//   THE SOFTWARE.

export class ErrorWrapper extends Error {
  constructor();
  constructor(cause: unknown);
  constructor(message: string);
  constructor(message: string, cause: unknown);
  constructor(messageOrCause?: unknown, cause?: unknown) {
    if (typeof messageOrCause === 'string') {
      super(messageOrCause);
    } else {
      super();
    }

    let errorToWrap;
    if (messageOrCause instanceof Error) {
      errorToWrap = messageOrCause;
      this._cause = messageOrCause;
    } else if (cause instanceof Error) {
      errorToWrap = cause;
      this._cause = cause;
    }

    // Align with Object.getOwnPropertyDescriptor(Error.prototype, 'name')
    Object.defineProperty(this, 'name', {
      configurable: true,
      enumerable: false,
      value: this.constructor.name,
      writable: true,
    });

    const stackTraceSoFar = errorToWrap ? errorToWrap.stack : undefined;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.stack = mergeStackTrace(this.stack, stackTraceSoFar);
  }

  private readonly _cause?: Error;

  get cause() {
    return this._cause;
  }
}

// Helper function to merge stack traces
const mergeStackTrace = (stackTraceToMerge?: string, baseStackTrace?: string) => {
  if (!baseStackTrace) {
    return stackTraceToMerge;
  }

  const entriesToMerge = stackTraceToMerge?.split('\n');
  const baseEntries = baseStackTrace.split('\n');

  const newEntries: string[] = [];

  entriesToMerge?.forEach(entry => {
    if (baseEntries.includes(entry)) {
      return;
    }

    newEntries.push(entry);
  });

  return [...newEntries, ...baseEntries].join('\n');
};
