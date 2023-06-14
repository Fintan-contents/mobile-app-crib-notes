import {yup} from 'bases/validator';
import {FormikHelpers, useFormik} from 'formik';

export type RegionFormValues = {
  latitude: string;
  longitude: string;
  latitudeDelta: string;
  longitudeDelta: string;
};

export type RegionFormKeys = keyof RegionFormValues;

type RegionFormParams = {
  initialValues: RegionFormValues;
  onSubmit: (values: RegionFormValues, formikHelpers: FormikHelpers<RegionFormValues>) => void | Promise<any>;
};

const defaultRegion = {
  latitude: '34.7024898',
  longitude: '135.494',
  latitudeDelta: '0.005',
  longitudeDelta: '0.002',
};

const regionFormValidationSchema = yup.object().shape({
  latitude: yup.number().label('緯度').required().min(-90).max(90),
  longitude: yup.number().label('経度').required().min(-180).max(180),
  latitudeDelta: yup.number().label('緯度範囲').required().min(0).max(180),
  longitudeDelta: yup.number().label('経度範囲').required().min(0).max(360),
});

export const useRegionForm = (
  params: RegionFormParams = {
    initialValues: defaultRegion,
    onSubmit: () => {},
  },
) => {
  const form = useFormik<RegionFormValues>({
    initialValues: params.initialValues,
    validationSchema: regionFormValidationSchema,
    validateOnChange: true,
    onSubmit: params.onSubmit,
  });

  return {form};
};
