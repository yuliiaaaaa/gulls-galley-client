import { getProductType } from '../../../libs/helpers/getProductType';
import { CartItem } from '../../../libs/types/Cart';
import { ProductPrice } from '../../utils/product-price/ProductPrice';
import s from './Order.module.scss';

type Props = {
  order: CartItem;
};
export const Order: React.FC<Props> = ({ order }) => {
  return (
    <div className={s.card}>
      <div className={s.img__wrapper}>
        <div className={s.card__count}>{order.quantity}</div>
        <img className={s.img} src={order.product.main_image_url} />
      </div>

      <div className={s.card__left}>
        <p className={s.card__title}>{order.product.name}</p>

        <ProductPrice
          productType={getProductType(order.product) || []}
          originalPrice={order.product.price}
          discountedPrice={order.product.discounted_price}
          customStyles={{
            container: s.card__price_block,
            discountedPrice: s.card__price_discount,
            originalPrice: s.card__price,
            discountStyle: s.card__price_discount_style,
          }}
        />
      </div>
    </div>
  );
};
