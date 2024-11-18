import * as yup from 'yup';
import { ValidationMessages } from '../enum/ValidationMessages';

export const CheckoutAddressValidationSchema = yup.object().shape({
  address: yup.boolean().oneOf([true], ValidationMessages.REQUIRED),
});
