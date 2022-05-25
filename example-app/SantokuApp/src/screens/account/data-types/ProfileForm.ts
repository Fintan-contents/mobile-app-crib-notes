import {m} from 'framework/message';
import {yup} from 'framework/validator';

export type ProfileForm = {
  nickname: string;
};

export const profileFormInitialValues = {
  nickname: '',
};

export const profileFormValidationSchema = yup.object().shape({
  nickname: yup.string().label(m('ニックネーム')).required().max(50),
});
