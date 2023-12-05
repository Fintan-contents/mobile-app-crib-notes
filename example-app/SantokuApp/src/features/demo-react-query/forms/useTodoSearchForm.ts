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

export type TodoSearchFormValues = {
  pageNo: string;
};

type TodoSearchFormParams = {
  onSubmit: (
    values: TodoSearchFormValues,
    formikHelpers: FormikHelpers<TodoSearchFormValues>,
  ) => void | Promise<unknown>;
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
