import { AppRoute } from '../../../libs/enum/app-route-enum';
import { LinkComponent } from '../../utils/link/Link';
import s from './signup.module.scss';

export const SignUp = () => {
  return (
    <div className={s.signup}>
      <div className={s.signup__header}>
        <h4 className={s.signup__title}>Sign up</h4>
        <p className={s.signup__tip}>Please fill in the information below</p>
      </div>

      <div className={s.signup__footer}>
        <p className={s.signup__tip_footer}>Already have an account?</p>
        <LinkComponent children="Login" to={AppRoute.LOG_IN} className={s.signup__link} />
      </div>
    </div>
  );
};
