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
      max: m('validation.number.max'),
    },
  });
};

export const yup = Yup;

export * from './isValidForm';
