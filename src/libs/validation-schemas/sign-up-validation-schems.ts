import * as yup from 'yup';
import { ValidationMessages } from '../enum/ValidationMessages';
import { MIN_PASSWORD_LENGTH, emailRegex } from '../consts/app';

export const SignInValidationSchema = yup.object().shape({
  firstName: yup.string().required(ValidationMessages.REQUIRED),
  lastName: yup.string().required(ValidationMessages.REQUIRED),
  email: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .matches(emailRegex, ValidationMessages.EMAIL_FORMAT_NOT_CORRECT),
  password: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .min(MIN_PASSWORD_LENGTH, ValidationMessages.PASSWORD_LENGTH_MIN),
  confirmPassword: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .min(MIN_PASSWORD_LENGTH, ValidationMessages.PASSWORD_LENGTH_MIN)
    .oneOf([yup.ref('password')], ValidationMessages.PASSWORDS_NOT_MATCHED),
});
