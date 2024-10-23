import { useNavigate } from 'react-router';
import { Button } from '../../../utils/button/Button';
import s from './unsuccessfulPayment.module.scss';
import cn from 'classnames';
import { AppRoute } from '../../../../libs/enum/app-route-enum';

export const UnSuccessfulPaymentModal = () => {
  const navigate = useNavigate();

  return (
    <div className={cn(s.modal)}>
      <div className={s.modal__img}>
        <img src="/modals/check-mark-unsuccess.png" alt="unsuccess" className={s.img} />
      </div>

      <div className={s.modal__info}>
        <p className={s.modal__oops}>Oops!</p>
        <p className={s.modal__text}>Your Payment Was Unsuccessful</p>
        <p className={s.modal__subtext}>Unfortunately, we were unable to process your payment</p>
      </div>

      <div className={s.btn__wrapper}>
        <Button className={s.btn} isDisabled={false} title="Try again" onClick={() => navigate(AppRoute.CHECKOUT)} />
      </div>
    </div>
  );
};
