import { useState } from 'react';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { LinkComponent } from '../../utils/link/Link';
import s from './personalInfo.module.scss';
import { ChangePassword } from './ChangePassword';
import { useGetUserProfileQuery, usePatchUserProfileMutation } from '../../../redux/user/userApi';
import { Field, Form, Formik } from 'formik';

export const PersonalInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const { data: user, isLoading, isError } = useGetUserProfileQuery();
  const [updateUserDate]=usePatchUserProfileMutation();
  const userName = `${user?.first_name || ''} ${user?.last_name || ''}`.trim();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordOpen = () => {
    setIsPasswordChanged((prev) => !prev);
  };

  return (
    <div className={s.info}>
      <h1 className={s.info__title}>Personal Information</h1>

      {isLoading && <p>Loading...</p>}
      {/* {!isLoading && !isError && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={s.info__inputs}>
              <div>
                <Field
                  className={s.info__input}
                  name="fullName"
                  placeholder="Full Name"
                />
                {errors.fullName && touched.fullName && <div>{errors.fullName}</div>}
              </div>

              <div>
                <Field
                  className={s.info__input}
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>

              <div>
                <Field
                  className={s.info__input}
                  name="phoneNumber"
                  placeholder="Phone number"
                />
                {errors.phoneNumber && touched.phoneNumber && <div>{errors.phoneNumber}</div>}
              </div>

              <button type="submit">Save Changes</button>
            </Form>
          )}
        </Formik>
      )} */}

      <p className={s.info__link} onClick={handlePasswordOpen}>
        Change password
      </p>

      {isPasswordChanged && <ChangePassword />}
    </div>
  );
};
