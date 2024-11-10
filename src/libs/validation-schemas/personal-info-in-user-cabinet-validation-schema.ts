import * as yup from 'yup';
import { ValidationMessages } from '../enum/ValidationMessages';
import { emailRegex, phoneRegex, twoWordsRegex } from '../consts/app';

export const PersonalInfoInCabinetValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .matches(emailRegex, ValidationMessages.EMAIL_FORMAT_NOT_CORRECT),
  fullName: yup
    .string()
    .required(ValidationMessages.REQUIRED)
    .matches(twoWordsRegex, ValidationMessages.FULLNAME_REQUIRED),
  phone_number: yup.string().optional().matches(phoneRegex, ValidationMessages.PHONE_FORMAT_NOT_CORRECT),
});
