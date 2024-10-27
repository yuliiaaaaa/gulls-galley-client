import { OrderInCabinet, Order as OrderType } from '../../../libs/types/Order';
import { Button } from '../../utils/button/Button';
import SvgIcon from '../../utils/svg-icon/SvgIcon';
import s from './Order.module.scss';
import { OrderItemCard } from './OrderItemCard';
import { Item } from '../../../libs/types/Item';
import { getDataInTimeFormatFromIso } from '../../../libs/helpers/getDateInTimeFormat';

type Props = {
  order: OrderInCabinet;
};

export const Order: React.FC<Props> = ({ order }) => {
  return (
    <div className={s.order}>
      <div className={s.order__header}>
        <p className={s.order__number}>{`Order № ${order.order_number}`}</p>
        <div className={s.order__spliter}></div>
        <p className={s.order__data}>{getDataInTimeFormatFromIso(order.created_at)}</p>
        <div className={s.order__spliter}></div>
        <p className={s.order__status}>{order.status}</p>
      </div>

      <div className={s.order__list}>
        {order.items.map((item) => (
          <OrderItemCard item={item} />
        ))}
      </div>

      <div className={s.order__bottom}>
        <div className={s.order__left}>
          <Button className={s.order__button} isDisabled={false} title="Cancel order" />
          <SvgIcon id="close" className={s.order__icon} />
        </div>

        <p className={s.order__total}>{`Total: ${order.total_amount} €`}</p>
      </div>
    </div>
  );
};
