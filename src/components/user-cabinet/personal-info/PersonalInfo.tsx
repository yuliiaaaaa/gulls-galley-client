import { useState } from 'react';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { LinkComponent } from '../../utils/link/Link';
import s from './personalInfo.module.scss';
import { ChangePassword } from './ChangePassword';
import { useGetUserProfileQuery, usePatchUserProfileMutation } from '../../../redux/user/userApi';
import { Field, Form, Formik } from 'formik';
import { PersonalInfoInCabinetValidationSchema } from '../../../libs/validation-schemas/personal-info-in-user-cabinet-validation-schema';

export const PersonalInfo = () => {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const { data: user, isLoading, isError } = useGetUserProfileQuery();
  const [updateUserDate] = usePatchUserProfileMutation();
  const [serverError, setServerError] = useState('');

  const initialValues = {
    fullName: `${user?.first_name || ''} ${user?.last_name || ''}`,
    email: user?.email || '',
    phoneNumber: user?.phone_number || '',
  };

  const handlePasswordOpen = () => {
    setIsPasswordChanged((prev) => !prev);
  };

  const handleSubmit = async (values: { fullName: string; email: string; phoneNumber: string }) => {
    const [firstName, lastName] = values.fullName.split(' ');
    try {
      await updateUserDate({ ...values, first_name: firstName, last_name: lastName }).unwrap();
      setServerError(''); 
    } catch (error) {
      setServerError('Failed to update profile');
    }
  };

  return (
    <div className={s.info}>
      <h1 className={s.info__title}>Personal Information</h1>

      {isLoading && <p>Loading...</p>}
      {!isLoading && !isError && (
        <Formik
          initialValues={initialValues}
          validationSchema={PersonalInfoInCabinetValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <Form className={s.info__inputs} onSubmit={handleSubmit}>
              <div>
                <Field
                  className={s.info__input}
                  name="fullName"
                  placeholder="Full Name"
                  onBlur={() => {
                    handleSubmit(); 
                  }}
                  onChange={handleChange} 
                />
                {errors.fullName && touched.fullName && <div>{errors.fullName}</div>}
              </div>

              <div>
                <Field
                  className={s.info__input}
                  name="email"
                  placeholder="Email"
                  type="email"
                  onBlur={() => {
                    handleSubmit(); 
                  }}
                  onChange={handleChange} 
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>

              <div>
                <Field
                  className={s.info__input}
                  name="phoneNumber"
                  placeholder="Phone number"
                  onBlur={() => {
                    handleSubmit(); // Trigger submission on blur
                  }}
                  onChange={handleChange} // Update state on change
                />
                {errors.phoneNumber && touched.phoneNumber && <div>{errors.phoneNumber}</div>}
              </div>

              {serverError && <p>{serverError}</p>}
            </Form>
          )}
        </Formik>
      )}

      <p className={s.info__link} onClick={handlePasswordOpen}>
        Change password
      </p>

      {isPasswordChanged && <ChangePassword />}
    </div>
  );
};
