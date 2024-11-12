import { useState } from 'react';
import s from './personalInfo.module.scss';
import { ChangePassword } from './ChangePassword';
import { useGetUserProfileQuery, usePatchUserProfileMutation } from '../../../redux/user/userApi';
import { Field, Form, Formik } from 'formik';
import { PersonalInfoInCabinetValidationSchema } from '../../../libs/validation-schemas/personal-info-in-user-cabinet-validation-schema';
import { Button } from '../../utils/button/Button';

export const PersonalInfo = () => {
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const { data: user, isLoading, isError } = useGetUserProfileQuery();
  const [updateUserDate] = usePatchUserProfileMutation();
  const [serverError, setServerError] = useState('');

  const initialValues = {
    fullName: `${user?.first_name || ''} ${user?.last_name || ''}`,
    email: user?.email || '',
    phone_number: user?.phone_number || '',
  };

  const handlePasswordOpen = () => {
    setIsPasswordChanged((prev) => !prev);
  };

  const handleSubmit = async (values: { fullName: string; email: string; phone_number: string }) => {
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
          {({ errors, touched, handleSubmit, isValid, dirty }) => (
            <Form className={s.info__inputs} onSubmit={handleSubmit}>
              <div>
                <Field className={s.info__input} name="fullName" placeholder="Full Name" />
                {errors.fullName && touched.fullName && <div className={s.err}>{errors.fullName}</div>}
              </div>

              <div>
                <Field className={s.info__input} name="email" placeholder="Email" type="email" />
                {errors.email && touched.email && <div className={s.err}>{errors.email}</div>}
              </div>

              <div>
                <Field className={s.info__input} name="phone_number" placeholder="Phone number" />
                {errors.phone_number && touched.phone_number && <div className={s.err}>{errors.phone_number}</div>}
              </div>

              {serverError && <p className={s.err}>{serverError}</p>}

              <Button className={s.btn} title="Save" type="submit" isDisabled={false} />
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
