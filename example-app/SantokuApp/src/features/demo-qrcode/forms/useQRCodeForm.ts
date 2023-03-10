import {yup} from 'bases/validator';
import {useFormik} from 'formik';
import {useCallback, useMemo} from 'react';

import {ErrorCorrectionLevelType} from '../types/errorCorrectionLevel';

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
        size: yup.number().label('サイズ').required().max(maxSize).typeError('${path}は数値を入力してください。'),
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
