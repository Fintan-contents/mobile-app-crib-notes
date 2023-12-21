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
import {useCallback, useState} from 'react';

export type TodoEditFormValues = {
  title: string;
  description: string;
};

type TodoEditFormParams = {
  onSubmit: (values: TodoEditFormValues, formikHelpers: FormikHelpers<TodoEditFormValues>) => void | Promise<unknown>;
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
