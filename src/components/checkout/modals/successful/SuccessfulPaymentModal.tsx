import { useState } from 'react';
import { Button } from '../../../utils/button/Button';
import SvgIcon from '../../../utils/svg-icon/SvgIcon';
import s from './successfulPayment.module.scss';
import cn from 'classnames';
import { useNavigate } from 'react-router';
import { AppRoute } from '../../../../libs/enum/app-route-enum';

export const SuccessfulPaymentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  const handleContinueShopping = () => {
    navigate(AppRoute.ROOT);
  };
  return (
    <div className={cn(s.modal, { [s.modal__isClose]: !isOpen })}>
      <div>
        <SvgIcon id="close" onClick={handleClose} className={s.modal__icon} />
        <div className={s.modal__img}>
          <img src="/modals/check-mark-success.png" alt="unsuccess"  className={s.img}/>
        </div>

        <div className={s.modal__info}>
          <p className={s.modal__text}>Payment Successful!</p>
          <p className={s.modal__subtext}>We’ve received your payment and your order is being processed</p>
        </div>
      </div>

      <div className={s.modal__orderInfo}>
        <div className={s.modal__orderInfo_row}>
          <p className={s.modal__orderInfo_text}>Order Number:</p>
          <p>12</p>
        </div>

        <div className={s.modal__orderInfo_row}>
          <p className={s.modal__orderInfo_text}>Total Amount Paid:</p>
          <p>{` €`}</p>
        </div>

        <div className={s.modal__orderInfo_row}>
          <p className={s.modal__orderInfo_text}>Date & Time:</p>
          <p className={s.modal__orderInfo_info}>56</p>
        </div>
      </div>

      <div className={s.btn__wrapper}>
        <Button className={s.btn} isDisabled={false} title="Continue shopping" onClick={handleContinueShopping} />
      </div>
    </div>
  );
};
