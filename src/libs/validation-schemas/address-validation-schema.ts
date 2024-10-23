import * as yup from 'yup';
import { ValidationMessages } from '../enum/ValidationMessages';
import { zipRegex } from '../consts/app';

export const AddressValidationSchema = yup.object().shape({
  address: yup.string().required(ValidationMessages.REQUIRED),
  firstName: yup.string().required(ValidationMessages.REQUIRED),
  lastName: yup.string().required(ValidationMessages.REQUIRED),
  country: yup.string().required(ValidationMessages.REQUIRED),
  region: yup.string().required(ValidationMessages.REQUIRED),
  city: yup.string().required(ValidationMessages.REQUIRED),
  zip_code: yup.string().required(ValidationMessages.REQUIRED).matches(zipRegex, ValidationMessages.INVALID_ZIP),
  defaultAddress: yup.boolean(),
});
