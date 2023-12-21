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
  onSubmit: (values: QuestionFormValues, formikHelpers: FormikHelpers<QuestionFormValues>) => void | Promise<unknown>;
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
