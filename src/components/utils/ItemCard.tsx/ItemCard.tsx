import { FC } from 'react';
import { Item } from '../../../libs/types/Item';
import s from './ItemCard.module.scss';
import { Link } from 'react-router-dom';
import SvgIcon from '../svg-icon/SvgIcon';
import { AppRoute } from '../../../libs/enum/app-route-enum';
import { getProductLabel } from '../../../libs/helpers/getProductLabelHelper';
import { FiltersProductType } from '../../../libs/enum/Filters';
import { Product } from '../../../libs/types/products/Product';
import { ProductPrice } from '../product-price/ProductPrice';
import { useFavoriteToggle } from '../../../libs/hooks/useFavoriteToggle';

type Props = {
  item: Product;
  productType?: string[] | undefined;
  onRemoveFavorite?: (id:number) => void;
};

export const ItemCard: FC<Props> = ({ item, productType, onRemoveFavorite }) => {
  const { id, slug } = item;
  const { favoriteStatus, handleAddToFavorites } = useFavoriteToggle(slug);

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    handleAddToFavorites(id);
    if (favoriteStatus && onRemoveFavorite) {
      onRemoveFavorite(id);
    }
  };

  return (
    <div className={s.card}>
      <Link to={`${AppRoute.CATALOG}/${item.slug}`} className={s.card__link}>
        <div className={s.card__img_wrapper}>
          <img className={s.card__img} src={item.main_image_url} alt="item" />
          <SvgIcon
            className={s.card__heart}
            id={favoriteStatus ? 'heart-filled' : 'heart'}
            onClick={handleFavoriteClick}
            color={favoriteStatus ? 'black' : 'white'}
          />
          {getProductLabel(productType, s.card__label)}
        </div>

        <p className={s.card__title}>{item.name}</p>
        <p className={s.card__description}>{item.short_description}</p>

        <ProductPrice
          productType={productType || []}
          originalPrice={item.price}
          discountedPrice={item.discounted_price}
          customStyles={{
            container: s.card__price_block,
            discountedPrice: s.card__price_discount,
            originalPrice: s.card__price,
            discountStyle: s.card__price_discount_style,
          }}
        />
      </Link>
    </div>
  );
};
