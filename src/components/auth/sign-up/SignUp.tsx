import { Field, Form, Formik } from 'formik';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { LinkComponent } from '../../utils/link/Link';
import s from './signup.module.scss';
import { SignInValidationSchema } from '../../../libs/validation-schemas/sign-up-validation-schems';
import { Button } from '../../utils/button/Button';
import cn from 'classnames';

export const SignUp = () => {
  const handleSubmit = () => {};

  const initialValues = { firstName: '', lastName: '', email: '', password: '' };

  return (
    <div className={s.signup}>
      <div className={s.signup__header}>
        <h4 className={s.signup__title}>Sign up</h4>
        <p className={s.signup__tip}>Please fill in the information below</p>
      </div>

      <Formik initialValues={initialValues} validationSchema={SignInValidationSchema} onSubmit={handleSubmit}>
        {({ errors, touched, setFieldValue, isValid, dirty }) => (
          <Form className={s.form}>
            <div className={s.input__block}>
              <Field
                className={cn(s.input, { [s.error__input]: errors.firstName && touched.firstName })}
                type="input"
                name="firstName"
                placeholder="First Name"
              />
              {errors.firstName && touched.firstName ? <div className={s.error}>{errors.firstName}</div> : null}
            </div>

            <div className={s.input__block}>
              <Field
                className={cn(s.input, { [s.error__input]: errors.lastName && touched.lastName })}
                type="input"
                name="lastName"
                placeholder="Last Name"
              />
              {errors.lastName && touched.lastName ? <div className={s.error}>{errors.lastName}</div> : null}
            </div>

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

      <div className={s.signup__footer}>
        <p className={s.signup__tip_footer}>Already have an account?</p>
        <LinkComponent children="Login" to={AppRoute.LOG_IN} className={s.signup__link} />
      </div>
    </div>
  );
};
