import { LogIn } from '../../components/auth/log-in/LogIn';
import s from './loginPage.module.scss';

export const LogInPage = () => {
  return (
    <div className={`${s.login} ${s.container}`}>
      <LogIn />
    </div>
  );
};
