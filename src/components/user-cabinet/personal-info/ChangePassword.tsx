import { Field, Form, Formik } from 'formik';
import { Button } from '../../utils/button/Button';
import s from './changePassword.module.scss';
import cn from 'classnames';

export const ChangePassword = () => {
  const handleSubmit = async () => {
    try {
    } catch (e) {
      console.log('Error during registration:', e);
    }
  };

  const initialValues = { current_password: '', new_password: '', new_password_confirm: '' };

  return (
    <div className={s.form}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ errors, touched, isValid, dirty }) => (
          <Form className={s.form}>
            <div className={s.input__block}>
              <Field
                className={cn(s.input, { [s.error__input]: errors.current_password && touched.current_password })}
                type="input"
                name="current_password"
                placeholder="Current Password"
              />
              {errors.current_password && touched.current_password ? (
                <div className={s.error}>{errors.current_password}</div>
              ) : null}
            </div>

            <div className={s.input__block}>
              <Field
                className={cn(s.input, { [s.error__input]: errors.new_password && touched.new_password })}
                type="input"
                name="new_password"
                placeholder="New Password"
              />
              {errors.new_password && touched.new_password ? (
                <div className={s.error}>{errors.new_password}</div>
              ) : null}
            </div>

            <div className={s.input__block}>
              <Field
                className={cn(s.input, {
                  [s.error__input]: errors.new_password_confirm && touched.new_password_confirm,
                })}
                type="email"
                name="new_password_confirm"
                placeholder="Confirm New Password"
              />
              {errors.new_password_confirm && touched.new_password_confirm ? (
                <div className={s.error}>{errors.new_password_confirm}</div>
              ) : null}
            </div>

            <Button className={s.button} isDisabled={!isValid || !dirty} title="Save" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
