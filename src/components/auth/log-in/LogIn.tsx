import { Field, Form, Formik } from 'formik';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { LinkComponent } from '../../utils/link/Link';
import s from './login.module.scss';
import { LogInValidationSchema } from '../../../libs/validation-schemas/log-in-validation-shema';
import { Button } from '../../utils/button/Button';
import cn from 'classnames';

export const LogIn = () => {
  const handleSubmit = () => {};

  const initialValues = { email: '', password: '' };

  return (
    <div>
      <div className={s.login}>
        <div className={s.login__header}>
          <h4 className={s.login__title}>LOGIN</h4>
          <p className={s.login__tip}>Enter your email and password to login</p>
        </div>

        <Formik initialValues={initialValues} validationSchema={LogInValidationSchema} onSubmit={handleSubmit}>
          {({ errors, touched, setFieldValue, isValid, dirty }) => (
            <Form className={s.form}>
              <div className={s.input__block}>
                <Field
                  className={cn(s.input, { [s.error__input]: errors.email && touched.email })}
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
                {errors.email && touched.email ? <div className={s.error}>{errors.email}</div> : null}
              </div>

              <div className={s.input__block}>
                <Field
                  className={cn(s.input, { [s.error__input]: errors.password && touched.password })}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? <div className={s.error}>{errors.password}</div> : null}
              </div>

              <Button className={s.button} isDisabled={!isValid || dirty} title="Create account" />
            </Form>
          )}
        </Formik>

        <div className={s.login__footer}>
          <p className={s.login__tip_footer}>Don’t have an account?</p>
          <LinkComponent children="Sign up" to={AppRoute.SIGN_UP} className={s.login__link} />
        </div>
        <LinkComponent children="Forgot password?" to={'#'} className={`${s.login__link_password} ${s.login__link}`} />
      </div>
    </div>
  );
};
