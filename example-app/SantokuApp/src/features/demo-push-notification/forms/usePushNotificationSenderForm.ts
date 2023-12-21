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
import {useCallback} from 'react';

import {Data} from '../types/Data';

export type FormValues = {
  notificationTitle: string;
  notificationBody: string;
  data: Data[];
  badge: string;
  collapseId: string;
  contentAvailable: boolean;
  priority?: string;
  interruptionLevel?: string;
  relevanceScore: string;
  notificationCount: string;
  collapseKey: string;
  channelId?: string;
};

const formValidationSchema = yup.object().shape({
  badge: yup.number().label('バッチ').min(0).integer().typeError('${label}は数値を入力してください。'),
  relevanceScore: yup.number().label('RelevanceScore').min(0).max(1).typeError('${label}は数値を入力してください。'),
  notificationCount: yup.number().label('通知数').min(0).integer().typeError('${label}は数値を入力してください。'),
});

export const formInitialValues: FormValues = {
  notificationTitle: '',
  notificationBody: '',
  data: [{key: '', value: ''}],
  badge: '',
  collapseId: '',
  contentAvailable: false,
  relevanceScore: '',
  notificationCount: '',
  collapseKey: '',
};

const nop = () => {};
export const usePushNotificationSenderForm = () => {
  const form = useFormik({
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
    validateOnChange: true,
    onSubmit: nop,
  });

  const setFormContentAvailable = useCallback(
    async (value: boolean) => {
      // form.handleChangeだとstring型の更新しかできないので、setFieldValueを使用する
      await form.setFieldValue('contentAvailable', value);
    },
    [form],
  );

  const setFormPriority = useCallback(
    async (value?: string) => {
      await form.setFieldValue('priority', value);
    },
    [form],
  );

  const setFormInterruptionLevel = useCallback(
    async (value?: string) => {
      await form.setFieldValue('interruptionLevel', value);
    },
    [form],
  );

  const setFormChannel = useCallback(
    async (value?: string) => {
      await form.setFieldValue('channelId', value);
    },
    [form],
  );

  const addDataField = useCallback(async () => {
    const data = [
      ...form.values.data,
      {
        key: '',
        value: '',
      },
    ];
    await form.setFieldValue('data', data);
  }, [form]);

  const removeDataField = useCallback(
    async (index: number) => {
      const values = [...form.values.data];
      values.splice(index, 1);
      await form.setFieldValue('data', values);
    },
    [form],
  );

  return {
    form,
    setFormContentAvailable,
    setFormPriority,
    setFormInterruptionLevel,
    setFormChannel,
    addDataField,
    removeDataField,
  };
};
