import { useGetCartQuery } from '../../../redux/cart/cartApi';
import { ContactInformation } from '../contact-info/ContactInformation';
import { OrderList } from './OrderList';
import s from './OrderSummary.module.scss';

export const OrderSummary = () => {
  const { data: cart, isLoading, isSuccess } = useGetCartQuery();
  const ordersItems = cart?.items || [];

  return (
    <div className={`${s.summ} ${s.container}`}>
      <h1 className={s.summ__title}>Order Summary</h1>
      <OrderList items={ordersItems} />
      <div className={s.summ__price}>
        <p className={s.summ__price_text}>Total</p>
        <p className={s.summ__price_summ}>{`${cart?.total_price} €`}</p>
      </div>
    </div>
  );
};
