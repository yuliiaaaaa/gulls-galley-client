import * as yup from 'yup';
import { ValidationMessages } from '../enum/ValidationMessages';
import { emailRegex, phoneRegex } from '../consts/app';

export const ContactDataValidationSchema = yup.object().shape({
  name: yup.string().required(ValidationMessages.REQUIRED),
  email: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .matches(emailRegex, ValidationMessages.EMAIL_FORMAT_NOT_CORRECT),
  phone_number: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .matches(phoneRegex, ValidationMessages.PHONE_FORMAT_NOT_CORRECT),
});
