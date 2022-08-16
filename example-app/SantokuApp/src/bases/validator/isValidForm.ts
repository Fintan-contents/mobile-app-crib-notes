import {FormikProps} from 'formik';

export const isValidForm = async (form: FormikProps<any>) => !Object.keys(await form.validateForm()).length;
