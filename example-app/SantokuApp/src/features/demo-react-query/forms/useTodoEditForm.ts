import {m} from 'bases/message/Message';
import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';
import {useCallback, useState} from 'react';

export type TodoEditFormValues = {
  title: string;
  description: string;
};

type TodoEditFormParams = {
  onSubmit: (values: TodoEditFormValues, formikHelpers: FormikHelpers<TodoEditFormValues>) => void | Promise<any>;
};

export const useTodoEditForm = (params: TodoEditFormParams = {onSubmit: () => {}}) => {
  const [initialValues, setInitialValues] = useState({
    title: '',
    description: '',
  });
  const form = useFormik<TodoEditFormValues>({
    initialValues,
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      title: yup.string().label(m('タイトル')).required(),
      description: yup.string().label(m('説明')).required(),
    }),
    validateOnChange: false,
    onSubmit: params.onSubmit,
  });

  const clearTitle = useCallback(() => form.setFieldValue('title', ''), [form]);
  const clearDescription = useCallback(() => form.setFieldValue('description', ''), [form]);

  return {form, clearTitle, clearDescription, initialValues, setInitialValues};
};
