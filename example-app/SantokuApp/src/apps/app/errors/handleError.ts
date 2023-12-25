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

import axios from 'axios';
import {isErrorWithErrorCode} from 'bases/core/errors/ErrorWithErrorCode';
import {RuntimeError} from 'bases/core/errors/RuntimeError';
import {log} from 'bases/logging';
import {ErrorResponse} from 'features/backend/apis/model';

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ErrorResponse | undefined;
    const errorCode = data?.code ?? 'AxiosError';
    log.error(error, errorCode);
  } else if (error instanceof Error) {
    if (isErrorWithErrorCode(error)) {
      log.error(error, error.errorCode);
    } else {
      log.error(error);
    }
  } else {
    log.error(new RuntimeError(error));
  }
};
