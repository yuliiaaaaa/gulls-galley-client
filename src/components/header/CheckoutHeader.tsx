import { Logo } from '../logo/Logo';
import s from './CheckoutHeader.module.scss';

export const CheckoutHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.header__logo_wrapper}>
        <Logo className={s.header__logo} />
      </div>
    </div>
  );
};
