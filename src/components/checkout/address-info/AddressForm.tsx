import s from './AddressForm.module.scss';
import { Field, Form, Formik } from 'formik';
import { Button } from '../../utils/button/Button';
import cn from 'classnames';
import { CountryKey, RegionKey, cities, countries, regions } from './CountryData';
import { AddressValidationSchema } from '../../../libs/validation-schemas/address-validation-schema';
import { useAddAddressMutation, useGetUserProfileQuery, usePatchAddressMutation } from '../../../redux/user/userApi';
import { UserAddress } from '../../../libs/types/Addresses';

type Props = {
  setIsOpened: (value: boolean | ((prev: boolean) => boolean)) => void;
  onNameChange: (firstName: string, lastName: string) => void;
  initialValues: UserAddress;
};

export const AddressForm: React.FC<Props> = ({ setIsOpened, onNameChange, initialValues }) => {
  const [addAddress] = useAddAddressMutation();
  const { refetch } = useGetUserProfileQuery();
  const [updateAddress] = usePatchAddressMutation();

  const initValues = { firstName: '', lastName: '', ...initialValues };

  const handleSaveData = async (values: typeof initValues) => {
    try {
      const newAddress = {
        first_name: values.firstName,
        last_name: values.lastName,
        address: values.address,
        country: values.country,
        region: values.region,
        city: values.city,
        zip_code: values.zip_code,
        is_default: values.is_default,
      };

      if (initialValues?.id) {
        await updateAddress({ id: initialValues.id, data: newAddress }).unwrap();
        console.log('Address updated successfully!');
      } else {
        await addAddress(newAddress).unwrap();
        console.log('Address added successfully!');
      }

      onNameChange(values.firstName, values.lastName);
      setIsOpened(false);
      refetch();
    } catch (error) {
      console.error('Failed to save address:', error);
    }
  };

  return (
    <div className={s.form__block}>
      <Formik initialValues={initValues} validationSchema={AddressValidationSchema} onSubmit={handleSaveData}>
        {({ errors, touched, isValid, dirty, setFieldValue, values }) => (
          <Form className={s.form}>
            <div className={s.input__block}>
              <Field
                className={cn(s.input, { [s.error__input]: errors.address && touched.address })}
                type="text"
                name="address"
                placeholder="Address (Mazepy line, 13)"
              />
              {errors.address && touched.address && <div className={s.error}>{errors.address}</div>}
            </div>

            <div className={`${s.input__row} ${s.input__row_names}`}>
              <div className={s.input__block}>
                <Field
                  className={cn(s.input, { [s.error__input]: errors.firstName && touched.firstName })}
                  type="text"
                  name="firstName"
                  placeholder="First name"
                />
                {errors.firstName && touched.firstName && <div className={s.error}>{errors.firstName}</div>}
              </div>

              <div className={s.input__block}>
                <Field
                  className={cn(s.input, { [s.error__input]: errors.lastName && touched.lastName })}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
                {errors.lastName && touched.lastName && <div className={s.error}>{errors.lastName}</div>}
              </div>
            </div>

            <div className={s.input__row}>
              <div className={s.input__block}>
                <Field
                  as="select"
                  name="country"
                  value={values.country}
                  className={cn(s.input, s.input__select, { [s.error__input]: errors.country && touched.country })}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const selectedCountry = e.target.value;
                    console.log('Selected Country:', selectedCountry);
                    setFieldValue('country', selectedCountry);
                    setFieldValue('region', '');
                    setFieldValue('city', '');
                  }}
                >
                  <option value="" className={s.input__placeholder}>
                    Country (Ukraine)
                  </option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </Field>
                {errors.country && touched.country && <div className={s.error}>{errors.country}</div>}
              </div>

              <div className={s.input__block}>
                <Field
                  as="select"
                  name="region"
                  value={values.region}
                  className={cn(s.input, s.input__select, { [s.error__input]: errors.region && touched.region })}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const selectedRegion = e.target.value;
                    setFieldValue('region', selectedRegion);
                    setFieldValue('city', '');
                  }}
                >
                  <option value="">Region (state/province/region)</option>
                  {regions[values.country as CountryKey]?.map((region) => (
                    <option key={region.value} value={region.value}>
                      {region.label}
                    </option>
                  )) || <option value="">No regions available</option>}
                </Field>
                {errors.region && touched.region && <div className={s.error}>{errors.region}</div>}
              </div>
            </div>

            <div className={s.input__row}>
              <div className={s.input__block}>
                <Field
                  as="select"
                  name="city"
                  value={values.city}
                  className={cn(s.input, s.input__select, { [s.error__input]: errors.city && touched.city })}
                >
                  <option value="">City (Kharkiv)</option>
                  {cities[values.region as RegionKey]?.map((city) => (
                    <option key={city.value} value={city.value}>
                      {city.label}
                    </option>
                  )) || <option value="">No cities available</option>}
                </Field>
                {errors.city && touched.city && <div className={s.error}>{errors.city}</div>}
              </div>

              <div className={s.input__block}>
                <Field
                  className={cn(s.input, { [s.error__input]: errors.zip_code && touched.zip_code })}
                  type="text"
                  name="zip_code"
                  placeholder="Zip Code (61015)"
                />
                {errors.zip_code && touched.zip_code && <div className={s.error}>{errors.zip_code}</div>}
              </div>
            </div>

            <label htmlFor="defaultAddress" className={s.contacts__checkbox}>
              <Field
                type="checkbox"
                name="is_default"
                className={s.input__checkbox}
                checked={values.is_default}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue('is_default', e.target.checked);
                }}
              />
              <p className={s.contacts__checkbox_text}>Make this default address</p>
            </label>

            <Button
              className={s.btn}
              isDisabled={!isValid || !dirty}
              title={initialValues?.id ? 'Edit' : 'Add Address'}
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
