import {FormikProps} from 'formik';

export const isValidForm = async (form: FormikProps<unknown>) => !Object.keys(await form.validateForm()).length;
