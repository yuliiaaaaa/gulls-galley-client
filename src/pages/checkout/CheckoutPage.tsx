import { ContactInformation } from '../../components/checkout/contact-info/ContactInformation';
import { OrderSummary } from '../../components/checkout/order-summary/OrderSummary';
import { Button } from '../../components/utils/button/Button';
import s from './Checkoutpage.module.scss';

export const CheckoutPage = () => {
  return (
    <div className={s.checkout}>
      <div className={s.checkout__blocks}>
        <ContactInformation />
        <OrderSummary />
      </div>

      <div className={s.checkout__payment_btn_wrapper}>
        <Button className={s.checkout__payment_btn} isDisabled={false} title="Proceed to Payment" />
      </div>
    </div>
  );
};
