import { CartItem } from '../../../libs/types/Cart';
import { Order } from './Order';
import s from './orderlist.module.scss'

type Props = {
  items: CartItem[];
};

export const OrderList: React.FC<Props> = ({ items }) => {
  return (
    <div className={s.list}>
      {items.map((item) => (
        <Order key={item.id} order={item} />
      ))}
    </div>
  );
};
