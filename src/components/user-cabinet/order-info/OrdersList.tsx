import { OrderInCabinet } from '../../../libs/types/Order';
import { Order } from './Order';
import s from './orderList.module.scss';

type Props = {
  orders: OrderInCabinet[];
};

export const OrdersList: React.FC<Props> = ({ orders }) => {
  return (
    <div className={s.list}>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};
