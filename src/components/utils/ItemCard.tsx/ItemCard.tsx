import { FC } from 'react';
import { Item } from '../../../libs/types/Item';
import s from './ItemCard.module.scss';
import { Link } from 'react-router-dom';
import SvgIcon from '../svg-icon/SvgIcon';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { getProductLabel } from '../../../libs/helpers/getProductLabelHelper';
import { ProductsType } from '../../../libs/enum/labels-enum';

type Props = {
  item: Item;
  productType: string | undefined;
};

export const ItemCard: FC<Props> = ({ item, productType }) => {
  return (
    <div className={s.card}>
      <Link to={`${AppRoute.CATALOG}/${item.id}`} className={s.card__link}>
        <div className={s.card__img_wrapper}>
          <img className={s.card__img} src={item.imageUrl} alt="item" />
          <SvgIcon className={s.card__heart} id="heart" />
          {getProductLabel(productType, s.card__label)}
        </div>
        <p className={s.card__title}>{item.title}</p>
        <p className={s.card__description}>{item.description}</p>
        <p className={s.card__price}>{item.price}</p>
      </Link>
    </div>
  );
};
