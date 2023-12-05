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
import {FormikHelpers, useFormik} from 'formik';
import {useCallback} from 'react';

export type MarkerFormValues = {
  latitude: string;
  longitude: string;
  title: string;
  description: string;
  draggable: boolean;
};

export type MarkerFormKeys = keyof MarkerFormValues;

const markerFormInitialValues = {
  latitude: '',
  longitude: '',
  title: '',
  description: '',
  draggable: false,
};

type MarkerFormParams = {
  onSubmit: (values: MarkerFormValues, formikHelpers: FormikHelpers<MarkerFormValues>) => void | Promise<unknown>;
};

const markerFormValidationSchema = yup.object().shape({
  latitude: yup.number().label('緯度').min(-90).max(90),
  longitude: yup.number().label('経度').min(-180).max(180),
});

export const useMarkerForm = (
  params: MarkerFormParams = {
    onSubmit: () => {},
  },
) => {
  const form = useFormik<MarkerFormValues>({
    initialValues: markerFormInitialValues,
    validationSchema: markerFormValidationSchema,
    validateOnChange: true,
    onSubmit: params.onSubmit,
  });

  const setMarkerFormDraggable = useCallback((value: boolean) => form.setFieldValue('draggable', value), [form]);

  return {
    form,
    setMarkerFormDraggable,
  };
};
