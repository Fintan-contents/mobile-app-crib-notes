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

import {Format} from 'bases/ui/barcode/Barcode';
import {yup} from 'bases/validator';
import {useFormik} from 'formik';
import {useCallback} from 'react';

import {BarcodeCharacter} from '../types/BarcodeCharacter';

type FormValues = {
  format: Format;
  code128Data: CODE128DataSet[];
  code128AutoData: string;
  lineWidth: string;
};

export type CODE128DataSet = {
  character: BarcodeCharacter;
  value: string;
};

const formValidationSchema = yup.object().shape({
  code128Data: yup.array().of(
    yup
      .object()
      .test('notContinuousSameCharacter', '前のキャラクタコードと違う値を指定してください。', function () {
        /**
         * ここでは、code128Dataの配列全体を取得して、前後のcharacterが同じではないかをチェックしています。
         * ↓のように、characterの中でこの処理を実施すると、code128Dataの配列全体を取得できません。（自身の値とparentの値は取れますが、parentのparentは取得できません）
         * yup.object().shape({character: yup.string().test()})
         * そのため、この場所でtestを実施しています。
         */
        const options = this.options;
        // parentはany型なのでESLintエラーが発生しますが、CODE128DataSet[]型であることが自明なのでキャストします
        const parent = this.parent as CODE128DataSet[];
        if ('index' in options) {
          // Arrayの場合はオプションにindexが存在する
          const index = options.index as number;
          if (index > 0) {
            if (parent[index].character === parent[index - 1].character) {
              // createErrorを使用しないと、code128Data[${index}]というキーでエラーが生成されます。
              // ここで実施しているのはcharacterに対するバリデーションなので、code128Data[${index}].characterというキーでエラーを生成するようにしています。
              return this.createError({path: `code128Data[${index}].character`});
            }
          }
        }
        return true;
      })
      .shape({
        value: yup
          .string()
          .when('character', {
            is: 'CODE-A',
            // ASCII characters 00 to 95 (0–9, A–Z and control codes)
            // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L35
            then: () =>
              yup
                .string()
                .label('データ')
                .required()
                .matches(/^[\x00-\x5F]+$/, 'CODE-Aでは使用できない文字が含まれています。'),
          })
          .when('character', {
            is: 'CODE-B',
            // ASCII characters 32 to 127 (0–9, A–Z, a–z)
            // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L38
            then: () =>
              yup
                .string()
                .label('データ')
                .required()
                .matches(/^[\x20-\x7F]+$/, 'CODE-Bでは使用できない文字が含まれています。'),
          })
          .when('character', {
            is: 'CODE-C',
            // 00–99 (encodes two digits with a single code point)
            // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/constants.js#L42
            then: () =>
              yup
                .string()
                .label('データ')
                .required()
                .matches(
                  /^([0-9]{2})+$/,
                  'CODE-Cでは使用できない文字が含まれています。もしくは桁数が偶数ではありません。',
                ),
          }),
      }),
  ),
  code128AutoData: yup
    .string()
    .label('データ')
    .required()
    // ASCII value ranges 0-127, 200-211
    // https://github.com/lindell/JsBarcode/blob/master/src/barcodes/CODE128/CODE128_AUTO.js#L7
    .matches(/^[\x00-\x7F\xC8-\xD3]+$/, 'CODE128では使用できない文字が含まれています'),
  lineWidth: yup.number().label('ライン幅').required().min(1).max(100).typeError('${label}は数値を入力してください。'),
});

export const formInitialValues: FormValues = {
  format: 'CODE128',
  code128Data: [{character: 'CODE-A', value: '0123456789'}],
  code128AutoData: '0123456789',
  lineWidth: '2',
};

const nop = () => {};
export const useBarcodeForm = () => {
  const form = useFormik({
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
    validateOnChange: true,
    onSubmit: nop,
  });

  const setFormLineWidth = useCallback((value: string) => form.setFieldValue('lineWidth', value), [form]);
  const setFormCode128Character = useCallback(
    (value: string, index: number) => form.setFieldValue(`code128Data[${index}].character`, value),
    [form],
  );
  const setFormCode128Value = useCallback(
    (value: string, index: number) => form.setFieldValue(`code128Data[${index}].value`, value),
    [form],
  );
  const setFormCode128AutoData = useCallback((value: string) => form.setFieldValue('code128AutoData', value), [form]);
  const addCode128DataField = useCallback(async () => {
    const code128Data = [
      ...form.values.code128Data,
      {
        character: formInitialValues.code128Data[0].character,
        value: '',
      },
    ];
    await form.setFieldValue('code128Data', code128Data);
  }, [form]);
  const removeCode128DataField = useCallback(
    async (index: number) => {
      const values = [...form.values.code128Data];
      values.splice(index, 1);
      const errors = await form.setFieldValue('code128Data', values);
      return {values, errors};
    },
    [form],
  );

  return {
    form,
    setFormLineWidth,
    setFormCode128Character,
    setFormCode128Value,
    setFormCode128AutoData,
    addCode128DataField,
    removeCode128DataField,
  };
};
