import { useState, useCallback, useMemo, useEffect } from 'react';

export enum CommonErrorKey {
  COMMON = 'common',
}

type Touched<T extends string> = { [key in T]: boolean };
type Dirty<T extends string> = { [key in T]: boolean };
type BaseErrors = { [CommonErrorKey.COMMON]?: string[] };
export type Errors<T extends string> = { [key in T]: string[] } & BaseErrors;
export type ErrorsKey<T extends string> = T | keyof BaseErrors;
export type Values<T extends string> = { [key in T]: string };

export function useValidation<T extends string>(initialValues: Values<T>, validate: (values: Values<T>) => Errors<T>) {
  const keys = useMemo(() => Object.keys(initialValues), [initialValues]);
  const initialTouched: Touched<T> = keys.reduce((result, key) => ({ ...result, ...{ [key]: false } }), {});
  const initialDirty: Dirty<T> = keys.reduce((result, key) => ({ ...result, ...{ [key]: false } }), {});

  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState(initialTouched);
  const [dirty, setDirty] = useState(initialDirty);
  const [errors, setErrors] = useState<Errors<T>>(keys.reduce((result, key) => ({ ...result, ...{ [key]: [] } }), { common: [] }));

  const touchedSome = useMemo(() => {
    return Object.keys(touched).some((key: T) => touched[key]);
  }, [touched]);

  const dirtySome = useMemo(() => {
    return Object.keys(dirty).some((key: T) => dirty[key]);
  }, [dirty]);

  const invalid = useMemo(() => {
    return !!Object.keys(errors).find((key) => !!errors[key].find((e) => !!e));
  }, [errors]);

  const validateAll = (newValues: Values<T>) => {
    const removeCommonError = touchedSome || dirtySome;
    const commonError = errors[CommonErrorKey.COMMON] ? { [CommonErrorKey.COMMON]: errors[CommonErrorKey.COMMON] } : {};
    const newCommonError = removeCommonError ? {} : commonError;

    setErrors({ ...validate(newValues), ...newCommonError });
  };

  useEffect(() => {
    validateAll(values);
  }, [values]);

  const onChangeText = useCallback(
    (key: T, newValue: string) => {
      setDirty({ ...dirty, ...{ [key]: true } });
      setValues({ ...values, ...{ [key]: newValue } });
    },
    [dirty, values]
  );

  const onBlur = useCallback(
    (key: T) => {
      setTouched({ ...touched, ...{ [key]: true } });
    },
    [touched]
  );

  const setCommonErrors = useCallback(
    (messages: string[]) => {
      setErrors({ ...errors, ...{ [CommonErrorKey.COMMON]: messages } });
    },
    [errors]
  );

  const setError = useCallback(
    (key: T, messages: string[]) => {
      setErrors({ ...errors, ...{ [key]: messages } });
    },
    [errors]
  );

  const hasError = useCallback(
    (key: ErrorsKey<T>) => {
      if (Array.isArray(errors[key])) {
        return errors[key].length > 0;
      }

      return !!errors[key];
    },
    [errors]
  );

  const shouldShowErrorMessage = useCallback(
    (key: ErrorsKey<T>) => {
      if (key === CommonErrorKey.COMMON) {
        return hasError(key);
      }

      return hasError(key) && touched[key] && dirty[key];
    },
    [dirty, hasError, touched]
  );

  const clearStatus = useCallback(() => {
    setTouched(initialTouched);
    setDirty(initialDirty);
  }, [initialDirty, initialTouched]);

  return {
    errors,
    setCommonErrors,
    setError,
    invalid,
    values,
    onBlur,
    onChangeText,
    hasError,
    shouldShowErrorMessage,
    clearStatus,
  };
}
