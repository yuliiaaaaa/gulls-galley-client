import { AppRoute } from '../../../libs/enum/app-route-enum';
import { useGetOrdersQuery } from '../../../redux/orders/ordersApi';
import { OrderList } from '../../checkout/order-summary/OrderList';
import { LinkComponent } from '../../utils/link/Link';
import { OrdersList } from './OrdersList';
import s from './orderInfo.module.scss';

export const OrderInfo = () => {
  const { data, isError, isLoading } = useGetOrdersQuery({ limit: 5 });
  const orders = data || [];
  console.log(orders);

  return (
    <div className={s.orders}>
      <h1 className={s.orders__title}>Orders</h1>

      {orders?.length === 0 && !isError && !isLoading ? (
        <div className={s.orders__block}>
          <p className={s.orders__text}>You haven’t placed any orders yet.</p>

          <div className={s.orders__link_block}>
            <LinkComponent
              children="Continue shopping"
              to={AppRoute.CATALOG}
              router={true}
              className={s.orders__link}
            />
          </div>
        </div>
      ) : (
        <OrdersList orders={orders} />
      )}
    </div>
  );
};
