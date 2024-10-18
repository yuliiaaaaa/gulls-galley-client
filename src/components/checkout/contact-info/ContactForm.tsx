import { Field, Form, Formik } from 'formik';
import { Button } from '../../utils/button/Button';
import s from './ContactForm.module.scss';
import cn from 'classnames';
import { ContactDataValidationSchema } from '../../../libs/validation-schemas/contactData-validation-schema';

type Props = {
  initialContactData: {
    name: string;
    email: string;
    phone: string;
  };
  onSave: (values: { name: string; email: string; phone: string }) => void;
};

export const ContactForm: React.FC<Props> = ({ initialContactData, onSave }) => {
  const initialValues = {
    name: initialContactData.name,
    email: initialContactData.email,
    phone: initialContactData.phone,
  };

  const handleSaveData = (values: typeof initialValues) => {
    onSave(values);
  };

  return (
    <div className={s.form__block}>
      <Formik initialValues={initialValues} validationSchema={ContactDataValidationSchema} onSubmit={handleSaveData}>
        {({ errors, touched, isValid, dirty }) => (
          <Form className={s.form}>
            <div className={s.input__block}>
              <Field
                className={cn(s.input, { [s.error__input]: errors.name && touched.name })}
                type="text"
                name="name"
                placeholder="Full name"
              />
              {errors.name && touched.name ? <div className={s.error}>{errors.name}</div> : null}
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
                className={cn(s.input, { [s.error__input]: errors.phone && touched.phone })}
                type="tel"
                name="phone"
                placeholder="Phone number"
              />
              {errors.phone && touched.phone ? <div className={s.error}>{errors.phone}</div> : null}
            </div>

            <Button className={s.btn} isDisabled={!isValid || !dirty} title="Save" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
