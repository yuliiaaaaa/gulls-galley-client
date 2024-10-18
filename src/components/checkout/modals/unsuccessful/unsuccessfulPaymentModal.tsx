import { useState } from 'react';
import { Button } from '../../../utils/button/Button';
import SvgIcon from '../../../utils/svg-icon/SvgIcon';
import s from './unsuccessfulPayment.module.scss';
import cn from 'classnames';

export const UnSuccessfulPaymentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={cn(s.modal, { [s.modal__isClose]: !isOpen })}>
      <SvgIcon id="close" onClick={handleClose} className={s.modal__icon} />

      <div className={s.modal__img}>
        <img src="/modals/check-mark-unsuccess.png" alt="unsuccess" className={s.img} />
      </div>

      <div className={s.modal__info}>
        <p className={s.modal__oops}>Oops!</p>
        <p className={s.modal__text}>Your Payment Was Unsuccessful</p>
        <p className={s.modal__subtext}>Unfortunately, we were unable to process your payment</p>
      </div>

      <div className={s.btn__wrapper}>
        <Button className={s.btn} isDisabled={false} title="Try again" onClick={handleClose} />
      </div>
    </div>
  );
};
