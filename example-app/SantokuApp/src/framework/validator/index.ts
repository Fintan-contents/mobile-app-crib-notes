import {m} from 'framework/message';
import * as Yup from 'yup';
import {AnyObject, Maybe, Message} from 'yup/lib/types';

import {loginPasswordValidator} from './loginPasswordValidator';

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > {
    loginPassword(message?: Message): StringSchema<TType, TContext, TOut>;
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
  });
};

export const yup = Yup;

export * from './isValidForm';
