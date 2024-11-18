import { SignUp } from '../../components/auth/sign-up/SignUp';
import s from './signup.module.scss';

export const SignUpPage = () => {
  return (
    <div className={`${s.signup} ${s.container}`}>
      <SignUp />
    </div>
  );
};
