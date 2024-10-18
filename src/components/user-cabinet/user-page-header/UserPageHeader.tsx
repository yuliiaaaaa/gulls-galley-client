import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import s from './UserPageHeader.module.scss';

export const UserPageHeader = () => {
  const user = useAppSelector((state) => state.auth.user);

  const firstName = user?.first_name;

  return (
    <section className={s.header}>
      <div className={s.header__info}>
        <div className={s.header__welcomeBlock}>
          <p className={s.header__welcome}>Welcome</p>
          <p className={s.header__name}>{firstName}</p>
        </div>
        <p className={s.header__text}>View all your orders and manage your account information.</p>
      </div>
    </section>
  );
};
