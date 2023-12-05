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

import {m} from 'bases/message/Message';
import * as Yup from 'yup';
import {AnyObject, Maybe, Message, Flags} from 'yup';

import {loginPasswordValidator} from './loginPasswordValidator';

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TDefault = undefined,
    TFlags extends Flags = '',
  > {
    loginPassword(message?: Message): StringSchema<TType, TContext, TDefault, TFlags>;
  }
}

export const enhanceValidator = () => {
  Yup.addMethod(Yup.string, 'loginPassword', function (message: string = m('validation.string.loginPassword')) {
    return this.test('loginPassword', message, loginPasswordValidator);
  });

  Yup.setLocale({
    mixed: {
      required: m('validation.mixed.required'),
    },
    string: {
      max: m('validation.string.max'),
    },
    number: {
      min: m('validation.number.min'),
      max: m('validation.number.max'),
      integer: m('validation.number.integer'),
    },
  });
};

export const yup = Yup;

export * from './isValidForm';
