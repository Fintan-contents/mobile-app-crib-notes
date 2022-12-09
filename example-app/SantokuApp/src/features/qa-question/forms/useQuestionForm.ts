import {m} from 'bases/message/Message';
import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';
import {useCallback} from 'react';

export type QuestionFormValues = {
  title: string;
  content: string;
  tags: string[];
  beginner: boolean;
};

const questionFormInitialValues: QuestionFormValues = {
  title: '',
  content: '',
  tags: [],
  beginner: false,
};

const questionFormValidationSchema = yup.object().shape({
  title: yup.string().label(m('タイトル')).required(),
  content: yup.string().label(m('コメント')).required(),
});

type QuestionFormParams = {
  onSubmit: (values: QuestionFormValues, formikHelpers: FormikHelpers<QuestionFormValues>) => void | Promise<any>;
};
export const useQuestionForm = (params: QuestionFormParams = {onSubmit: () => {}}) => {
  const form = useFormik({
    initialValues: questionFormInitialValues,
    validationSchema: questionFormValidationSchema,
    validateOnChange: false,
    onSubmit: params.onSubmit,
  });

  const reset = useCallback(() => {
    form.resetForm();
  }, [form]);
  const setContent = useCallback((value: string) => form.setFieldValue('content', value), [form]);
  const setTags = useCallback((value: string[]) => form.setFieldValue('tags', value), [form]);
  const setBeginner = useCallback((value: boolean) => form.setFieldValue('beginner', value), [form]);
  const clearContent = useCallback(() => setContent(''), [setContent]);

  return {form, reset, setContent, setTags, setBeginner, clearContent};
};
