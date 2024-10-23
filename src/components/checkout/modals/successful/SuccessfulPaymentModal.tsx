import { Button } from '../../../utils/button/Button';
import s from './successfulPayment.module.scss';
import cn from 'classnames';
import { useNavigate } from 'react-router';
import { AppRoute } from '../../../../libs/enum/app-route-enum';

export const SuccessfulPaymentModal = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate(AppRoute.ROOT);
  };

  return (
    <div className={cn(s.modal)}>
      <div>
        <div className={s.modal__img}>
          <img src="/modals/check-mark-success.png" alt="unsuccess" className={s.img} />
        </div>

        <div className={s.modal__info}>
          <p className={s.modal__text}>Payment Successful!</p>
          <p className={s.modal__subtext}>We’ve received your payment and your order is being processed</p>
        </div>
      </div>

      {/* <div className={s.modal__orderInfo}>
        <div className={s.modal__orderInfo_row}>
          <p className={s.modal__orderInfo_text}>Order Number:</p>
          <p>{order?.order_number}</p>
        </div>

        <div className={s.modal__orderInfo_row}>
          <p className={s.modal__orderInfo_text}>Total Amount Paid:</p>
          <p>{`${order?.total_amount} €`}</p>
        </div>

        <div className={s.modal__orderInfo_row}>
          <p className={s.modal__orderInfo_text}>Date & Time:</p>
          <p className={s.modal__orderInfo_info}>{order?.created_at}</p>
        </div>
      </div> */}

      <div className={s.btn__wrapper}>
        <Button className={s.btn} isDisabled={false} title="Continue shopping" onClick={handleContinueShopping} />
      </div>
    </div>
  );
};
