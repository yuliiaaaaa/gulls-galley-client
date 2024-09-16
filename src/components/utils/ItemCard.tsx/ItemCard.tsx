import { FC } from 'react';
import { Item } from '../../../libs/types/Item';
import s from './ItemCard.module.scss';
import { Link } from 'react-router-dom';
import SvgIcon from '../svg-icon/SvgIcon';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { getProductLabel } from '../../../libs/helpers/getProductLabelHelper';
import { FiltersProductType } from '../../../libs/enum/Filters';
import { Product } from '../../../libs/types/Product';

type Props = {
  item: Product;
  productType?: string | undefined;
};

export const ItemCard: FC<Props> = ({ item, productType }) => {
  const isDiscounted = productType === FiltersProductType.SALE;
  return (
    <div className={s.card}>
      <Link to={`${AppRoute.CATALOG}/${item.id}`} className={s.card__link}>
        <div className={s.card__img_wrapper}>
          <img className={s.card__img} src={item.main_image_url} alt="item" />
          <SvgIcon className={s.card__heart} id="heart" />
          {getProductLabel(productType, s.card__label)}
        </div>

        <p className={s.card__title}>{item.name}</p>
        <p className={s.card__description}>{item.short_description}</p>

        {isDiscounted ? (
          <div className={s.card__price_block}>
            <p className={s.card__price_discount}>{`${item.discounted_price} €`}</p>
            <p className={`${s.card__price} ${s.card__price_discount_style}`}>{`${item.price} €`}</p>
          </div>
        ) : (
          <p className={s.card__price}>{`${item.price} €`}</p>
        )}
      </Link>
    </div>
  );
};
