import {m} from 'bases/message/Message';
import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';
import {useCallback} from 'react';

export type TodoSearchFormValues = {
  pageNo: string;
};

type TodoSearchFormParams = {
  onSubmit: (values: TodoSearchFormValues, formikHelpers: FormikHelpers<TodoSearchFormValues>) => void | Promise<any>;
};

export const useTodoSearchForm = (params: TodoSearchFormParams = {onSubmit: () => {}}) => {
  const form = useFormik<TodoSearchFormValues>({
    initialValues: {
      pageNo: '',
    },
    validationSchema: yup.object().shape({
      pageNo: yup.number().label(m('ページ番号')).required(),
    }),
    validateOnChange: false,
    onSubmit: params.onSubmit,
  });

  const clearPageNo = useCallback(() => form.setFieldValue('pageNo', ''), [form]);

  return {form, clearPageNo};
};
