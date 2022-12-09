import {m} from 'bases/message/Message';
import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';
import {useCallback} from 'react';

export type LoginFormValues = {
  accountId: string;
  password: string;
};

const loginFormInitialValues = {
  accountId: '',
  password: '',
};

const loginFormValidationSchema = yup.object().shape({
  accountId: yup.string().label(m('アカウントID')).required(),
  password: yup.string().label(m('パスワード')).required().loginPassword(),
});

type LoginFormParams = {
  onSubmit: (values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>) => void | Promise<any>;
};
export const useLoginForm = (params: LoginFormParams = {onSubmit: () => {}}) => {
  const form = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: loginFormValidationSchema,
    validateOnChange: false,
    onSubmit: params.onSubmit,
  });

  const clearAccountId = useCallback(() => form.setFieldValue('accountId', ''), [form]);
  const clearPassword = useCallback(() => form.setFieldValue('password', ''), [form]);
  return {form, clearAccountId, clearPassword};
};
