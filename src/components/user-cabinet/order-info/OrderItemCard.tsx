import { Item } from '../../../libs/types/Item';
import { Order, OrderItem } from '../../../libs/types/Order';
import s from './orderItemCard.module.scss';

type Props = {
  item:OrderItem;
};

export const OrderItemCard: React.FC<Props> = ({ item }) => {
  return (
    <div className={s.card}>
      <div className={s.img__wrapper}>
        <img className={s.img} src={item.product_image} />
      </div>

      <div className={s.card__left}>
        <div className={s.card__header}>
          <p className={s.card__title}>{item.product_name}</p>
        </div>

        <p className={s.card__price}>{`${item.price} €`}</p>
      </div>
    </div>
  );
};
