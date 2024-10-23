import { Field, Form, Formik } from 'formik';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { LinkComponent } from '../../utils/link/Link';
import s from './login.module.scss';
import { LogInValidationSchema } from '../../../libs/validation-schemas/log-in-validation-shema';
import { Button } from '../../utils/button/Button';
import cn from 'classnames';
import { useLoginMutation } from '../../../redux/auth/authApi';
import { LogInRequestDto } from '../../../libs/types/auth/LogInRequestDto';
import { useNavigate } from 'react-router';

export const LogIn = () => {
  const [login, { data, isLoading, isError }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: LogInRequestDto) => {
    console.log(values);
    try {
      console.log(await login(values).unwrap());
      navigate(AppRoute.USER_PAGE);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const initialValues = { email: '', password: '' };

  return (
    <div>
      <div className={s.login}>
        <div className={s.login__header}>
          <h4 className={s.login__title}>LOGIN</h4>
          <p className={s.login__tip}>Enter your email and password to login</p>
        </div>

        <Formik initialValues={initialValues} validationSchema={LogInValidationSchema} onSubmit={handleSubmit}>
          {({ errors, touched, isValid, dirty }) => (
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
              
              {isError && <div className={s.error}>Registration failed. Please try again.</div>}

              <Button className={s.button} isDisabled={!isValid || !dirty || isLoading} title="Login" type="submit" />
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
