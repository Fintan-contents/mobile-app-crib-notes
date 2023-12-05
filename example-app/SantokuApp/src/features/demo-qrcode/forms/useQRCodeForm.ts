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

import {yup} from 'bases/validator';
import {useFormik} from 'formik';
import {useCallback, useMemo} from 'react';

import {ErrorCorrectionLevelType} from '../types/ErrorCorrectionLevel';

type FormValues = {
  data: string;
  errorCorrectionLevel: ErrorCorrectionLevelType;
  size: string;
};

export const formInitialValues: FormValues = {
  data: '0123456789',
  errorCorrectionLevel: 'M',
  size: '200',
};

const nop = () => {};
export const useQRCodeForm = (maxSize: number) => {
  const formValidationSchema = useMemo(
    () =>
      yup.object().shape({
        data: yup.string().label('データ').required(),
        size: yup.number().label('サイズ').required().max(maxSize).typeError('${label}は数値を入力してください。'),
      }),
    [maxSize],
  );

  const form = useFormik({
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
    validateOnChange: true,
    onSubmit: nop,
  });

  const setFormSize = useCallback(async (value: string) => form.setFieldValue('size', value, true), [form]);

  return {form, setFormSize};
};
