import { AppRoute } from '../../../libs/enum/app-route-enum';
import { LinkComponent } from '../../utils/link/Link';
import s from './login.module.scss';

export const LogIn = () => {
  return (
    <div>
      <div className={s.login}>
        <div className={s.login__header}>
          <h4 className={s.login__title}>LOGIN</h4>
          <p className={s.login__tip}>Enter your email and password to login</p>
        </div>

        <div className={s.login__footer}>
          <p className={s.login__tip_footer}>Don’t have an account?</p>
          <LinkComponent children="Sign up" to={AppRoute.SIGN_UP} className={s.login__link} />
        </div>
        <LinkComponent children="Forgot password?" to={'#'} className={`${s.login__link_password} ${s.login__link}`} />
      </div>
    </div>
  );
};
