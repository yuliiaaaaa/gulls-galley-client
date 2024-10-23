import * as yup from 'yup';
import { ValidationMessages } from '../enum/ValidationMessages';
import { MIN_PASSWORD_LENGTH, emailRegex } from '../consts/app';

export const LogInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .matches(emailRegex, ValidationMessages.EMAIL_FORMAT_NOT_CORRECT),
  password: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .min(MIN_PASSWORD_LENGTH, ValidationMessages.PASSWORD_LENGTH_MIN),
});
