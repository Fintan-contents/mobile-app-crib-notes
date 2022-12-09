import {m} from 'bases/message/Message';
import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';
import {useCallback} from 'react';

export type ProfileFormValues = {
  nickname: string;
};

const profileFormInitialValues = {
  nickname: '',
};

const profileFormValidationSchema = yup.object().shape({
  nickname: yup.string().label(m('ニックネーム')).required().max(50),
});

type ProfileFormParams = {
  onSubmit: (values: ProfileFormValues, formikHelpers: FormikHelpers<ProfileFormValues>) => void | Promise<any>;
};
export const useProfileRegistrationForm = (params: ProfileFormParams = {onSubmit: () => {}}) => {
  const form = useFormik({
    initialValues: profileFormInitialValues,
    validationSchema: profileFormValidationSchema,
    validateOnChange: false,
    onSubmit: params.onSubmit,
  });

  const clearNickname = useCallback(() => form.setFieldValue('nickname', ''), [form]);
  return {form, clearNickname};
};
